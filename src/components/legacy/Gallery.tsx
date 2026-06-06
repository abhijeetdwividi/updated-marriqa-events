export default function Gallery() {
    return (
        <>
            <section id="gallery">
                <div className="gallery-header reveal">
                    <span className="section-label">Our Portfolio</span>

                    <h2 className="section-title">
                        Curated <em>Moments</em>
                        <br />
                        of Luxury
                    </h2>

                    <div className="gold-line"></div>
                </div>

                <div className="gallery-grid" id="galleryGrid">
                    <div className="gallery-item reveal">
                        <img
                            src="https://images.unsplash.com/photo-1757017199822-beab923a1afc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Luxury Wedding"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Royal Nuptials</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.1s" }}
                    >
                        <img
                            src="/images/img1.png"
                            alt="Premium Decor"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Premium Decor</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.15s" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1680491024206-7321f775d538?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Engagement"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Golden Engagement</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Corporate"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Gala Evening</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.05s" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1607977229409-8c278bc34628?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Birthday"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Luxury Birthday</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.25s" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1654764746242-7592b9c6ce2e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Destination"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Destination Wedding</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.3s" }}
                    >
                        <img
                            src="/images/img3.png"
                            alt="Celebration"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Signature Decor</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.35s" }}
                    >
                        <img
                            src="/images/img5.png"
                            alt="Decor"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Floral Art</span>
                        </div>
                    </div>

                    <div
                        className="gallery-item reveal"
                        style={{ transitionDelay: "0.4s" }}
                    >
                        <img
                            src="/images/img2.png"
                            alt="Luxury"
                            loading="lazy"
                        />

                        <div className="g-overlay">
                            <span className="g-label">Luxury Setting</span>
                        </div>
                    </div>
                </div>
            </section>

            <div id="lightbox">
                <button id="lb-close">✕</button>
                <img id="lb-img" alt="" />
            </div>
        </>
    );
}
