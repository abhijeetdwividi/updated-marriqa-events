const packages = [
    {
        tag: "Most Booked",
        title: "Engagement Luxe",
        price: "Starting ₹1.5L",
        description:
            "A premium engagement setup curated with elegant decor, couple seating, floral styling, and a luxury photo-worthy backdrop.",
        inclusions: [
            "Engagement backdrop",
            "Couple seating",
            "Welcome board",
            "Entry passage styling",
            "Table centrepieces",
            "Basic lighting support",
        ],
    },
    {
        tag: "Planner’s Pick",
        title: "Wedding Signature Decor",
        price: "Starting ₹4.5L",
        description:
            "A complete wedding decor experience designed for families who want a grand, premium, and beautifully coordinated celebration.",
        inclusions: [
            "Jaimala stage",
            "Mandap decor",
            "Aisle runner",
            "VIP lounge",
            "Round table decor",
            "Chandeliers & ambient lighting",
        ],
    },
    {
        tag: "Premium",
        title: "Destination Wedding Experience",
        price: "Custom Quote",
        description:
            "End-to-end destination wedding planning across palaces, resorts, farmhouses, and mountain venues with complete guest experience support.",
        inclusions: [
            "Venue shortlisting",
            "Decor planning",
            "Hospitality support",
            "Artist & entertainment",
            "Event flow planning",
            "Vendor coordination",
        ],
    },
];

export default function Packages() {
    return (
        <section id="packages">
            <div className="packages-header reveal">
                <span className="section-label">Curated Experiences</span>

                <h2 className="section-title">
                    Most Popular <em>Packages</em>
                </h2>

                <div className="gold-line"></div>

                <p>
                    Carefully designed celebration packages for couples and
                    families who want premium styling, smooth execution, and a
                    memorable guest experience.
                </p>
            </div>

            <div className="packages-grid">
                {packages.map((item, index) => (
                    <div
                        className="package-card reveal"
                        style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
                        key={item.title}
                    >
                        <div className="package-tag">{item.tag}</div>

                        <h3>{item.title}</h3>

                        <div className="package-price">{item.price}</div>

                        <p className="package-desc">{item.description}</p>

                        <div className="package-line"></div>

                        <ul>
                            {item.inclusions.map((inclusion) => (
                                <li key={inclusion}>{inclusion}</li>
                            ))}
                        </ul>

                        <a href="#contact" className="package-btn">
                            Request Quote
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
