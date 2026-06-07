import Link from "next/link";
import { notFound } from "next/navigation";

import GalleryImageForm from "@/components/admin/GalleryImageForm";
import { createClient } from "@/lib/supabase/server";

type EditGalleryImagePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditGalleryImagePage({
    params,
}: EditGalleryImagePageProps) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: image, error } = await supabase
        .from("gallery_images")
        .select(
            "id, title, category, image_url, alt_text, is_active, sort_order",
        )
        .eq("id", id)
        .single();

    if (error || !image) {
        notFound();
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Gallery</span>
                    <h1>Edit Image</h1>
                    <p>
                        Update image, category, title, alt text, and visibility.
                    </p>
                </div>

                <Link href="/admin/gallery" className="admin-secondary-link">
                    Back to Gallery
                </Link>
            </div>

            <GalleryImageForm mode="edit" initialData={image} />
        </div>
    );
}
