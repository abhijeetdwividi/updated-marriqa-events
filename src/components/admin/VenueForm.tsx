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

    venue_type?: string | null;
    min_budget?: number | null;
    max_budget?: number | null;
    min_guests?: number | null;
    max_guests?: number | null;
    room_count?: number | null;
    lawn_capacity?: number | null;
    banquet_capacity?: number | null;
    best_for?: string[] | null;
    finder_highlights?: string[] | null;
    package_note?: string | null;
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

function parseList(value: string) {
    return value
        .split(/[\n,]+/)
        .map((item) => item.trim())
        .filter(Boolean);
}

function parseOptionalNumber(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
        return null;
    }

    const parsed = Number(trimmed);

    if (Number.isNaN(parsed)) {
        return null;
    }

    return parsed;
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

    const [venueType, setVenueType] = useState(
        initialData?.venue_type ?? "Resort",
    );
    const [minBudget, setMinBudget] = useState(
        initialData?.min_budget ? String(initialData.min_budget) : "",
    );
    const [maxBudget, setMaxBudget] = useState(
        initialData?.max_budget ? String(initialData.max_budget) : "",
    );
    const [minGuests, setMinGuests] = useState(
        initialData?.min_guests ? String(initialData.min_guests) : "",
    );
    const [maxGuests, setMaxGuests] = useState(
        initialData?.max_guests ? String(initialData.max_guests) : "",
    );
    const [roomCount, setRoomCount] = useState(
        initialData?.room_count ? String(initialData.room_count) : "",
    );
    const [lawnCapacity, setLawnCapacity] = useState(
        initialData?.lawn_capacity ? String(initialData.lawn_capacity) : "",
    );
    const [banquetCapacity, setBanquetCapacity] = useState(
        initialData?.banquet_capacity
            ? String(initialData.banquet_capacity)
            : "",
    );
    const [bestFor, setBestFor] = useState(
        initialData?.best_for?.join("\n") ?? "",
    );
    const [finderHighlights, setFinderHighlights] = useState(
        initialData?.finder_highlights?.join("\n") ?? "",
    );
    const [packageNote, setPackageNote] = useState(
        initialData?.package_note ?? "",
    );

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
                features: parseList(features),
                is_active: isActive,
                sort_order: Number(sortOrder) || 0,

                venue_type: venueType.trim() || "Resort",
                min_budget: parseOptionalNumber(minBudget),
                max_budget: parseOptionalNumber(maxBudget),
                min_guests: parseOptionalNumber(minGuests),
                max_guests: parseOptionalNumber(maxGuests),
                room_count: parseOptionalNumber(roomCount),
                lawn_capacity: parseOptionalNumber(lawnCapacity),
                banquet_capacity: parseOptionalNumber(banquetCapacity),
                best_for: parseList(bestFor),
                finder_highlights: parseList(finderHighlights),
                package_note: packageNote.trim() || null,
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
                <div className="admin-field admin-field-full admin-form-divider">
                    <span>Basic Venue Details</span>
                </div>

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
                    <span>Website Card Features</span>
                    <textarea
                        value={features}
                        onChange={(event) => setFeatures(event.target.value)}
                        placeholder={`Hill views\nResort stay\nIndoor + outdoor spaces\nDestination weddings`}
                        rows={6}
                    />
                </label>

                <div className="admin-field admin-field-full admin-form-divider">
                    <span>Venue Finder Matching Details</span>
                </div>

                <label className="admin-field">
                    <span>Venue Type</span>
                    <select
                        value={venueType}
                        onChange={(event) => setVenueType(event.target.value)}
                    >
                        <option value="Resort">Resort</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Farmhouse">Farmhouse</option>
                        <option value="Banquet">Banquet</option>
                        <option value="Heritage">Heritage</option>
                    </select>
                </label>

                <label className="admin-field">
                    <span>Minimum Budget ₹</span>
                    <input
                        type="number"
                        value={minBudget}
                        onChange={(event) => setMinBudget(event.target.value)}
                        placeholder="2500000"
                    />
                </label>

                <label className="admin-field">
                    <span>Maximum Budget ₹</span>
                    <input
                        type="number"
                        value={maxBudget}
                        onChange={(event) => setMaxBudget(event.target.value)}
                        placeholder="5500000"
                    />
                </label>

                <label className="admin-field">
                    <span>Minimum Guests</span>
                    <input
                        type="number"
                        value={minGuests}
                        onChange={(event) => setMinGuests(event.target.value)}
                        placeholder="80"
                    />
                </label>

                <label className="admin-field">
                    <span>Maximum Guests</span>
                    <input
                        type="number"
                        value={maxGuests}
                        onChange={(event) => setMaxGuests(event.target.value)}
                        placeholder="250"
                    />
                </label>

                <label className="admin-field">
                    <span>Room Count</span>
                    <input
                        type="number"
                        value={roomCount}
                        onChange={(event) => setRoomCount(event.target.value)}
                        placeholder="45"
                    />
                </label>

                <label className="admin-field">
                    <span>Lawn Capacity</span>
                    <input
                        type="number"
                        value={lawnCapacity}
                        onChange={(event) =>
                            setLawnCapacity(event.target.value)
                        }
                        placeholder="300"
                    />
                </label>

                <label className="admin-field">
                    <span>Banquet Capacity</span>
                    <input
                        type="number"
                        value={banquetCapacity}
                        onChange={(event) =>
                            setBanquetCapacity(event.target.value)
                        }
                        placeholder="150"
                    />
                </label>

                <div className="admin-field admin-field-full admin-form-divider">
                    <span>Venue Finder Recommendation Content</span>
                </div>

                <label className="admin-field admin-field-full">
                    <span>Best For</span>
                    <textarea
                        value={bestFor}
                        onChange={(event) => setBestFor(event.target.value)}
                        placeholder={`Wedding\nEngagement\nAnniversary\nCorporate`}
                        rows={4}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Finder Highlights</span>
                    <textarea
                        value={finderHighlights}
                        onChange={(event) =>
                            setFinderHighlights(event.target.value)
                        }
                        placeholder={`Good room inventory\nLawn + banquet available\nDestination friendly\nBest for 2-day wedding`}
                        rows={5}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Package Note</span>
                    <textarea
                        value={packageNote}
                        onChange={(event) => setPackageNote(event.target.value)}
                        placeholder="Best suited for 2-day wedding celebrations with stay and multiple functions."
                        rows={4}
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
