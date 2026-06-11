const highlights = [
    {
        value: "Planning",
        label: "Venue, logistics, artists and guest movement.",
    },
    {
        value: "Design",
        label: "Decor concepts, tablescapes, entries and visual storytelling.",
    },
    {
        value: "Execution",
        label: "Vendor coordination, timelines and on-ground ownership.",
    },
];

export default function HomeIntro() {
    return (
        <section className="home-luxe-intro">
            <div className="home-luxe-intro-inner">
                <div className="home-luxe-intro-copy reveal-left">
                    <span className="home-luxe-kicker">Marriqa Events</span>

                    <h2>
                        A luxury planning studio for weddings, venues and
                        meaningful celebrations.
                    </h2>

                    <p>
                        We help families plan refined wedding experiences with
                        thoughtful venue curation, decor direction, hospitality
                        planning and detailed on-ground execution.
                    </p>

                    <a href="/about" className="home-luxe-link">
                        Discover Our Story
                    </a>
                </div>

                <div className="home-luxe-intro-panel reveal-right">
                    {highlights.map((item) => (
                        <article key={item.value}>
                            <h3>{item.value}</h3>
                            <p>{item.label}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
