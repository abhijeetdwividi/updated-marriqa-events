import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import VenuePartners from "@/components/legacy/VenuePartners";
import DestinationFinderPreview from "@/components/legacy/DestinationFinderPreview";
import FinalCTA from "@/components/legacy/FinalCTA";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Wedding Venues & Venue Partners",
    description:
        "Explore curated wedding venues and venue partners across Delhi NCR, Noida, Mussoorie, Jim Corbett, Uttarakhand, Rajasthan and more.",
};

export default function VenuesPage() {
    return (
        <MarketingShell>
            <VenuePartners />
            <DestinationFinderPreview />
            <FinalCTA
                eyebrow="Venue Shortlisting"
                title="Want us to shortlist venues for your date and budget?"
                buttonText="Check Venue Availability"
                buttonHref="/contact"
            />
        </MarketingShell>
    );
}
