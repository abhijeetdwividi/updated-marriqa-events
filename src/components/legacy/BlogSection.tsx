import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image_url: string | null;
    category: string | null;
    read_time: string | null;
    created_at: string;
};

export default async function BlogSection() {
    const supabase = await createClient();

    const { data: blogs, error } = await supabase
        .from("blogs")
        .select(
            "id, title, slug, excerpt, cover_image_url, category, read_time, created_at",
        )
        .eq("is_published", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false })
        .limit(3);

    if (error || !blogs || blogs.length === 0) {
        return null;
    }

    return (
        <section id="blog">
            <div className="blog-inner">
                <div className="blog-header reveal">
                    <span className="section-label">Wedding Journal</span>

                    <h2 className="section-title">
                        Ideas, Guides &amp; <em>Inspiration</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        Planning notes, decor inspiration, venue guidance, and
                        expert insights for couples and families planning
                        memorable celebrations.
                    </p>
                </div>

                <div className="blog-grid">
                    {(blogs as BlogPost[]).map((post, index) => (
                        <article
                            className="blog-card reveal"
                            style={{
                                transitionDelay: `${0.1 + index * 0.08}s`,
                            }}
                            key={post.id}
                        >
                            <Link
                                href={`/blogs/${post.slug}`}
                                className="blog-image"
                            >
                                {post.cover_image_url ? (
                                    <img
                                        src={post.cover_image_url}
                                        alt={post.title}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="blog-placeholder-image">
                                        Marriqa Journal
                                    </div>
                                )}

                                <span>{post.category || "Wedding Guide"}</span>
                            </Link>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    {post.read_time || "Marriqa Journal"}
                                </div>

                                <h3>
                                    <Link href={`/blogs/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p>
                                    {post.excerpt ||
                                        "Read this Marriqa wedding journal."}
                                </p>

                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="blog-link"
                                >
                                    Read Journal →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
