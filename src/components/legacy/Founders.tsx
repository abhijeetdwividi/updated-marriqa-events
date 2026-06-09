const founders = [
    {
        label: "Founder",
        name: "Ashutosh Prasad",
        bio: "Ashu brings over 4 years of hands-on experience in event management, leading the planning, creative direction, and complete execution of celebrations at Marriqa Events. His strength lies in transforming ideas into well-crafted experiences — blending creativity, detailing, and smooth coordination to deliver events that feel elegant, personal, and memorable.",
        tags: ["Planning", "Creative Direction", "Execution"],
    },
    {
        label: "Co-Founder",
        name: "Abhijeet Dwivedi",
        bio: "Abhijeet brings together technology, strategy, and business-focused execution to strengthen the digital side of Marriqa Events. He focuses on creating smoother client journeys, efficient online systems, and a refined digital presence that supports the brand’s growth as a modern luxury event company.",
        tags: ["Digital Strategy", "Client Experience", "Brand Growth"],
    },
];

export default function Founders() {
    return (
        <section id="founders">
            <div className="founders-split-inner">
                <div className="founders-split-header reveal">
                    <span className="section-label">The People Behind</span>

                    <h2 className="section-title">
                        Meet the <em>Founders</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        A leadership blend of creative planning, digital
                        thinking, refined execution, and business-focused growth
                        behind Marriqa Events.
                    </p>
                </div>

                <div className="founders-split-grid">
                    {founders.map((founder, index) => (
                        <article
                            className="founder-split-card reveal"
                            style={{ transitionDelay: `${index * 0.12}s` }}
                            key={founder.name}
                        >
                            <div className="founder-split-top">
                                <span className="founder-split-count">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="founder-split-label">
                                    {founder.label}
                                </span>
                            </div>

                            <h3>{founder.name}</h3>

                            <p className="founder-split-bio">{founder.bio}</p>

                            <div className="founder-split-tags">
                                {founder.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
