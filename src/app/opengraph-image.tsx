import { ImageResponse } from "next/og";

export const alt = "Marriqa Events - Luxury Wedding Planning and Event Design";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                background:
                    "linear-gradient(135deg, #080808 0%, #12080d 52%, #080808 100%)",
                color: "#f5f0e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                fontFamily: "serif",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: "44px",
                    border: "1px solid rgba(212, 175, 55, 0.34)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: "64px",
                    border: "1px solid rgba(232, 220, 203, 0.08)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "92px",
                    width: "72px",
                    height: "1px",
                    background: "#d4af37",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    maxWidth: "920px",
                    padding: "0 80px",
                }}
            >
                <div
                    style={{
                        color: "#d4af37",
                        fontSize: "88px",
                        lineHeight: "0.95",
                        letterSpacing: "16px",
                        textTransform: "uppercase",
                        fontWeight: 400,
                    }}
                >
                    Marriqa
                </div>

                <div
                    style={{
                        color: "#e8dccb",
                        fontSize: "46px",
                        lineHeight: "1",
                        letterSpacing: "12px",
                        textTransform: "uppercase",
                        fontStyle: "italic",
                        marginTop: "12px",
                    }}
                >
                    Events
                </div>

                <div
                    style={{
                        width: "260px",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, #d4af37, transparent)",
                        marginTop: "38px",
                        marginBottom: "34px",
                    }}
                />

                <div
                    style={{
                        color: "rgba(245, 240, 232, 0.86)",
                        fontSize: "30px",
                        lineHeight: "1.35",
                        letterSpacing: "1px",
                        fontWeight: 300,
                    }}
                >
                    Luxury Wedding Planning & Event Design
                </div>

                <div
                    style={{
                        marginTop: "30px",
                        color: "#d4af37",
                        fontSize: "18px",
                        letterSpacing: "5px",
                        textTransform: "uppercase",
                        fontWeight: 400,
                    }}
                >
                    Delhi NCR · Uttarakhand · Rajasthan · Pan India
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "82px",
                    color: "rgba(232, 220, 203, 0.55)",
                    fontSize: "17px",
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                }}
            >
                www.marriqaevents.com
            </div>
        </div>,
        {
            ...size,
        },
    );
}
