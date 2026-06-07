"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type VenueFormData = {
    id?: string;
    name: string;
    slug: string;
    region: string | null;
    location: string | null;
    image_url: string | null;
    description: string | null;
    features: string[] | null;
    is_active: boolean;
    sort_order: number | null;
};

type VenueFormProps = {
    mode: "create" | "edit";
    initialData?: VenueFormData;
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

function parseFeatures(value: string) {
    return value
        .split(/[\n,]+/)
        .map((item) => item.trim())
        .filter(Boolean);
}

export default function VenueForm({ mode, initialData }: VenueFormProps) {
    const router = useRouter();
    const supabase = useMemo(() => createClient(), []);

    const [name, setName] = useState(initialData?.name ?? "");
    const [slug, setSlug] = useState(initialData?.slug ?? "");
    const [region, setRegion] = useState(initialData?.region ?? "");
    const [location, setLocation] = useState(initialData?.location ?? "");
    const [description, setDescription] = useState(
        initialData?.description ?? "",
    );
    const [features, setFeatures] = useState(
        initialData?.features?.join("\n") ?? "",
    );
    const [sortOrder, setSortOrder] = useState(
        String(initialData?.sort_order ?? 0),
    );
    const [isActive, setIsActive] = useState(initialData?.is_active ?? true);
    const [imageUrl, setImageUrl] = useState(initialData?.image_url ?? "");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    function handleNameChange(value: string) {
        setName(value);

        if (mode === "create") {
            setSlug(createSlug(value));
        }
    }

    async function uploadVenueImage() {
        if (!selectedFile) {
            return imageUrl;
        }

        const safeFileName = getSafeFileName(selectedFile.name);
        const filePath = `venues/${Date.now()}-${safeFileName}`;

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
            if (!name.trim()) {
                throw new Error("Venue name is required.");
            }

            if (!slug.trim()) {
                throw new Error("Venue slug is required.");
            }

            const finalImageUrl = await uploadVenueImage();

            const payload = {
                name: name.trim(),
                slug: createSlug(slug),
                region: region.trim() || null,
                location: location.trim() || null,
                image_url: finalImageUrl || null,
                description: description.trim() || null,
                features: parseFeatures(features),
                is_active: isActive,
                sort_order: Number(sortOrder) || 0,
            };

            if (mode === "create") {
                const { error } = await supabase
                    .from("venue_partners")
                    .insert(payload);

                if (error) {
                    throw new Error(error.message);
                }
            }

            if (mode === "edit") {
                if (!initialData?.id) {
                    throw new Error("Missing venue ID.");
                }

                const { error } = await supabase
                    .from("venue_partners")
                    .update(payload)
                    .eq("id", initialData.id);

                if (error) {
                    throw new Error(error.message);
                }
            }

            router.push("/admin/venues");
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
                    <span>Venue Name *</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            handleNameChange(event.target.value)
                        }
                        placeholder="Baris Resort Mussoorie"
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
                        placeholder="baris-resort-mussoorie"
                        required
                    />
                </label>

                <label className="admin-field">
                    <span>Region</span>
                    <input
                        type="text"
                        value={region}
                        onChange={(event) => setRegion(event.target.value)}
                        placeholder="Mussoorie"
                    />
                </label>

                <label className="admin-field">
                    <span>Location</span>
                    <input
                        type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="Mussoorie, Uttarakhand"
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

                <label className="admin-toggle-field">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(event) => setIsActive(event.target.checked)}
                    />
                    <span>Show this venue on website</span>
                </label>

                <label className="admin-field admin-field-full">
                    <span>Venue Image Upload</span>
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
                        <img src={imageUrl} alt="Current venue" />
                        <p>Current venue image</p>
                    </div>
                ) : null}

                <label className="admin-field admin-field-full">
                    <span>Description</span>
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Write a short venue description..."
                        rows={5}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Features</span>
                    <textarea
                        value={features}
                        onChange={(event) => setFeatures(event.target.value)}
                        placeholder={`Hill views\nResort stay\nIndoor + outdoor spaces\nDestination weddings`}
                        rows={6}
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
                          ? "Create Venue"
                          : "Update Venue"}
                </button>
            </div>
        </form>
    );
}
