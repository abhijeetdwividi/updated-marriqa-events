import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.marriqaevents.com";

const siteTitle =
    "Marriqa Events | Luxury Wedding Planner in Delhi NCR & Uttarakhand";

const siteDescription =
    "Marriqa Events designs luxury weddings, destination weddings, engagement ceremonies, premium decor, venue experiences, and bespoke event celebrations across Delhi NCR, Uttarakhand, Rajasthan, and Pan India.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: siteTitle,
        template: "%s | Marriqa Events",
    },

    description: siteDescription,

    keywords: [
        "Marriqa Events",
        "Luxury wedding planner",
        "Wedding planner in Delhi NCR",
        "Destination wedding planner",
        "Wedding decor Delhi",
        "Wedding planner Uttarakhand",
        "Wedding planner Mussoorie",
        "Wedding planner Jim Corbett",
        "Wedding planner Rajasthan",
        "Engagement decor",
        "Luxury event planner India",
    ],

    authors: [{ name: "Marriqa Events" }],
    creator: "Marriqa Events",
    publisher: "Marriqa Events",

    alternates: {
        canonical: "/",
    },

    icons: {
        icon: [
            {
                url: "/favicon.svg",
                type: "image/svg+xml",
            },
        ],
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "/",
        siteName: "Marriqa Events",
        title: siteTitle,
        description: siteDescription,
        images: [
            {
                url: `${siteUrl}/opengraph-image`,
                width: 1200,
                height: 630,
                alt: "Marriqa Events luxury wedding planner and event designer",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: [`${siteUrl}/twitter-image`],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#050505",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="shortcut icon" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/favicon.svg" />

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
