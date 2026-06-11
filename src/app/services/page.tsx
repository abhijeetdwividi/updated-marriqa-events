import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import Services from "@/components/legacy/Services";
import FinalCTA from "@/components/legacy/FinalCTA";

export const metadata: Metadata = {
    title: "Wedding Planning Services",
    description:
        "Explore Marriqa Events services including wedding planning, decor, destination weddings, hospitality, entertainment, venue selection and event execution.",
};

export default function ServicesPage() {
    return (
        <MarketingShell>
            <Services />
            <FinalCTA
                eyebrow="Services by Marriqa"
                title="Need a complete planning team for your celebration?"
                buttonText="Request Service Proposal"
                buttonHref="/contact"
            />
        </MarketingShell>
    );
}
