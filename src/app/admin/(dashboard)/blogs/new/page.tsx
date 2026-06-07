import Link from "next/link";
import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Blogs</span>
                    <h1>Add New Blog</h1>
                    <p>Create a new wedding journal article for the website.</p>
                </div>

                <Link href="/admin/blogs" className="admin-secondary-link">
                    Back to Blogs
                </Link>
            </div>

            <BlogForm mode="create" />
        </div>
    );
}
