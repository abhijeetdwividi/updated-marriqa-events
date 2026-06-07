import Link from "next/link";
import { notFound } from "next/navigation";

import BlogForm from "@/components/admin/BlogForm";
import { createClient } from "@/lib/supabase/server";

type EditBlogPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditBlogPage({ params }: EditBlogPageProps) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: blog, error } = await supabase
        .from("blogs")
        .select(
            "id, title, slug, excerpt, content, cover_image_url, category, read_time, is_published, sort_order",
        )
        .eq("id", id)
        .single();

    if (error || !blog) {
        notFound();
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Blogs</span>
                    <h1>Edit Blog</h1>
                    <p>
                        Update blog content, cover image, publish status, and
                        SEO slug.
                    </p>
                </div>

                <Link href="/admin/blogs" className="admin-secondary-link">
                    Back to Blogs
                </Link>
            </div>

            <BlogForm mode="edit" initialData={blog} />
        </div>
    );
}
