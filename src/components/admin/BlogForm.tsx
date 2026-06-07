"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type BlogFormData = {
    id?: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    cover_image_url: string | null;
    category: string | null;
    read_time: string | null;
    is_published: boolean;
    sort_order: number | null;
};

type BlogFormProps = {
    mode: "create" | "edit";
    initialData?: BlogFormData;
};

function createSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function getSafeFileName(fileName: string) {
    return fileName
        .toLowerCase()
        .replace(/[^a-z0-9.\-_]/g, "-")
        .replace(/-+/g, "-");
}

export default function BlogForm({ mode, initialData }: BlogFormProps) {
    const router = useRouter();
    const supabase = useMemo(() => createClient(), []);

    const [title, setTitle] = useState(initialData?.title ?? "");
    const [slug, setSlug] = useState(initialData?.slug ?? "");
    const [category, setCategory] = useState(initialData?.category ?? "");
    const [readTime, setReadTime] = useState(initialData?.read_time ?? "");
    const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
    const [content, setContent] = useState(initialData?.content ?? "");
    const [sortOrder, setSortOrder] = useState(
        String(initialData?.sort_order ?? 0),
    );
    const [isPublished, setIsPublished] = useState(
        initialData?.is_published ?? false,
    );
    const [coverImageUrl, setCoverImageUrl] = useState(
        initialData?.cover_image_url ?? "",
    );
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    function handleTitleChange(value: string) {
        setTitle(value);

        if (mode === "create") {
            setSlug(createSlug(value));
        }
    }

    async function uploadCoverImage() {
        if (!selectedFile) {
            return coverImageUrl;
        }

        const safeFileName = getSafeFileName(selectedFile.name);
        const filePath = `blogs/${Date.now()}-${safeFileName}`;

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
            if (!title.trim()) {
                throw new Error("Blog title is required.");
            }

            if (!slug.trim()) {
                throw new Error("Blog slug is required.");
            }

            const finalCoverImageUrl = await uploadCoverImage();

            const payload = {
                title: title.trim(),
                slug: createSlug(slug),
                excerpt: excerpt.trim() || null,
                content: content.trim() || null,
                cover_image_url: finalCoverImageUrl || null,
                category: category.trim() || null,
                read_time: readTime.trim() || null,
                is_published: isPublished,
                sort_order: Number(sortOrder) || 0,
            };

            if (mode === "create") {
                const { error } = await supabase.from("blogs").insert(payload);

                if (error) {
                    throw new Error(error.message);
                }
            }

            if (mode === "edit") {
                if (!initialData?.id) {
                    throw new Error("Missing blog ID.");
                }

                const { error } = await supabase
                    .from("blogs")
                    .update(payload)
                    .eq("id", initialData.id);

                if (error) {
                    throw new Error(error.message);
                }
            }

            router.push("/admin/blogs");
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
                    <span>Blog Title *</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>
                            handleTitleChange(event.target.value)
                        }
                        placeholder="Best Wedding Destinations Near Delhi NCR"
                        required
                    />
                </label>

                <label className="admin-field">
                    <span>Slug *</span>
                    <input
                        type="text"
                        value={slug}
                        onChange={(event) =>
                            setSlug(createSlug(event.target.value))
                        }
                        placeholder="best-wedding-destinations-near-delhi-ncr"
                        required
                    />
                </label>

                <label className="admin-field">
                    <span>Category</span>
                    <input
                        type="text"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        placeholder="Destination Weddings"
                    />
                </label>

                <label className="admin-field">
                    <span>Read Time</span>
                    <input
                        type="text"
                        value={readTime}
                        onChange={(event) => setReadTime(event.target.value)}
                        placeholder="5 min read"
                    />
                </label>

                <label className="admin-field">
                    <span>Sort Order</span>
                    <input
                        type="number"
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        placeholder="0"
                    />
                </label>

                <label className="admin-toggle-field">
                    <input
                        type="checkbox"
                        checked={isPublished}
                        onChange={(event) =>
                            setIsPublished(event.target.checked)
                        }
                    />
                    <span>Publish this blog</span>
                </label>

                <label className="admin-field admin-field-full">
                    <span>Cover Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            setSelectedFile(event.target.files?.[0] ?? null);
                        }}
                    />
                </label>

                {coverImageUrl ? (
                    <div className="admin-image-preview admin-field-full">
                        <img src={coverImageUrl} alt="Current blog cover" />
                        <p>Current cover image</p>
                    </div>
                ) : null}

                <label className="admin-field admin-field-full">
                    <span>Short Excerpt</span>
                    <textarea
                        value={excerpt}
                        onChange={(event) => setExcerpt(event.target.value)}
                        placeholder="Write a short summary for the blog card..."
                        rows={4}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Full Blog Content</span>
                    <textarea
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Write the full blog content here..."
                        rows={12}
                    />
                </label>
            </div>

            {errorMessage ? (
                <div className="admin-error">{errorMessage}</div>
            ) : null}

            <div className="admin-editor-actions">
                <button type="submit" disabled={isSaving}>
                    {isSaving
                        ? "Saving..."
                        : mode === "create"
                          ? "Create Blog"
                          : "Update Blog"}
                </button>
            </div>
        </form>
    );
}
