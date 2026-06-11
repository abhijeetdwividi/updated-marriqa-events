const services = [
    {
        title: "Wedding Planning",
        text: "End-to-end planning for weddings, engagement ceremonies and multi-day family celebrations.",
    },
    {
        title: "Destination Weddings",
        text: "Venue shortlisting, room planning, hospitality, decor, logistics and execution for wedding weekends.",
    },
    {
        title: "Decor & Experience Design",
        text: "Stage design, entries, floral styling, tablescapes, lounges, installations and guest experience details.",
    },
    {
        title: "Hospitality & Entertainment",
        text: "Guest flow, welcome experiences, artists, sound, SFX, activities, favours and event-day management.",
    },
];

export default function ServicesPreview() {
    return (
        <section className="home-luxe-section">
            <div className="home-luxe-section-head reveal">
                <span className="home-luxe-kicker">What We Plan</span>
                <h2>One team for every celebration detail.</h2>
                <p>
                    From venue selection to decor and hospitality, Marriqa
                    creates event experiences that feel composed, personal and
                    beautifully executed.
                </p>
            </div>

            <div className="home-luxe-services-grid">
                {services.map((service) => (
                    <article
                        className="home-luxe-service-card reveal"
                        key={service.title}
                    >
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </article>
                ))}
            </div>

            <div className="home-luxe-center-action reveal">
                <a
                    href="/services"
                    className="home-luxe-btn home-luxe-btn-secondary"
                >
                    Explore Services
                </a>
            </div>
        </section>
    );
}
