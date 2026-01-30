import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "T & T Construction & Plumbing — Licensed Contractor in Newville, PA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#141B2D",
          padding: "60px",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            display: "flex",
            width: 80,
            height: 6,
            backgroundColor: "#C84B31",
            borderRadius: 3,
            marginBottom: 32,
          }}
        />

        {/* Business name */}
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          T & T Construction & Plumbing
        </div>

        {/* Subtext */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#8E9AB3",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Licensed Contractor | Newville, PA | Since 2006
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: 400,
            height: 1,
            backgroundColor: "#2D3554",
            marginTop: 40,
            marginBottom: 40,
          }}
        />

        {/* Phone */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#C84B31",
          }}
        >
          (717) 776-7319
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#647291",
            marginTop: 16,
          }}
        >
          Family-Owned | Plumbing | Construction | Remodeling | Electrical
        </div>
      </div>
    ),
    { ...size },
  );
}
