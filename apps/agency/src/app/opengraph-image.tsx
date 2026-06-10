import { ImageResponse } from "next/og";

export const alt = "Atelier North — Boutique Creative Studio";
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
          justifyContent: "flex-end",
          padding: 80,
          background: "#1c1917",
        }}
      >
        <div style={{ fontSize: 24, color: "#a8a29e", letterSpacing: 6, textTransform: "uppercase" }}>
          Creative Studio
        </div>
        <div style={{ fontSize: 80, fontWeight: 600, color: "#fafaf9", fontFamily: "serif", marginTop: 16 }}>
          Atelier North
        </div>
        <div style={{ fontSize: 28, color: "#d6d3d1", marginTop: 20, maxWidth: 700 }}>
          Brand storytelling, editorial typography, and refined project craft.
        </div>
      </div>
    ),
    { ...size },
  );
}
