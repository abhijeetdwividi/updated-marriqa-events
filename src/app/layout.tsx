import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Luxury Wedding Planner in Delhi NCR | Marriqa Events",
    description:
        "Marriqa Events is a luxury wedding planner and premium event management company in Delhi NCR, Rajasthan & Uttarakhand. We create destination weddings, luxury decor, engagement ceremonies, birthday galas & unforgettable celebrations across India.",
    keywords: [
        "luxury wedding planner Delhi NCR",
        "premium wedding planner India",
        "destination wedding planner Rajasthan",
        "wedding planner Meerut",
        "luxury wedding decor",
        "event management company Delhi NCR",
        "wedding decorator India",
    ],
    authors: [{ name: "Marriqa Events" }],
    robots: "index, follow",
    themeColor: "#0b0b0b",
    alternates: {
        canonical: "https://marriqaevents.com/",
    },
    icons: {
        icon: "/images/logonew.jpeg",
    },
    openGraph: {
        title: "Marriqa Events | Luxury Wedding Planner",
        description:
            "Luxury weddings, premium decor, destination celebrations & unforgettable experiences across Delhi NCR, Rajasthan & Uttarakhand.",
        type: "website",
        url: "https://marriqaevents.com/",
        images: ["/images/logonew.jpeg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Marriqa Events | Luxury Wedding Planner",
        description:
            "Luxury weddings, destination events & premium decor company in India.",
        images: ["/images/logonew.jpeg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Poppins:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
