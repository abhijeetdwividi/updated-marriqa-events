const venues = [
    {
        name: "Noida Farmhouse Collection",
        region: "Delhi NCR",
        capacity: "100–500 guests",
        image: "/images/img1.png",
    },
    {
        name: "Jim Corbett Resorts",
        region: "Uttarakhand",
        capacity: "150–500 guests",
        image: "/images/img2.png",
    },
    {
        name: "Mussoorie Destination Venues",
        region: "Uttarakhand",
        capacity: "80–250 guests",
        image: "/images/img3.png",
    },
];

export default function VenuePartners() {
    return (
        <section id="venues" className="section bg-[var(--charcoal)]">
            <div className="section-inner">
                <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <span className="section-label">Venue Partners</span>
                        <h2 className="section-title">
                            Premium <em>Wedding</em>
                            <br />
                            Destinations
                        </h2>
                        <div className="gold-line" />
                    </div>

                    <p className="max-w-xl leading-8 text-[var(--text-secondary)]">
                        Curated venue options across Delhi NCR, Uttarakhand and
                        destination wedding locations, selected for ambience,
                        capacity and experience.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {venues.map((venue) => (
                        <article
                            key={venue.name}
                            className="group overflow-hidden border border-[var(--glass-border)] bg-[var(--black)]"
                        >
                            <div className="relative h-[360px] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${venue.image})`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,11,11,0.92)] to-transparent" />
                            </div>

                            <div className="p-7">
                                <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                                    {venue.region}
                                </p>
                                <h3 className="mt-3 font-serif text-3xl text-[var(--white)]">
                                    {venue.name}
                                </h3>
                                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--text-muted)]">
                                    {venue.capacity}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
