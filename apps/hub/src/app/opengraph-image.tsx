import { ImageResponse } from "next/og";

export const alt = "Portfolio Hub — UI/UX Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #ffffff 100%)",
        }}
      >
        <div style={{ fontSize: 28, color: "#2563eb", fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
          UI/UX · Frontend
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#0a0a0a", lineHeight: 1.1, marginTop: 24, maxWidth: 900 }}>
          Portfolio Hub
        </div>
        <div style={{ fontSize: 32, color: "#525252", marginTop: 24, maxWidth: 800 }}>
          Six demos. One narrative. SaaS, agency, commerce, mobile, and editorial craft.
        </div>
      </div>
    ),
    { ...size },
  );
}
