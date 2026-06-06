const blogs = [
    {
        title: "How to Plan a Luxury Wedding in Delhi NCR",
        category: "Wedding Planning",
        excerpt:
            "A practical guide for couples planning premium celebrations with decor, venue and guest experience in mind.",
    },
    {
        title: "Best Destination Wedding Locations Near Delhi",
        category: "Destination Weddings",
        excerpt:
            "From Jim Corbett to Mussoorie and Rajasthan, explore venue styles that work beautifully for Indian weddings.",
    },
    {
        title: "Engagement Decor Ideas Under a Practical Budget",
        category: "Decor Guide",
        excerpt:
            "Premium-looking engagement styling ideas with floral backdrops, statement seating and warm lighting.",
    },
];

export default function BlogSection() {
    return (
        <section id="blog" className="section bg-[var(--black)]">
            <div className="section-inner">
                <div className="mb-16 max-w-4xl">
                    <span className="section-label">Latest Blogs</span>
                    <h2 className="section-title">
                        Wedding <em>Journal</em>
                    </h2>
                    <div className="gold-line" />
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <article
                            key={blog.title}
                            className="luxury-card p-8 transition duration-500 hover:-translate-y-2 hover:border-[var(--gold)]"
                        >
                            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                                {blog.category}
                            </p>

                            <h3 className="mt-6 font-serif text-4xl font-light leading-tight text-[var(--white)]">
                                {blog.title}
                            </h3>

                            <p className="mt-6 leading-7 text-[var(--text-secondary)]">
                                {blog.excerpt}
                            </p>

                            <a
                                href="#contact"
                                className="mt-8 inline-block text-xs uppercase tracking-[0.22em] text-[var(--gold)]"
                            >
                                Read More →
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
