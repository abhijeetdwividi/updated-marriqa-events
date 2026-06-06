import { packages } from "@/data/packages";
import Reveal from "@/components/Reveal";

export default function Packages() {
    const popularPackages = packages.filter((item) => item.isPopular);

    return (
        <section id="packages" className="section bg-[var(--charcoal)]">
            <div className="section-inner">
                <Reveal>
                    <div className="mb-16 max-w-4xl">
                        <span className="section-label">
                            Most Popular Packages
                        </span>

                        <h2 className="section-title">
                            Curated <em>Celebration</em>
                            <br />
                            Experiences
                        </h2>

                        <div className="gold-line" />

                        <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                            Premium wedding and event packages designed for
                            couples who want beauty, clarity, and execution
                            without compromising the luxury feel.
                        </p>
                    </div>
                </Reveal>

                <div className="grid items-stretch gap-7 lg:grid-cols-3">
                    {popularPackages.map((item, index) => (
                        <Reveal
                            key={item.id}
                            delay={index * 120}
                            className="h-full"
                        >
                            <article className="luxury-card group flex min-h-[460px] h-full flex-col overflow-hidden p-8 transition duration-500 hover:-translate-y-2 hover:border-[var(--gold)]">
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">
                                        {item.badge}
                                    </span>

                                    <span className="h-px w-16 bg-[var(--gold-dim)]" />
                                </div>

                                <h3 className="card-title">{item.title}</h3>

                                <p className="mt-4 text-xl font-light text-[var(--gold)]">
                                    {item.price}
                                </p>

                                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                                    {item.location}
                                </p>

                                <p className="card-body mt-7">
                                    {item.description}
                                </p>

                                <ul className="mt-7 space-y-3">
                                    {item.inclusions.map((inclusion) => (
                                        <li
                                            key={inclusion}
                                            className="flex items-center gap-3 text-sm text-[var(--beige-dim)]"
                                        >
                                            <span className="h-px w-5 shrink-0 bg-[var(--gold)]" />
                                            <span>{inclusion}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-8">
                                    <a
                                        href="#contact"
                                        className="btn-outline w-full"
                                    >
                                        Enquire Now
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
