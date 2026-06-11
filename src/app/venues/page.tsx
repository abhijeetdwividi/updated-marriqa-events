import type { Metadata } from "next";
import MarketingShell from "@/components/legacy/MarketingShell";
import VenuePartners from "@/components/legacy/VenuePartners";
import FinalCTA from "@/components/legacy/FinalCTA";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Wedding Venues & Venue Partners | Marriqa Events",
    description:
        "Explore curated wedding venues and venue partners across Delhi NCR, Noida, Mussoorie, Jim Corbett, Uttarakhand, Rajasthan and more.",
};

const selectionCriteria = [
    "Room inventory",
    "Guest flow",
    "Food movement",
    "Event spaces",
    "Access & parking",
    "Decor possibilities",
];

export default function VenuesPage() {
    return (
        <MarketingShell>
            <main className="venues-page-v2 venues-page-refined">
                <section className="vn-hero">
                    <div className="vn-hero-glow"></div>

                    <div className="vn-hero-inner">
                        <div className="vn-hero-copy reveal-left">
                            <span className="vn-kicker">Curated Venues</span>

                            <h1>Not just a venue list.</h1>

                            <p>
                                We shortlist venues based on rooms, guest flow,
                                food movement, event spaces, access and the
                                celebration experience your family actually
                                needs.
                            </p>

                            <div className="vn-hero-proof">
                                <div>
                                    <strong>Room Fit</strong>
                                    <span>
                                        Inventory matched to your guest stay
                                        plan.
                                    </span>
                                </div>

                                <div>
                                    <strong>Function Flow</strong>
                                    <span>
                                        Spaces checked for haldi, mehendi,
                                        wedding and reception movement.
                                    </span>
                                </div>

                                <div>
                                    <strong>Budget Sense</strong>
                                    <span>
                                        Options filtered by practical cost,
                                        logistics and experience value.
                                    </span>
                                </div>
                            </div>

                            <div className="vn-hero-actions">
                                <a
                                    href="/contact"
                                    className="vn-btn vn-btn-primary"
                                >
                                    Check Venue Availability
                                </a>

                                <a
                                    href="#venue-partners"
                                    className="vn-btn vn-btn-secondary"
                                >
                                    Explore Venues
                                </a>
                            </div>
                        </div>

                        <aside className="vn-hero-panel reveal-right">
                            <span className="vn-panel-label">
                                Venue Curation Lens
                            </span>

                            <div className="vn-panel-list">
                                {selectionCriteria.map((item, index) => (
                                    <div key={item}>
                                        <strong>
                                            {String(index + 1).padStart(2, "0")}
                                        </strong>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </section>

                <VenuePartners />

                <FinalCTA
                    eyebrow="Venue Shortlisting"
                    title="Want us to shortlist venues for your date and budget?"
                    text="Share your city, guest count, room requirement and event dates. We’ll help you find venue options that make practical and premium sense."
                    buttonText="Check Venue Availability"
                    buttonHref="/contact"
                />
            </main>
        </MarketingShell>
    );
}
