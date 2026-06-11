import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import Gallery from "@/components/legacy/Gallery";
import FinalCTA from "@/components/legacy/FinalCTA";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Wedding Portfolio",
    description:
        "Explore Marriqa Events wedding decor, engagement setups, destination weddings, luxury tablescapes and event design portfolio.",
};

export default function PortfolioPage() {
    return (
        <MarketingShell>
            <Gallery />
            <FinalCTA
                eyebrow="Inspired by our work?"
                title="Let’s design a celebration with your own story and style."
                buttonText="Plan Similar Event"
                buttonHref="/contact"
            />
        </MarketingShell>
    );
}
