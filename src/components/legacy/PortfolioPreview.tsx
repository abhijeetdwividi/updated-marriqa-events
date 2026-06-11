import type { CSSProperties } from "react";

const portfolioMoments = [
    {
        title: "Engagement Backdrops",
        label: "Ceremony Styling",
        image: "https://images.unsplash.com/photo-1601121141503-c4796ffc4b52?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Destination Weddings",
        label: "Wedding Weekends",
        image: "https://images.unsplash.com/photo-1744804298726-88ee70f07fdc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Luxury Tablescapes",
        label: "Guest Experience",
        image: "https://images.unsplash.com/photo-1753105619712-4bf61810ef2a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Haldi & Mehendi",
        label: "Day Celebrations",
        image: "https://images.unsplash.com/photo-1633104502901-10d124036629?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function PortfolioPreview() {
    return (
        <section className="home-portfolio-visual-section">
            <div className="home-portfolio-visual-inner">
                <div className="home-portfolio-visual-copy reveal-left">
                    <span className="home-luxe-kicker">Selected Work</span>

                    <h2>Designed for atmosphere, emotion and memory.</h2>

                    <p>
                        From intimate engagement setups to full wedding
                        weekends, our work is built around the feeling a family
                        wants to create.
                    </p>

                    <a
                        href="/portfolio"
                        className="home-luxe-btn home-luxe-btn-primary"
                    >
                        View Portfolio
                    </a>
                </div>

                <div className="home-portfolio-clean-grid reveal-right">
                    {portfolioMoments.map((moment) => (
                        <article
                            className="home-portfolio-clean-card"
                            key={moment.title}
                        >
                            <div
                                className="home-portfolio-clean-image"
                                style={
                                    {
                                        "--portfolio-image": `url(${moment.image})`,
                                    } as CSSProperties
                                }
                            ></div>

                            <div className="home-portfolio-clean-content">
                                <span>{moment.label}</span>
                                <h3>{moment.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
