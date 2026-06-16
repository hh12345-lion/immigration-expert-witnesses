"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";
import { initGoogleConsentDefaults, updateGoogleConsent } from "@/lib/cookies/consent-mode";
import {
  createScriptRegistry,
  syncTrackingScripts,
  type TrackingScriptConfig,
} from "@/lib/cookies/script-registry";
import { readStoredConsent, writeStoredConsent } from "@/lib/cookies/storage";
import {
  ACCEPT_ALL_CONSENT,
  REJECT_NON_ESSENTIAL_CONSENT,
  type CategoryConsent,
  type ConsentStatus,
  DEFAULT_CATEGORY_CONSENT,
} from "@/lib/cookies/types";

type CookieConsentContextValue = {
  status: ConsentStatus;
  choices: CategoryConsent;
  isPreferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (choices: CategoryConsent) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<ConsentStatus>("pending");
  const [choices, setChoices] = useState<CategoryConsent>(DEFAULT_CATEGORY_CONSENT);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const registryRef = useRef<TrackingScriptConfig[] | null>(null);

  const applyConsent = useCallback((next: CategoryConsent) => {
    const normalized: CategoryConsent = { ...next, necessary: true };
    writeStoredConsent(normalized);
    setChoices(normalized);
    setStatus("granted");
    updateGoogleConsent(normalized);
    if (!registryRef.current) {
      registryRef.current = createScriptRegistry();
    }
    syncTrackingScripts(normalized, registryRef.current);
  }, []);

  useEffect(() => {
    initGoogleConsentDefaults();
    registryRef.current = createScriptRegistry();
    const stored = readStoredConsent();
    if (stored) {
      setChoices(stored.choices);
      setStatus("granted");
      updateGoogleConsent(stored.choices);
      syncTrackingScripts(stored.choices, registryRef.current);
    }
    setMounted(true);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent(ACCEPT_ALL_CONSENT);
    setIsPreferencesOpen(false);
  }, [applyConsent]);

  const rejectNonEssential = useCallback(() => {
    applyConsent(REJECT_NON_ESSENTIAL_CONSENT);
    setIsPreferencesOpen(false);
  }, [applyConsent]);

  const savePreferences = useCallback(
    (draft: CategoryConsent) => {
      applyConsent(draft);
      setIsPreferencesOpen(false);
    },
    [applyConsent]
  );

  const value = useMemo(
    () => ({
      status,
      choices,
      isPreferencesOpen,
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [status, choices, isPreferencesOpen, acceptAll, rejectNonEssential, savePreferences]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {mounted && (
        <>
          <CookieBanner />
          <CookiePreferencesModal />
        </>
      )}
    </CookieConsentContext.Provider>
  );
}
