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
          backgroundColor: "#121614",
          padding: 72,
          backgroundImage:
            "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(110,36,51,0.45), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(58,82,68,0.3), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            backgroundColor: "#6e2433",
            color: "#f2f3f0",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: 28,
          }}
        >
          IEW
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#f2f3f0",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Immigration Expert Witnesses
        </div>
        <div
          style={{
            marginTop: 20,
            width: 72,
            height: 3,
            backgroundColor: "#6e2433",
          }}
        />
        <p
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(242,243,240,0.72)",
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
