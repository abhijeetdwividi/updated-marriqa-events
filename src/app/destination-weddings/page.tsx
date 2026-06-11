import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import DestinationWeddingFinder from "@/components/legacy/DestinationWeddingFinder";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Destination Wedding Finder",
    description:
        "Find destination wedding venues, styles and planning options across Jim Corbett, Mussoorie, Rishikesh, Noida, Rajasthan and Delhi NCR with Marriqa Events.",
};

export default function DestinationWeddingsPage() {
    return (
        <MarketingShell>
            <DestinationWeddingFinder />
        </MarketingShell>
    );
}
