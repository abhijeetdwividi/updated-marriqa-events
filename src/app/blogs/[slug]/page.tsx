import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type BlogDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

type BlogPost = {
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    cover_image_url: string | null;
    category: string | null;
    read_time: string | null;
    created_at: string;
};

function renderBlogContent(content: string | null) {
    if (!content) {
        return null;
    }

    return content
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;

    const supabase = await createClient();

    const { data: blog, error } = await supabase
        .from("blogs")
        .select(
            "title, slug, excerpt, content, cover_image_url, category, read_time, created_at",
        )
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

    if (error || !blog) {
        notFound();
    }

    const post = blog as BlogPost;

    return (
        <main className="blog-detail-page">
            <section className="blog-detail-hero">
                <Link href="/" className="blog-back-link">
                    ← Back to Home
                </Link>

                <div className="blog-detail-meta">
                    <span>{post.category || "Wedding Journal"}</span>
                    <span>{post.read_time || "Marriqa Journal"}</span>
                </div>

                <h1>{post.title}</h1>

                {post.excerpt ? <p>{post.excerpt}</p> : null}
            </section>

            {post.cover_image_url ? (
                <div className="blog-detail-cover">
                    <img src={post.cover_image_url} alt={post.title} />
                </div>
            ) : null}

            <section className="blog-detail-content">
                {renderBlogContent(post.content)}

                <div className="blog-detail-cta">
                    <h2>Planning your celebration?</h2>
                    <p>
                        Let Marriqa Events help you plan the decor, venue,
                        hospitality, and complete wedding experience.
                    </p>

                    <Link href="/#contact" className="btn-primary">
                        Plan With Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
