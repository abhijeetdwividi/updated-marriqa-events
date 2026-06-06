const services = [
    {
        number: "I",
        title: "Luxury Weddings",
        subtitle: "The pinnacle of elegance",
        image: "/images/img2.png",
        description:
            "Dream weddings with unmatched decor, flawless execution and cinematic storytelling.",
    },
    {
        number: "II",
        title: "Engagements",
        subtitle: "Where love begins, beautifully",
        image: "/images/img3.png",
        description:
            "Intimate engagements styled with premium florals, golden ambience and personal touches.",
    },
    {
        number: "III",
        title: "Premium Decor",
        subtitle: "Art you can inhabit",
        image: "/images/img5.png",
        description:
            "Statement installations, editorial floral design and atmosphere-defining decor.",
    },
    {
        number: "IV",
        title: "Birthday Galas",
        subtitle: "Celebrate in luxury",
        image: "/images/img4.png",
        description:
            "Milestone celebrations styled with luxury details and magazine-worthy aesthetics.",
    },
    {
        number: "V",
        title: "Corporate Events",
        subtitle: "Prestige meets purpose",
        image: "/images/img6.png",
        description:
            "Product launches, galas and summits executed with brand clarity and premium styling.",
    },
    {
        number: "VI",
        title: "Destination Events",
        subtitle: "Rajasthan · Uttarakhand",
        image: "/images/destination.png",
        description:
            "Destination weddings in palace forts, mountain resorts and heritage venues.",
    },
];

export default function Services() {
    return (
        <section id="services" className="section bg-[var(--black)]">
            <div className="section-inner">
                <div className="mb-16 max-w-4xl">
                    <span className="section-label">What We Create</span>
                    <h2 className="section-title">
                        Our Signature <em>Services</em>
                    </h2>
                    <div className="gold-line" />
                </div>

                <div className="grid gap-[1px] bg-[var(--glass-border)] lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="group relative min-h-[520px] overflow-hidden bg-[var(--charcoal-2)]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.96)] via-[rgba(11,11,11,0.35)] to-transparent" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="font-serif text-5xl text-[var(--gold)]">
                                    {service.number}
                                </span>

                                <h3 className="mt-6 font-serif text-4xl font-light text-[var(--white)]">
                                    {service.title}
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                                    {service.subtitle}
                                </p>

                                <div className="my-6 h-px w-14 bg-[var(--gold)]" />

                                <p className="max-w-sm leading-7 text-[var(--text-secondary)]">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
