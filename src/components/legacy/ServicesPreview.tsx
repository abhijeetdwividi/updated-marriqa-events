const services = [
    {
        title: "Wedding Planning",
        text: "End-to-end planning for weddings, engagement ceremonies and multi-day family celebrations.",
    },
    {
        title: "Decor & Experience Design",
        text: "Premium decor concepts, tablescapes, entries, stage design, floral styling and guest experience.",
    },
    {
        title: "Venue & Destination Curation",
        text: "Shortlisting suitable venues across Delhi NCR, Uttarakhand, Rajasthan and destination wedding locations.",
    },
    {
        title: "Hospitality & Execution",
        text: "Guest movement, rooming, vendor coordination, artist management and event-day execution.",
    },
];

export default function ServicesPreview() {
    return (
        <section className="home-preview-section reveal">
            <div className="home-preview-header">
                <span className="section-label">What We Plan</span>
                <h2 className="section-title">
                    One team for every celebration detail.
                </h2>
                <div className="gold-line"></div>
            </div>

            <div className="home-preview-grid">
                {services.map((service) => (
                    <article className="home-preview-card" key={service.title}>
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </article>
                ))}
            </div>

            <div className="home-preview-actions">
                <a href="/services" className="btn-secondary">
                    Explore Services
                </a>
            </div>
        </section>
    );
}
