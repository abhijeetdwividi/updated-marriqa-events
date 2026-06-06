export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-bg"></div>

            <div className="particles" id="particles"></div>

            <div className="hero-content">
                <div className="hero-badge">
                    Est. 2026 &nbsp;·&nbsp; Delhi NCR &nbsp;·&nbsp; India
                </div>

                <div className="hero-logo-text">Marriqa</div>

                <span className="hero-logo-sub">Events &amp; Celebrations</span>

                <div className="hero-divider"></div>

                <h1 className="hero-headline">
                    Crafting <em>Unforgettable</em>
                    <br />
                    Luxury Experiences
                </h1>

                <p className="hero-sub">
                    <span>Luxury Weddings</span> &nbsp;•&nbsp; Premium Decor
                    &nbsp;•&nbsp;
                    <span>Signature Celebrations</span>
                </p>

                <div className="hero-btns">
                    <a href="#contact" className="btn-primary">
                        Book Consultation
                    </a>
                    <a href="#gallery" className="btn-outline">
                        View Portfolio
                    </a>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
