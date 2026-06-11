import type { Metadata } from "next";
import MarketingShell from "@/components/legacy/MarketingShell";

export const metadata: Metadata = {
    title: "Services | Marriqa Events",
    description:
        "Luxury wedding planning, destination weddings, decor, hospitality, entertainment and venue support by Marriqa Events.",
};

const services = [
    {
        count: "01",
        eyebrow: "Planning",
        title: "Wedding Planning",
        text: "Structured planning for families who want clear budgets, vendor direction, event timelines and calm on-ground execution.",
        includes: ["Event flow", "Budgeting", "Vendor coordination"],
    },
    {
        count: "02",
        eyebrow: "Experience Design",
        title: "Decor & Styling",
        text: "Theme direction, stage concepts, tablescapes, floral language and visual detailing designed around the emotion of your celebration.",
        includes: ["Theme direction", "Stage design", "Tablescapes"],
    },
    {
        count: "03",
        eyebrow: "Weddings Away",
        title: "Destination Weddings",
        text: "Venue discovery and wedding weekend planning across curated resorts, hill retreats, forest properties and luxury city venues.",
        includes: ["Venue shortlist", "Room planning", "Event flow"],
    },
    {
        count: "04",
        eyebrow: "Guest Experience",
        title: "Hospitality",
        text: "Thoughtful guest handling from arrivals and welcome moments to room hampers, itineraries, helpdesk and family assistance.",
        includes: ["Guest welcome", "Helpdesk", "Room hampers"],
    },
    {
        count: "05",
        eyebrow: "Celebration Energy",
        title: "Entertainment",
        text: "Artists, singers, DJs, bands, hosts, games and special moments curated according to the mood of each function.",
        includes: ["Artists", "Live music", "Special entries"],
    },
    {
        count: "06",
        eyebrow: "Venue Support",
        title: "Venue Curation",
        text: "Venue shortlisting based on rooms, food flow, access, capacity, event spaces and overall family comfort.",
        includes: ["Capacity check", "Rooms", "Food flow"],
    },
];

const process = [
    {
        step: "Discover",
        text: "We understand your event date, guest count, family requirements, budget range and preferred city.",
    },
    {
        step: "Design",
        text: "We create the planning direction, decor mood, event flow, vendor scope and experience structure.",
    },
    {
        step: "Execute",
        text: "Our team coordinates timelines, vendors, setup, hospitality and on-ground event movement.",
    },
    {
        step: "Manage",
        text: "We stay present through the celebration so the family can enjoy the event without operational stress.",
    },
];

export default function ServicesPage() {
    return (
        <MarketingShell>
            <main className="services-page-v2">
                <section className="sv-hero">
                    <div className="sv-hero-glow"></div>

                    <div className="sv-hero-inner">
                        <div className="sv-hero-copy reveal-left">
                            <span className="sv-kicker">Marriqa Services</span>

                            <h1>One team for every celebration detail.</h1>

                            <p>
                                From venue discovery and wedding planning to
                                decor, hospitality, entertainment and on-ground
                                execution, Marriqa Events brings every part of
                                your celebration into one refined planning
                                system.
                            </p>

                            <div className="sv-hero-actions">
                                <a
                                    href="/contact"
                                    className="sv-btn sv-btn-primary"
                                >
                                    Plan Your Celebration
                                </a>

                                <a
                                    href="#service-categories"
                                    className="sv-btn sv-btn-secondary"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>

                        <aside className="sv-hero-panel reveal-right">
                            <span className="sv-panel-label">
                                Signature Planning Scope
                            </span>

                            <div className="sv-panel-list">
                                <div>
                                    <strong>01</strong>
                                    <span>Venue direction</span>
                                </div>

                                <div>
                                    <strong>02</strong>
                                    <span>Design language</span>
                                </div>

                                <div>
                                    <strong>03</strong>
                                    <span>Guest experience</span>
                                </div>

                                <div>
                                    <strong>04</strong>
                                    <span>Event execution</span>
                                </div>
                            </div>

                            <p className="sv-panel-note">
                                End-to-end support for weddings, anniversaries
                                and private celebrations.
                            </p>
                        </aside>
                    </div>
                </section>

                <section id="service-categories" className="sv-categories">
                    <div className="sv-section-head reveal">
                        <span className="sv-kicker">What We Manage</span>

                        <h2>
                            Luxury services designed around real event flow.
                        </h2>

                        <p>
                            Every service is planned as part of one complete
                            experience, not as isolated event elements.
                        </p>
                    </div>

                    <div className="sv-service-grid">
                        {services.map((service) => (
                            <article
                                className="sv-service-card reveal"
                                key={service.title}
                            >
                                <div className="sv-card-top">
                                    <span className="sv-card-count">
                                        {service.count}
                                    </span>

                                    <span className="sv-card-eyebrow">
                                        {service.eyebrow}
                                    </span>
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.text}</p>

                                <div className="sv-card-line"></div>

                                <div className="sv-card-tags">
                                    {service.includes.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="sv-process">
                    <div className="sv-process-copy reveal-left">
                        <span className="sv-kicker">Our Process</span>

                        <h2>From first brief to final execution.</h2>

                        <p>
                            Our process keeps planning practical, beautiful and
                            controlled, so families always know what is being
                            planned, what is pending and what comes next.
                        </p>
                    </div>

                    <div className="sv-process-grid reveal-right">
                        {process.map((item, index) => (
                            <article
                                className="sv-process-card"
                                key={item.step}
                            >
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.step}</h3>

                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="sv-final-cta reveal">
                    <div className="sv-final-cta-inner">
                        <span className="sv-kicker">Start Planning</span>

                        <h2>
                            Let’s plan a celebration your family can actually
                            enjoy.
                        </h2>

                        <p>
                            Share your date, city, guest count and preferred
                            services. We’ll help you understand the right venue,
                            planning scope and execution direction.
                        </p>

                        <div className="sv-final-actions">
                            <a
                                href="/contact"
                                className="sv-btn sv-btn-primary"
                            >
                                Plan Your Celebration
                            </a>

                            <a
                                href="https://wa.me/918252216549"
                                className="sv-btn sv-btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </MarketingShell>
    );
}
