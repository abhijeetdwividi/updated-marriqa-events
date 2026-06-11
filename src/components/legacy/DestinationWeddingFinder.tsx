import type { CSSProperties } from "react";

import VenueFinder from "@/components/legacy/VenueFinder";

const weddingStyles = [
    {
        title: "Hill Retreat Wedding",
        location: "Mussoorie · Shimla · Kasauli",
        text: "Misty views, intimate rituals, boutique stays and soft sundowner moments.",
    },
    {
        title: "Forest Resort Wedding",
        location: "Jim Corbett · Rishikesh",
        text: "Resort lawns, rooms, poolside functions and relaxed wedding weekends.",
    },
    {
        title: "Delhi NCR Luxury Wedding",
        location: "Delhi · Gurgaon · Noida",
        text: "Premium hotels, farmhouses, controlled logistics and easy access for guests.",
    },
    {
        title: "Heritage Palace Wedding",
        location: "Jaipur · Udaipur · Rajasthan",
        text: "Regal settings, cultural warmth, palace backdrops and editorial wedding frames.",
    },
];

const destinationCards = [
    {
        name: "Jim Corbett",
        type: "Nature Resort Weddings",
        mood: "Lawns · Rooms · Poolside Functions",
        image: "https://images.unsplash.com/photo-1475027810313-fda7c2c8e71a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mussoorie",
        type: "Hill Wedding Retreats",
        mood: "Views · Boutique Stays · Sundowners",
        image: "https://images.unsplash.com/photo-1637387568999-92c68bdee212?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Rishikesh",
        type: "Riverside Celebrations",
        mood: "Rituals · Calm Luxury · Scenic Hospitality",
        image: "https://images.unsplash.com/photo-1718383537411-6f9e727ae0bb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Jaipur",
        type: "Heritage Wedding Weekends",
        mood: "Palaces · Forts · Royal Hospitality",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Udaipur",
        type: "Lake & Palace Weddings",
        mood: "Luxury Hotels · Lakeside Frames · Regal Celebrations",
        image: "https://images.unsplash.com/photo-1715405155995-61757307e065?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Delhi NCR",
        type: "Luxury City Weddings",
        mood: "Hotels · Farmhouses · Easy Guest Movement",
        image: "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const methodSteps = [
    {
        count: "01",
        title: "Discover",
        text: "We understand your guest count, room needs, dates, budget and family priorities.",
    },
    {
        count: "02",
        title: "Shortlist",
        text: "We curate destinations and venues that actually fit your wedding requirement.",
    },
    {
        count: "03",
        title: "Design",
        text: "Decor, hospitality, entertainment and guest flow are planned function-wise.",
    },
    {
        count: "04",
        title: "Execute",
        text: "Our team coordinates vendors, timelines and on-ground event management.",
    },
];

const destinationSlides = [...destinationCards, ...destinationCards];

export default function DestinationWeddingFinder() {
    return (
        <main className="destination-weddings-page">
            <section className="dw-hero">
                <div className="dw-hero-bg"></div>

                <div className="dw-hero-inner">
                    <div className="dw-hero-copy reveal-left">
                        <span className="dw-kicker">
                            Destination Weddings by Marriqa
                        </span>

                        <h1>Find your perfect wedding destination.</h1>

                        <p>
                            Explore venues, room plans, decor direction and
                            destination ideas across Jim Corbett, Mussoorie,
                            Rishikesh, Jaipur, Udaipur and Delhi NCR.
                        </p>

                        <div className="dw-hero-actions">
                            <a
                                href="#venue-finder"
                                className="dw-btn dw-btn-primary"
                            >
                                Start Venue Match
                            </a>
                            <a
                                href="/contact"
                                className="dw-btn dw-btn-secondary"
                            >
                                Talk to Planner
                            </a>
                        </div>
                    </div>

                    <div className="dw-hero-visual reveal-right">
                        <div className="dw-visual-frame">
                            <div className="dw-visual-top">
                                <span>Curated Match</span>
                                <strong>Wedding Weekend</strong>
                            </div>

                            <div className="dw-visual-center">
                                <span>Suggested Direction</span>
                                <h2>Hill Resort Wedding</h2>
                                <p>
                                    100–160 guests · 35 rooms · 2 nights ·
                                    sundowner · pheras · gala dinner
                                </p>
                            </div>

                            <div className="dw-visual-grid">
                                <div>
                                    <span>Location</span>
                                    <strong>Mussoorie</strong>
                                </div>
                                <div>
                                    <span>Style</span>
                                    <strong>Luxury Retreat</strong>
                                </div>
                                <div>
                                    <span>Budget</span>
                                    <strong>Custom Plan</strong>
                                </div>
                                <div>
                                    <span>Scope</span>
                                    <strong>Full Planning</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dw-section dw-section-compact">
                <div className="dw-section-head reveal">
                    <span className="dw-kicker">Wedding Styles</span>
                    <h2>Choose the experience before choosing the venue.</h2>
                    <p>
                        Every destination has a different mood. We first define
                        the wedding style, then shortlist venues that fit the
                        guest count, rooms and budget.
                    </p>
                </div>

                <div className="dw-style-grid">
                    {weddingStyles.map((style) => (
                        <article
                            className="dw-style-card reveal"
                            key={style.title}
                        >
                            <span>{style.location}</span>
                            <h3>{style.title}</h3>
                            <p>{style.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="dw-destination-carousel-section">
                <div className="dw-carousel-head reveal">
                    <span className="dw-kicker">Curated Destinations</span>
                    <h2>
                        Places that work beautifully for Indian wedding
                        weekends.
                    </h2>
                    <p>
                        We look at rooms, food flow, guest movement, weather,
                        access, function spaces and decor possibilities before
                        recommending a destination.
                    </p>
                </div>

                <div className="dw-destination-carousel reveal">
                    <div className="dw-destination-track">
                        {destinationSlides.map((destination, index) => (
                            <article
                                className="dw-destination-slide"
                                key={`${destination.name}-${index}`}
                                style={
                                    {
                                        "--destination-image": `url(${destination.image})`,
                                    } as CSSProperties
                                }
                            >
                                <div className="dw-slide-content">
                                    <span>{destination.type}</span>
                                    <h3>{destination.name}</h3>
                                    <p>{destination.mood}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="venue-finder" className="dw-finder-section">
                <div className="dw-finder-shell dw-finder-shell-single reveal">
                    <VenueFinder />
                </div>
            </section>

            <section className="dw-method-section">
                <div className="dw-section-head reveal">
                    <span className="dw-kicker">Marriqa Method</span>
                    <h2>
                        From shortlist to execution, one clear planning flow.
                    </h2>
                </div>

                <div className="dw-method-grid">
                    {methodSteps.map((step) => (
                        <article
                            className="dw-method-card reveal"
                            key={step.title}
                        >
                            <span>{step.count}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="dw-final-cta reveal">
                <div className="dw-final-cta-inner">
                    <span className="dw-kicker">Request Destination Plan</span>
                    <h2>Need a clear venue, budget and wedding plan?</h2>
                    <p>
                        Share your guest count, rooms, dates and preferred
                        locations. Our team will help you build a clear
                        destination wedding plan.
                    </p>

                    <div className="dw-hero-actions">
                        <a href="/contact" className="dw-btn dw-btn-primary">
                            Request Plan
                        </a>
                        <a href="/venues" className="dw-btn dw-btn-secondary">
                            Explore Venues
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
