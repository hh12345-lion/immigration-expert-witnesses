import { ImageResponse } from "next/og";

export const alt = "Immigration Expert Witnesses - Immigration Tribunal Expert Evidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#18181b",
          padding: 72,
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(2,132,199,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: "#0284c7",
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          IW
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Immigration Expert Witnesses
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.35,
            maxWidth: 720,
          }}
        >
          Independent tribunal evidence for solicitors
        </p>
      </div>
    ),
    { ...size }
  );
}
