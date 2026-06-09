import { ImageResponse } from "next/og";

export const size = {
    width: 180,
    height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "#0b0b0b",
                color: "#d4af37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 118,
                fontWeight: 600,
                fontFamily: "serif",
                border: "6px solid #d4af37",
            }}
        >
            M
        </div>,
        {
            ...size,
        },
    );
}
