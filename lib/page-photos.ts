import { photos, type Photo } from "@/lib/photos";

/** One photograph per content page, keyed by slug. */
const BY_SLUG: Record<string, Photo> = {
  // Witness types
  "country-condition-expert-witness": photos.heratLandscape,
  "persecution-expert-witness": photos.kabulOldCity,
  "human-rights-expert-witness": photos.campTents,
  "linguistic-identity-expert-witness": photos.interpreterBooths,
  "internal-relocation-expert-witness": photos.kurdistanVillage,
  "cpin-challenge-expert-witness": photos.archivesReadingRoom,
  "medical-psychiatric-expert-witness": photos.archivesResearchers,
  "oral-evidence-witness": photos.witnessBox,
  // Case types
  "ftt-asylum-appeal": photos.taylorHouse,
  "upper-tribunal-appeal": photos.fieldHouse,
  "deportation-removal": photos.asmaraStreet,
  "fresh-claims": photos.tigrayHighlands,
  "human-rights-claims": photos.campTents,
  "country-guidance-challenges": photos.antiqueGlobe,
  "judicial-review": photos.innerTemple,
  "administrative-review": photos.lincolnsLibrary,
  // Guides
  "cpr-part-35-immigration-guide": photos.lincolnsInn,
  "instructing-immigration-expert-witness": photos.archivesResearchers,
  "oral-evidence-tribunal-guide": photos.witnessBox,
  "choosing-right-expert-witness": photos.atlasGlobe,
  "legal-aid-expert-witness-guide": photos.lincolnsLibrary,
  "witness-vs-report-expert-guide": photos.archivesReadingRoom,
  // Tribunal evidence
  "instructing-expert-witness": photos.innerTemple,
  "expert-report-submission-deadlines": photos.fieldHouseEntrance,
  "oral-evidence-hearing": photos.witnessBox,
  "cross-examination-preparation": photos.taylorHouse,
  "joint-statement-meetings": photos.lincolnsInn,
  "legal-aid-expert-witness-rates": photos.lincolnsLibrary,
};

/** Photographs for section and standalone pages. */
export const sectionPhotos = {
  witnessTypes: photos.heratLandscape,
  caseTypes: photos.taylorHouse,
  tribunalEvidence: photos.fieldHouse,
  guides: photos.archivesReadingRoom,
  blog: photos.khartoumNile,
  contact: photos.fieldHouseEntrance,
  faq: photos.interpreterBooths,
  fees: photos.lincolnsLibrary,
  glossary: photos.archivesResearchers,
  howToInstruct: photos.innerTemple,
  network: photos.atlasGlobe,
  qualifications: photos.lincolnsInn,
  services: photos.tigrayHighlands,
  framework: photos.lincolnsInn,
  oralEvidence: photos.witnessBox,
  whatIs: photos.antiqueGlobe,
  legal: photos.asmaraStreet,
  thankYou: photos.kurdistanVillage,
  credits: photos.atlasGlobe,
} satisfies Record<string, Photo>;

const POOL: Photo[] = [
  photos.kurdistanVillage,
  photos.tigrayHighlands,
  photos.asmaraStreet,
  photos.khartoumNile,
  photos.antiqueGlobe,
];

export function photoFor(slug: string): Photo {
  return BY_SLUG[slug] ?? fallbackPhoto(slug);
}

/** A stable topical photograph for a page that has none of its own. */
export function fallbackPhoto(seed: string): Photo {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return POOL[h % POOL.length];
}
