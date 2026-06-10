import { ImageResponse } from "next/og";

export const alt = "Forma — Premium Home Goods";
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
          background: "#faf8f5",
        }}
      >
        <div style={{ fontSize: 24, color: "#78716c", letterSpacing: 4, textTransform: "uppercase" }}>
          Premium Home Goods
        </div>
        <div style={{ fontSize: 76, fontWeight: 600, color: "#292524", fontFamily: "serif", marginTop: 16 }}>
          Forma Shop
        </div>
        <div style={{ fontSize: 28, color: "#57534e", marginTop: 20, maxWidth: 720 }}>
          Conversion-focused commerce UX — browse, cart, and guest checkout.
        </div>
      </div>
    ),
    { ...size },
  );
}
