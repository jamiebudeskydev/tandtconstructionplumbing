import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#C84B31",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: -2,
          }}
        >
          T&T
        </div>
      </div>
    ),
    { ...size },
  );
}
