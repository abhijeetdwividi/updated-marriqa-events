import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://updated-marriqa-events.vercel.app";

type BlogSitemapItem = {
    slug: string;
    created_at: string | null;
    updated_at: string | null;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return staticRoutes;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: blogs, error } = await supabase
        .from("blogs")
        .select("slug, created_at, updated_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

    if (error || !blogs) {
        return staticRoutes;
    }

    const blogRoutes: MetadataRoute.Sitemap = (blogs as BlogSitemapItem[]).map(
        (blog) => ({
            url: `${siteUrl}/blogs/${blog.slug}`,
            lastModified: blog.updated_at || blog.created_at || new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        }),
    );

    return [...staticRoutes, ...blogRoutes];
}
