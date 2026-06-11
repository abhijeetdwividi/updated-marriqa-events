import VenueFinder from "@/components/legacy/VenueFinder";
import FinalCTA from "@/components/legacy/FinalCTA";

const weddingStyles = [
    {
        title: "Hill Destination Wedding",
        text: "Best for sundowners, intimate pheras and luxury weekend celebrations.",
        meta: "Mussoorie · Dehradun · Rishikesh",
    },
    {
        title: "Jim Corbett Resort Wedding",
        text: "Perfect for nature-led weddings with rooms, lawns and multi-day functions.",
        meta: "Resorts · Lawns · 80–250 guests",
    },
    {
        title: "Riverside Wedding",
        text: "Ideal for soulful ceremonies, mehendi lunches and scenic guest experiences.",
        meta: "Rishikesh · Uttarakhand",
    },
    {
        title: "Noida Farmhouse Wedding",
        text: "Best for Delhi NCR couples looking for controlled budgets and flexible decor.",
        meta: "Noida · Farmhouse · Engagements",
    },
    {
        title: "Rajasthan Heritage Wedding",
        text: "For regal, editorial and palace-inspired wedding experiences.",
        meta: "Jaipur · Heritage · Luxury",
    },
    {
        title: "Luxury Hotel Wedding",
        text: "For couples who want rooms, banquet, hospitality and premium service under one roof.",
        meta: "Delhi NCR · Jaipur · Varanasi",
    },
];

const destinations = [
    "Jim Corbett",
    "Mussoorie",
    "Rishikesh",
    "Dehradun",
    "Noida",
    "Delhi NCR",
    "Nainital / Bhimtal",
    "Jaipur / Rajasthan",
    "Varanasi",
];

const budgetBuckets = [
    {
        title: "Intimate Wedding",
        range: "Under ₹15L",
        text: "Best for compact guest lists, private venues and curated decor.",
    },
    {
        title: "Destination Wedding",
        range: "₹25L–₹45L",
        text: "Ideal for 80–150 guests with rooms, meals and key wedding functions.",
    },
    {
        title: "Premium Resort Wedding",
        range: "₹45L–₹75L",
        text: "Best for 2-day celebrations with venue, decor, hospitality and entertainment.",
    },
    {
        title: "Luxury Destination Wedding",
        range: "₹75L+",
        text: "For full-scale destination weddings with premium venues and complete planning.",
    },
];

const processSteps = [
    "Understand guest count, rooms and event style",
    "Shortlist suitable destinations and venues",
    "Create function-wise budget and planning scope",
    "Design decor, experiences and hospitality flow",
    "Coordinate vendors, artists, logistics and rooms",
    "Execute the wedding on-ground with Marriqa’s team",
];

export default function DestinationWeddingFinder() {
    return (
        <main>
            <section className="destination-page-hero">
                <div className="destination-page-hero-content reveal">
                    <span className="section-label">
                        Destination Weddings by Marriqa
                    </span>

                    <h1>
                        Find the right destination, venue and planning
                        direction.
                    </h1>

                    <p>
                        From hill resorts to riverside retreats, Noida
                        farmhouses and heritage-inspired venues, Marriqa helps
                        you shortlist wedding destinations with clarity around
                        rooms, budget, guest count and execution.
                    </p>

                    <div className="destination-hero-stats">
                        <span>50–300 Guests</span>
                        <span>2-Day Plans</span>
                        <span>Venue + Decor + Hospitality</span>
                    </div>

                    <div className="destination-hero-actions">
                        <a href="#quick-match" className="btn-primary">
                            Start Quick Match
                        </a>
                        <a href="/contact" className="btn-secondary">
                            Talk to Planner
                        </a>
                    </div>
                </div>
            </section>

            <section id="quick-match" className="destination-section reveal">
                <div className="destination-section-header">
                    <span className="section-label">Quick Match</span>
                    <h2 className="section-title">
                        Start with your wedding style.
                    </h2>
                    <div className="gold-line"></div>
                    <p>
                        Choose the experience you imagine. We’ll help you match
                        it with the right destination, venue type, guest count
                        and budget direction.
                    </p>
                </div>

                <div className="destination-style-grid">
                    {weddingStyles.map((style) => (
                        <article
                            className="destination-style-card"
                            key={style.title}
                        >
                            <span>{style.meta}</span>
                            <h3>{style.title}</h3>
                            <p>{style.text}</p>
                            <a href="#venue-finder">Explore Matches</a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="destination-section reveal">
                <div className="destination-section-header">
                    <span className="section-label">Popular Locations</span>
                    <h2 className="section-title">
                        Wedding destinations we curate.
                    </h2>
                    <div className="gold-line"></div>
                </div>

                <div className="destination-location-grid">
                    {destinations.map((destination) => (
                        <a
                            href="#venue-finder"
                            className="destination-location-card"
                            key={destination}
                        >
                            {destination}
                        </a>
                    ))}
                </div>
            </section>

            <VenueFinder />

            <section className="destination-section reveal">
                <div className="destination-section-header">
                    <span className="section-label">Budget Direction</span>
                    <h2 className="section-title">
                        Choose a comfortable planning bracket.
                    </h2>
                    <div className="gold-line"></div>
                </div>

                <div className="budget-bucket-grid">
                    {budgetBuckets.map((bucket) => (
                        <article
                            className="budget-bucket-card"
                            key={bucket.title}
                        >
                            <span>{bucket.range}</span>
                            <h3>{bucket.title}</h3>
                            <p>{bucket.text}</p>
                            <a href="/contact">Get Plan</a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="destination-section reveal">
                <div className="destination-section-header">
                    <span className="section-label">How It Works</span>
                    <h2 className="section-title">
                        How Marriqa plans your destination wedding.
                    </h2>
                    <div className="gold-line"></div>
                </div>

                <div className="planning-process-grid">
                    {processSteps.map((step, index) => (
                        <article className="planning-process-card" key={step}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <p>{step}</p>
                        </article>
                    ))}
                </div>
            </section>

            <FinalCTA
                eyebrow="Request Destination Plan"
                title="Need a venue, budget and function-wise plan?"
                text="Share your guest count, room requirement, budget and preferred locations. Our team will help you shortlist the right destination wedding options."
                buttonText="Request Detailed Plan"
                buttonHref="/contact"
            />
        </main>
    );
}
