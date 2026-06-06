export default function About() {
    return (
        <section id="about" className="section bg-[var(--black)]">
            <div className="section-inner grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[560px]">
                    <div className="absolute inset-6 border border-[var(--glass-border)]" />
                    <div className="relative h-[560px] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/img1.png')] bg-cover bg-center grayscale-[15%] transition duration-700 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.85)] via-transparent to-transparent" />
                    </div>

                    <div className="absolute bottom-10 left-10 luxury-card px-8 py-6">
                        <div className="font-serif text-6xl text-[var(--gold)]">
                            50+
                        </div>
                        <div className="text-xs uppercase tracking-[0.25em] text-[var(--beige-dim)]">
                            Events Crafted
                        </div>
                    </div>
                </div>

                <div>
                    <span className="section-label">Our Story</span>
                    <h2 className="section-title">
                        Where Every Detail
                        <br />
                        Tells <em>Your</em> Story
                    </h2>
                    <div className="gold-line" />

                    <div className="space-y-6 text-base leading-8 text-[var(--text-secondary)]">
                        <p>
                            Marriqa Events was born from a singular belief —
                            that every celebration deserves to be extraordinary.
                            We do not just plan events; we architect emotions,
                            curate aesthetics, and craft memories that endure
                            long after the last guest has departed.
                        </p>

                        <p>
                            With a deep passion for modern Indian luxury and an
                            eye trained on cinematic beauty, our team brings
                            your most intimate dreams to life. From the intimacy
                            of an engagement to the grandeur of a destination
                            wedding, every project becomes a unique canvas.
                        </p>

                        <p>
                            Serving Delhi NCR, Rajasthan, and Uttarakhand —
                            across palaces, resorts, and heritage venues — our
                            signature is precision, warmth, and an
                            uncompromising standard of excellence.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-5 text-xs uppercase tracking-[0.18em] text-[var(--beige-dim)]">
                        <span>Luxury Curation</span>
                        <span>Cinematic Vision</span>
                        <span>Emotional Depth</span>
                        <span>Premium Execution</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
