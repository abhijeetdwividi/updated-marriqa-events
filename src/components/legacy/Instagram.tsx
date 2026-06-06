function InstagramIcon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

const instagramImages = [
    { src: "/images/img1.png", delay: "0.05s" },
    { src: "/images/img2.png", delay: "0.1s" },
    { src: "/images/img3.png", delay: "0.15s" },
    { src: "/images/img4.png", delay: "0.2s" },
    { src: "/images/img5.png", delay: "0.25s" },
    { src: "/images/img6.png", delay: "0.3s" },
];

export default function Instagram() {
    return (
        <section id="instagram">
            <div className="instagram-header reveal">
                <span className="section-label">Social Proof</span>

                <h2 className="section-title" style={{ textAlign: "center" }}>
                    Follow Our <em>World</em>
                </h2>

                <div
                    className="gold-line"
                    style={{ margin: "1.5rem auto" }}
                ></div>

                <a
                    href="https://www.instagram.com/marriqaevents"
                    target="_blank"
                    rel="noreferrer"
                    className="insta-handle"
                >
                    <InstagramIcon size={16} />
                    @marriqaevents
                </a>
            </div>

            <div className="insta-grid">
                {instagramImages.map((image) => (
                    <div
                        className="insta-item reveal"
                        style={{ transitionDelay: image.delay }}
                        key={image.src}
                    >
                        <img src={image.src} alt="" />

                        <div className="insta-hover">
                            <InstagramIcon size={24} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="insta-cta reveal" style={{ marginTop: "2.5rem" }}>
                <a
                    href="https://www.instagram.com/marriqaevents"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                >
                    Follow @marriqaevents
                </a>
            </div>
        </section>
    );
}
