import Link from "next/link";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminBlogsPage() {
    const supabase = await createClient();

    const { data: blogs, error } = await supabase
        .from("blogs")
        .select(
            "id, title, slug, category, read_time, cover_image_url, is_published, sort_order, created_at",
        )
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Blogs</span>
                <h1>Blogs CMS</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Blogs</span>
                    <h1>Blogs CMS</h1>
                    <p>
                        Create, edit, publish, draft, and delete website blogs.
                    </p>
                </div>

                <Link href="/admin/blogs/new" className="admin-primary-link">
                    Add New Blog
                </Link>
            </div>

            <div className="admin-table-card">
                {blogs && blogs.length > 0 ? (
                    <div className="admin-blog-list">
                        {blogs.map((blog) => (
                            <div className="admin-blog-row" key={blog.id}>
                                <div className="admin-blog-thumb">
                                    {blog.cover_image_url ? (
                                        <img
                                            src={blog.cover_image_url}
                                            alt={blog.title}
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>

                                <div className="admin-blog-info">
                                    <div className="admin-blog-meta">
                                        <span>
                                            {blog.category || "Uncategorized"}
                                        </span>
                                        <span>
                                            {blog.read_time || "No read time"}
                                        </span>
                                        <span>
                                            {blog.is_published
                                                ? "Published"
                                                : "Draft"}
                                        </span>
                                    </div>

                                    <h3>{blog.title}</h3>

                                    <p>/{blog.slug}</p>
                                </div>

                                <div className="admin-blog-actions">
                                    <Link
                                        href={`/admin/blogs/${blog.id}/edit`}
                                        className="admin-secondary-link"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteBlogButton blogId={blog.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No blogs yet</h3>
                        <p>
                            Create your first blog post for the Marriqa website.
                        </p>
                        <Link
                            href="/admin/blogs/new"
                            className="admin-primary-link"
                        >
                            Add First Blog
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
