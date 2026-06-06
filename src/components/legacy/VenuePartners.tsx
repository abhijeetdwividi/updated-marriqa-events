const venuePartners = [
    {
        region: "Mussoorie",
        title: "Baris Resort Mussoorie",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1600&auto=format&fit=crop",
        description:
            "A premium mountain resort option for intimate destination weddings, anniversary celebrations, and luxury family gatherings.",
        features: [
            "Hill views",
            "Resort stay",
            "Indoor + outdoor spaces",
            "Destination weddings",
        ],
    },
    {
        region: "Jim Corbett",
        title: "Baris Resort Jim Corbett",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
        description:
            "A scenic resort experience surrounded by nature, ideal for poolside haldi, sundowner events, and multi-day weddings.",
        features: [
            "Nature resort",
            "Multiple functions",
            "Room inventory",
            "Wedding stays",
        ],
    },
    {
        region: "Jim Corbett",
        title: "The Corbett Niskh Resort",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
        description:
            "A destination-friendly resort option for families looking for rooms, lawns, food, decor, and complete wedding flow.",
        features: ["Resort wedding", "Guest stay", "Lawns", "2-day events"],
    },
    {
        region: "Jim Corbett",
        title: "Machaan Corbett Resort",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
        description:
            "A premium Corbett resort suitable for destination wedding experiences, family stays, and nature-inspired celebrations.",
        features: [
            "Corbett venue",
            "Wedding package",
            "Outdoor events",
            "Guest experience",
        ],
    },
    {
        region: "Varanasi",
        title: "Ramada Plaza JHV Varanasi",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1600&auto=format&fit=crop",
        description:
            "A hotel venue option for elegant wedding functions, guest accommodation, and premium city wedding experiences.",
        features: ["Hotel wedding", "Rooms", "Banquet", "City venue"],
    },
    {
        region: "Delhi NCR",
        title: "Noida Farmhouse Venues",
        image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=1600&auto=format&fit=crop",
        description:
            "Curated farmhouse venues for engagements, haldi, mehendi, cocktail nights, birthdays, and intimate weddings.",
        features: ["Noida", "Farmhouse", "Lawn events", "Budget options"],
    },
];

export default function VenuePartners() {
    return (
        <section id="venue-partners">
            <div className="venue-partners-inner">
                <div className="venue-partners-header reveal">
                    <span className="section-label">Our Network</span>

                    <h2 className="section-title">
                        Our Venue <em>Partners</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        From luxury farmhouses in Delhi NCR to destination
                        resorts in Jim Corbett, Mussoorie, Varanasi, and
                        Rajasthan — we help you discover venues that match your
                        guest count, budget, and celebration style.
                    </p>
                </div>

                <div className="venue-partners-grid venue-partners-grid-image">
                    {venuePartners.map((venue, index) => (
                        <div
                            className="venue-partner-card venue-partner-image-card reveal"
                            style={{
                                transitionDelay: `${0.1 + index * 0.08}s`,
                            }}
                            key={venue.title}
                        >
                            <div className="venue-image-wrap">
                                <img
                                    src={venue.image}
                                    alt={venue.title}
                                    loading="lazy"
                                />

                                <div className="venue-image-overlay"></div>

                                <span className="venue-region">
                                    {venue.region}
                                </span>
                            </div>

                            <div className="venue-card-content">
                                <h3>{venue.title}</h3>

                                <p>{venue.description}</p>

                                <div className="venue-feature-list">
                                    {venue.features.map((feature) => (
                                        <span key={feature}>{feature}</span>
                                    ))}
                                </div>

                                <a href="#contact" className="venue-card-btn">
                                    Enquire Venue
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="venue-partners-cta reveal">
                    <p>
                        Looking for a venue based on your budget, location,
                        guest count, and event type?
                    </p>

                    <a href="#contact" className="btn-outline">
                        Find My Venue
                    </a>
                </div>
            </div>
        </section>
    );
}
