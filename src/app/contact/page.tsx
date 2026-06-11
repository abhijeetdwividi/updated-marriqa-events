import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import Contact from "@/components/legacy/Contact";

export const metadata: Metadata = {
    title: "Contact Marriqa Events",
    description:
        "Contact Marriqa Events for wedding planning, destination weddings, decor, venue shortlisting and event management enquiries.",
};

export default function ContactPage() {
    return (
        <MarketingShell>
            <Contact />
        </MarketingShell>
    );
}
