export default function Contact() {
    return (
        <section id="contact" className="section bg-[var(--charcoal)]">
            <div className="section-inner grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">
                        Begin Your <em>Luxury</em>
                        <br />
                        Journey
                    </h2>
                    <div className="gold-line" />

                    <div className="mt-10 space-y-7 text-[var(--text-secondary)]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                                Phone
                            </p>
                            <a
                                href="tel:+918252216549"
                                className="mt-2 block text-2xl text-[var(--white)]"
                            >
                                +91 82522 16549
                            </a>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                                Email
                            </p>
                            <a
                                href="mailto:marriqaevents@gmail.com"
                                className="mt-2 block text-2xl text-[var(--white)]"
                            >
                                marriqaevents@gmail.com
                            </a>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                                Regions
                            </p>
                            <p className="mt-2 text-xl text-[var(--white)]">
                                Delhi NCR · Rajasthan · Uttarakhand · Pan India
                            </p>
                        </div>
                    </div>
                </div>

                <form className="luxury-card grid gap-5 p-7 md:p-10">
                    <input
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Full Name *"
                    />
                    <input
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Phone Number *"
                    />
                    <input
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Email Address"
                    />

                    <select className="border border-[var(--glass-border)] bg-[var(--black)] px-5 py-4 text-[var(--text-secondary)] outline-none">
                        <option>Event Type</option>
                        <option>Luxury Wedding</option>
                        <option>Engagement Ceremony</option>
                        <option>Birthday Celebration</option>
                        <option>Corporate Event</option>
                        <option>Destination Wedding</option>
                        <option>Decor Only</option>
                    </select>

                    <input
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Event Location"
                    />
                    <input
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Approx Guest Count"
                    />

                    <textarea
                        rows={5}
                        className="border border-[var(--glass-border)] bg-transparent px-5 py-4 text-[var(--white)] outline-none placeholder:text-[var(--text-muted)]"
                        placeholder="Tell us your dream"
                    />

                    <button type="button" className="btn-primary">
                        Send Enquiry →
                    </button>

                    <p className="text-center text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        We will connect within 24 hours.
                    </p>
                </form>
            </div>
        </section>
    );
}
