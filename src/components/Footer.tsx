export default function Footer() {
    return (
        <footer className="border-t border-[var(--glass-border)] bg-[var(--black)] px-[6vw] py-14">
            <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
                <div>
                    <h3 className="font-serif text-4xl text-[var(--white)]">
                        Marriqa{" "}
                        <span className="text-[var(--gold)]">Events</span>
                    </h3>
                    <p className="mt-5 max-w-md leading-7 text-[var(--text-secondary)]">
                        Crafting unforgettable luxury experiences across Delhi
                        NCR, Rajasthan and Uttarakhand. Where every detail tells
                        your story.
                    </p>
                </div>

                <div>
                    <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                        Services
                    </h4>
                    <div className="space-y-3 text-[var(--text-secondary)]">
                        <p>Luxury Weddings</p>
                        <p>Engagements</p>
                        <p>Premium Decor</p>
                        <p>Destination Weddings</p>
                    </div>
                </div>

                <div>
                    <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                        Regions
                    </h4>
                    <div className="space-y-3 text-[var(--text-secondary)]">
                        <p>Delhi NCR</p>
                        <p>Rajasthan</p>
                        <p>Uttarakhand</p>
                        <p>Pan India</p>
                    </div>
                </div>

                <div>
                    <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                        Contact
                    </h4>
                    <div className="space-y-3 text-[var(--text-secondary)]">
                        <p>+91 82522 16549</p>
                        <p>marriqaevents@gmail.com</p>
                        <p>@marriqaevents</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-14 flex max-w-[1300px] flex-col justify-between gap-4 border-t border-[var(--glass-border)] pt-8 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] md:flex-row">
                <p>© 2026 Marriqa Events. All rights reserved.</p>
                <p>Luxury · Elegance · Emotion</p>
            </div>
        </footer>
    );
}
