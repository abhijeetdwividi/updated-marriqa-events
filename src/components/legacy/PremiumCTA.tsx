type PremiumCTAProps = {
    eyebrow?: string;
    title: string;
    description: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
};

export default function PremiumCTA({
    eyebrow = "Plan With Marriqa",
    title,
    description,
    primaryLabel = "Start Enquiry",
    primaryHref = "/contact",
    secondaryLabel,
    secondaryHref,
}: PremiumCTAProps) {
    return (
        <section className="premium-cta-section reveal">
            <div className="premium-cta-card">
                <span className="premium-eyebrow">{eyebrow}</span>

                <h2>{title}</h2>

                <p>{description}</p>

                <div className="premium-cta-actions">
                    <a href={primaryHref} className="btn-primary">
                        {primaryLabel}
                    </a>

                    {secondaryLabel && secondaryHref ? (
                        <a href={secondaryHref} className="btn-secondary">
                            {secondaryLabel}
                        </a>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
