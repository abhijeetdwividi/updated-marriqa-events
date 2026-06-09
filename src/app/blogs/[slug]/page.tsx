import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.marriqaevents.com";

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

async function getBlogBySlug(slug: string) {
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
        return null;
    }

    return blog as BlogPost;
}

function getSeoDescription(post: BlogPost) {
    if (post.excerpt && post.excerpt.trim().length > 0) {
        return post.excerpt.trim();
    }

    if (post.content && post.content.trim().length > 0) {
        return post.content.replace(/\s+/g, " ").trim().slice(0, 155);
    }

    return "Read wedding planning ideas, decor inspiration, venue guidance, and luxury event insights from Marriqa Events.";
}

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

export async function generateMetadata({
    params,
}: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        return {
            title: "Blog Not Found",
            description: "This Marriqa Events blog post could not be found.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const description = getSeoDescription(post);
    const blogUrl = `${siteUrl}/blogs/${post.slug}`;
    const imageUrl =
        post.cover_image_url || `${siteUrl}/images/destination.png`;

    return {
        title: post.title,
        description,
        alternates: {
            canonical: blogUrl,
        },
        openGraph: {
            type: "article",
            url: blogUrl,
            siteName: "Marriqa Events",
            title: post.title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.created_at,
            authors: ["Marriqa Events"],
            section: post.category || "Wedding Journal",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: [imageUrl],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="blog-detail-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.title,
                        description: getSeoDescription(post),
                        image:
                            post.cover_image_url ||
                            `${siteUrl}/images/destination.png`,
                        datePublished: post.created_at,
                        author: {
                            "@type": "Organization",
                            name: "Marriqa Events",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Marriqa Events",
                            logo: {
                                "@type": "ImageObject",
                                url: `${siteUrl}/images/logonew.jpeg`,
                            },
                        },
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `${siteUrl}/blogs/${post.slug}`,
                        },
                    }),
                }}
            />

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
