"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type GalleryImageFormData = {
    id?: string;
    title: string | null;
    category: string | null;
    image_url: string;
    alt_text: string | null;
    is_active: boolean;
    sort_order: number | null;
};

type GalleryImageFormProps = {
    mode: "create" | "edit";
    initialData?: GalleryImageFormData;
};

function getSafeFileName(fileName: string) {
    return fileName
        .toLowerCase()
        .replace(/[^a-z0-9.\-_]/g, "-")
        .replace(/-+/g, "-");
}

export default function GalleryImageForm({
    mode,
    initialData,
}: GalleryImageFormProps) {
    const router = useRouter();
    const supabase = useMemo(() => createClient(), []);

    const [title, setTitle] = useState(initialData?.title ?? "");
    const [category, setCategory] = useState(initialData?.category ?? "");
    const [imageUrl, setImageUrl] = useState(initialData?.image_url ?? "");
    const [altText, setAltText] = useState(initialData?.alt_text ?? "");
    const [sortOrder, setSortOrder] = useState(
        String(initialData?.sort_order ?? 0),
    );
    const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    async function uploadGalleryImage() {
        if (!selectedFile) {
            return imageUrl;
        }

        const safeFileName = getSafeFileName(selectedFile.name);
        const filePath = `gallery/${Date.now()}-${safeFileName}`;

        const { error: uploadError } = await supabase.storage
            .from("website-images")
            .upload(filePath, selectedFile, {
                cacheControl: "3600",
                upsert: false,
            });

        if (uploadError) {
            throw new Error(uploadError.message);
        }

        const { data } = supabase.storage
            .from("website-images")
            .getPublicUrl(filePath);

        return data.publicUrl;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSaving(true);
        setErrorMessage("");

        try {
            const finalImageUrl = await uploadGalleryImage();

            if (!finalImageUrl.trim()) {
                throw new Error(
                    "Gallery image is required. Upload an image or add an image URL.",
                );
            }

            const payload = {
                title: title.trim() || null,
                category: category.trim() || null,
                image_url: finalImageUrl.trim(),
                alt_text:
                    altText.trim() || title.trim() || "Marriqa Events Gallery",
                is_active: isActive,
                sort_order: Number(sortOrder) || 0,
            };

            if (mode === "create") {
                const { error } = await supabase
                    .from("gallery_images")
                    .insert(payload);

                if (error) {
                    throw new Error(error.message);
                }
            }

            if (mode === "edit") {
                if (!initialData?.id) {
                    throw new Error("Missing gallery image ID.");
                }

                const { error } = await supabase
                    .from("gallery_images")
                    .update(payload)
                    .eq("id", initialData.id);

                if (error) {
                    throw new Error(error.message);
                }
            }

            router.push("/admin/gallery");
            router.refresh();
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong.",
            );
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <form className="admin-editor-form" onSubmit={handleSubmit}>
            <div className="admin-editor-grid">
                <label className="admin-field">
                    <span>Image Title</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Signature Decor"
                    />
                </label>

                <label className="admin-field">
                    <span>Category</span>
                    <input
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        placeholder="Wedding / Decor / Haldi / Engagement"
                    />
                </label>

                <label className="admin-field">
                    <span>Alt Text</span>
                    <input
                        type="text"
                        value={altText}
                        onChange={(event) => setAltText(event.target.value)}
                        placeholder="Luxury wedding decor by Marriqa Events"
                    />
                </label>

                <label className="admin-field">
                    <span>Sort Order</span>
                    <input
                        type="number"
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        placeholder="1"
                    />
                </label>

                <label className="admin-toggle-field admin-field-full">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(event) => setIsActive(event.target.checked)}
                    />
                    <span>Show this image on website</span>
                </label>

                <label className="admin-field admin-field-full">
                    <span>Upload Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            setSelectedFile(event.target.files?.[0] ?? null);
                        }}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Image URL</span>
                    <input
                        type="url"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        placeholder="https://..."
                    />
                </label>

                {imageUrl ? (
                    <div className="admin-image-preview admin-field-full">
                        <img
                            src={imageUrl}
                            alt={altText || title || "Gallery preview"}
                        />
                        <p>Current gallery image</p>
                    </div>
                ) : null}
            </div>

            {errorMessage ? (
                <div className="admin-error">{errorMessage}</div>
            ) : null}

            <div className="admin-editor-actions">
                <button type="submit" disabled={isSaving}>
                    {isSaving
                        ? "Saving..."
                        : mode === "create"
                          ? "Create Gallery Image"
                          : "Update Gallery Image"}
                </button>
            </div>
        </form>
    );
}
