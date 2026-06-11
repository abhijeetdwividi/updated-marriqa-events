import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import Packages from "@/components/legacy/Packages";
import FinalCTA from "@/components/legacy/FinalCTA";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Wedding & Event Packages",
    description:
        "Explore wedding, engagement, destination wedding, decor and private event packages by Marriqa Events.",
};

export default function PackagesPage() {
    return (
        <MarketingShell>
            <Packages />
            <FinalCTA
                eyebrow="Custom Packages"
                title="Need a package based on your guest count and venue?"
                buttonText="Request Custom Quote"
                buttonHref="/contact"
            />
        </MarketingShell>
    );
}
