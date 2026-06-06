export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--black)] px-5 pt-24 text-center"
        >
            <div className="hero-glow absolute inset-0 bg-[radial-gradient(ellipse_70%_54%_at_50%_34%,rgba(74,20,40,0.58)_0%,rgba(27,7,20,0.35)_38%,transparent_72%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(212,175,55,0.12),transparent_1.2%),radial-gradient(circle_at_70%_38%,rgba(212,175,55,0.14),transparent_1%),radial-gradient(circle_at_86%_78%,rgba(212,175,55,0.16),transparent_1.1%)]" />

            <span className="hero-particle absolute left-[10%] top-[28%] h-2 w-2 rounded-full bg-[var(--gold)] blur-[1px]" />
            <span className="hero-particle absolute right-[20%] top-[44%] h-2 w-2 rounded-full bg-[var(--gold)] blur-[1px]" />
            <span className="hero-particle absolute bottom-[18%] right-[12%] h-3 w-3 rounded-full bg-[var(--gold)] blur-[2px]" />

            <div className="relative z-10 mx-auto max-w-[1180px]">
                <p
                    className="hero-fade text-[0.68rem] uppercase tracking-[0.38em] text-[var(--text-muted)]"
                    style={{ animationDelay: "120ms" }}
                >
                    Est. 2026 &nbsp;·&nbsp; Delhi NCR &nbsp;·&nbsp; India
                </p>

                <div
                    className="hero-fade mt-2 font-serif text-[clamp(5.2rem,15vw,13.5rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-[var(--white)]"
                    style={{ animationDelay: "260ms" }}
                >
                    Marriqa
                </div>

                <p
                    className="hero-fade mt-3 text-[0.68rem] uppercase tracking-[0.46em] text-[var(--gold)]"
                    style={{ animationDelay: "420ms" }}
                >
                    Events & Celebrations
                </p>

                <h1
                    className="hero-fade mt-7 font-serif text-[clamp(3.2rem,8vw,8.4rem)] font-light leading-[0.86] tracking-[-0.06em] text-[var(--white)]"
                    style={{ animationDelay: "560ms" }}
                >
                    Crafting
                    <br />
                    <em className="text-[var(--gold)]">Unforgettable</em>
                    <br />
                    Luxury Experiences
                </h1>

                <p
                    className="hero-fade mx-auto mt-8 max-w-3xl text-[0.68rem] uppercase leading-7 tracking-[0.32em] text-[var(--beige-dim)]"
                    style={{ animationDelay: "740ms" }}
                >
                    <span className="text-[var(--gold)]">Luxury Weddings</span>
                    &nbsp; · &nbsp; Premium Decor &nbsp; · &nbsp;
                    <span className="text-[var(--gold)]">
                        Signature Celebrations
                    </span>
                </p>

                <div
                    className="hero-fade mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                    style={{ animationDelay: "900ms" }}
                >
                    <a href="#contact" className="btn-primary">
                        Book Consultation
                    </a>
                    <a href="#packages" className="btn-outline">
                        View Packages
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.38em] text-[var(--text-muted)] md:flex">
                <span>Scroll</span>
                <span className="h-14 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
            </div>
        </section>
    );
}
