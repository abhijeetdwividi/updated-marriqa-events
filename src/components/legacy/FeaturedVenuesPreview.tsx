import type { CSSProperties } from "react";

const venues = [
    {
        region: "Jim Corbett",
        title: "Nature resort weddings",
        text: "Resorts, lawns, poolside functions and room-led wedding weekends.",
        image: "https://images.unsplash.com/photo-1649187642489-514d5a1b969f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        region: "Mussoorie",
        title: "Hill wedding retreats",
        text: "Boutique stays, mountain views, intimate ceremonies and sundowner moments.",
        image: "https://images.unsplash.com/photo-1705219310492-c779c9ba8316?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        region: "Delhi NCR",
        title: "Luxury city weddings",
        text: "Premium hotels, farmhouses, easy access and flexible event logistics.",
        image: "https://images.unsplash.com/photo-1705927122615-02dcef3b1465?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function FeaturedVenuesPreview() {
    return (
        <section className="home-venues-visual-section">
            <div className="home-visual-section-head reveal">
                <span className="home-luxe-kicker">Curated Venues</span>

                <h2>Venues selected for how your celebration needs to flow.</h2>

                <p>
                    We shortlist properties based on rooms, guest movement, food
                    flow, access, decor possibilities and family comfort.
                </p>
            </div>

            <div className="home-venues-clean-grid">
                {venues.map((venue) => (
                    <article
                        className="home-venue-clean-card reveal"
                        key={venue.region}
                    >
                        <div
                            className="home-venue-clean-image"
                            style={
                                {
                                    "--venue-image": `url(${venue.image})`,
                                } as CSSProperties
                            }
                        ></div>

                        <div className="home-venue-clean-content">
                            <span>{venue.region}</span>
                            <h3>{venue.title}</h3>
                            <p>{venue.text}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="home-visual-action reveal">
                <a
                    href="/venues"
                    className="home-luxe-btn home-luxe-btn-secondary"
                >
                    Explore Venues
                </a>
            </div>
        </section>
    );
}
