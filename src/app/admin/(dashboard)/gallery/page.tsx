import Link from "next/link";

import DeleteGalleryImageButton from "@/components/admin/DeleteGalleryImageButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminGalleryPage() {
    const supabase = await createClient();

    const { data: images, error } = await supabase
        .from("gallery_images")
        .select(
            "id, title, category, image_url, alt_text, is_active, sort_order, created_at",
        )
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Gallery</span>
                <h1>Gallery CMS</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Portfolio</span>
                    <h1>Gallery CMS</h1>
                    <p>Add, edit, hide, show, and delete portfolio images.</p>
                </div>

                <Link href="/admin/gallery/new" className="admin-primary-link">
                    Add New Image
                </Link>
            </div>

            <div className="admin-table-card">
                {images && images.length > 0 ? (
                    <div className="admin-blog-list">
                        {images.map((image) => (
                            <div className="admin-blog-row" key={image.id}>
                                <div className="admin-blog-thumb">
                                    <img
                                        src={image.image_url}
                                        alt={
                                            image.alt_text ||
                                            image.title ||
                                            "Gallery"
                                        }
                                    />
                                </div>

                                <div className="admin-blog-info">
                                    <div className="admin-blog-meta">
                                        <span>
                                            {image.category || "No Category"}
                                        </span>
                                        <span>
                                            {image.is_active
                                                ? "Active"
                                                : "Hidden"}
                                        </span>
                                        <span>
                                            Order {image.sort_order ?? 0}
                                        </span>
                                    </div>

                                    <h3>{image.title || "Untitled Image"}</h3>

                                    <p>{image.alt_text || "No alt text"}</p>
                                </div>

                                <div className="admin-blog-actions">
                                    <Link
                                        href={`/admin/gallery/${image.id}/edit`}
                                        className="admin-secondary-link"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteGalleryImageButton
                                        imageId={image.id}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No gallery images yet</h3>
                        <p>
                            Create your first portfolio image for the Marriqa
                            website.
                        </p>
                        <Link
                            href="/admin/gallery/new"
                            className="admin-primary-link"
                        >
                            Add First Image
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
