import { ImageResponse } from "next/og";
export const runtime = "edge";

export const alt = "mapcn - Beautiful maps, made simple";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgb(3, 7, 30) 0%, rgb(15, 52, 96) 50%, rgb(56, 189, 248) 100%)",
          paddingTop: "60px",
        }}
      >
        {/* Title Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            mapcn
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: "rgba(186, 230, 253, 0.95)",
              letterSpacing: "-0.5px",
            }}
          >
            Beautiful maps, made simple
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%) translateY(10%)",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
            width: "880px",
            height: "420px",
          }}
        >
          <img
            src={`${siteUrl}/map-preview.png`}
            alt="Map Preview"
            style={{
              objectFit: "contain",
              objectPosition: "bottom",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
