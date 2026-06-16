import { ImageResponse } from "next/og";

export const alt = "Immigration Expert Witnesses - UK Immigration Tribunal Expert Evidence";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A2744",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Immigration Expert Witnesses
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 30,
            fontWeight: 600,
            color: "#B8943E",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          UK Immigration Tribunal Expert Evidence
        </p>
      </div>
    ),
    { ...size }
  );
}
