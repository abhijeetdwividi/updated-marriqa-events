import type { ReactNode } from "react";

type PageHeroAction = {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
};

type PageHeroProps = {
    eyebrow: string;
    title: string;
    description: string;
    stats?: string[];
    actions?: PageHeroAction[];
    children?: ReactNode;
};

export default function PageHero({
    eyebrow,
    title,
    description,
    stats = [],
    actions = [],
    children,
}: PageHeroProps) {
    return (
        <section className="premium-page-hero">
            <div className="premium-page-hero-bg"></div>

            <div className="premium-page-hero-inner reveal">
                <span className="premium-eyebrow">{eyebrow}</span>

                <h1>{title}</h1>

                <p>{description}</p>

                {stats.length > 0 ? (
                    <div className="premium-hero-stats">
                        {stats.map((stat) => (
                            <span key={stat}>{stat}</span>
                        ))}
                    </div>
                ) : null}

                {actions.length > 0 ? (
                    <div className="premium-hero-actions">
                        {actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                className={
                                    action.variant === "secondary"
                                        ? "btn-secondary"
                                        : "btn-primary"
                                }
                            >
                                {action.label}
                            </a>
                        ))}
                    </div>
                ) : null}

                {children}
            </div>
        </section>
    );
}
