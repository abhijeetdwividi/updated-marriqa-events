type FinalCTAProps = {
    eyebrow?: string;
    title?: string;
    text?: string;
    buttonText?: string;
    buttonHref?: string;
};

export default function FinalCTA({
    eyebrow = "Plan With Marriqa",
    title = "Let’s create a celebration that feels personal, elegant and effortless.",
    text = "Share your event details and our team will help you with the right venue, decor direction, planning scope and execution plan.",
    buttonText = "Start Enquiry",
    buttonHref = "/contact",
}: FinalCTAProps) {
    return (
        <section className="home-final-cta reveal">
            <div className="home-final-cta-inner">
                <span className="home-luxe-kicker">{eyebrow}</span>
                <h2>{title}</h2>
                <p>{text}</p>

                <a
                    href={buttonHref}
                    className="home-luxe-btn home-luxe-btn-primary"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
}
