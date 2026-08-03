import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background:
          "linear-gradient(135deg, #04070a 0%, #070b10 45%, #102838 100%)",
        color: "#e8eef3",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#f88838",
        }}
      >
        {siteConfig.role}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#b6c2ce",
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          React · Next.js · TypeScript — featured project:{" "}
          {siteConfig.productName}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 20, color: "#8b97a5" }}>
        {siteConfig.name} · {siteConfig.role}
      </div>
    </div>,
    { ...size },
  );
}
