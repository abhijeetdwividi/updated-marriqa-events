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
        <section className="final-cta-section reveal">
            <div className="final-cta-card">
                <span>{eyebrow}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href={buttonHref} className="btn-primary">
                    {buttonText}
                </a>
            </div>
        </section>
    );
}
