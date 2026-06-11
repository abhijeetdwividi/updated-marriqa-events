type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "center" | "left";
};

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: SectionHeaderProps) {
    return (
        <div
            className={`premium-section-header ${
                align === "left" ? "premium-section-header-left" : ""
            }`}
        >
            <span className="premium-eyebrow">{eyebrow}</span>

            <h2>{title}</h2>

            <div className="gold-line"></div>

            {description ? <p>{description}</p> : null}
        </div>
    );
}
