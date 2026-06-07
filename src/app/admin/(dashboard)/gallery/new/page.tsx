import Link from "next/link";
import GalleryImageForm from "@/components/admin/GalleryImageForm";

export default function NewGalleryImagePage() {
    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Gallery</span>
                    <h1>Add New Image</h1>
                    <p>Upload a new portfolio image for the website gallery.</p>
                </div>

                <Link href="/admin/gallery" className="admin-secondary-link">
                    Back to Gallery
                </Link>
            </div>

            <GalleryImageForm mode="create" />
        </div>
    );
}
