import type { Metadata } from "next";

import MarketingShell from "@/components/legacy/MarketingShell";
import About from "@/components/legacy/About";
import Founders from "@/components/legacy/Founders";
import Testimonials from "@/components/legacy/Testimonials";
import FinalCTA from "@/components/legacy/FinalCTA";

export const metadata: Metadata = {
    title: "About Marriqa Events",
    description:
        "Learn about Marriqa Events, a luxury wedding planning and event design company for weddings, destination celebrations and premium events.",
};

export default function AboutPage() {
    return (
        <MarketingShell>
            <About />
            <Founders />
            <Testimonials />
            <FinalCTA />
        </MarketingShell>
    );
}
