"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type PackageFormData = {
    id?: string;
    title: string;
    tag: string | null;
    price: string | null;
    description: string | null;
    inclusions: string[] | null;
    is_active: boolean;
    sort_order: number | null;
};

type PackageFormProps = {
    mode: "create" | "edit";
    initialData?: PackageFormData;
};

function parseInclusions(value: string) {
    return value
        .split(/[\n,]+/)
        .map((item) => item.trim())
        .filter(Boolean);
}

export default function PackageForm({ mode, initialData }: PackageFormProps) {
    const router = useRouter();

    const [title, setTitle] = useState(initialData?.title ?? "");
    const [tag, setTag] = useState(initialData?.tag ?? "");
    const [price, setPrice] = useState(initialData?.price ?? "");
    const [description, setDescription] = useState(
        initialData?.description ?? "",
    );
    const [inclusions, setInclusions] = useState(
        initialData?.inclusions?.join("\n") ?? "",
    );
    const [sortOrder, setSortOrder] = useState(
        String(initialData?.sort_order ?? 0),
    );
    const [isActive, setIsActive] = useState(initialData?.is_active ?? true);

    const [errorMessage, setErrorMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSaving(true);
        setErrorMessage("");

        try {
            if (!title.trim()) {
                throw new Error("Package title is required.");
            }

            const supabase = createClient();

            const payload = {
                title: title.trim(),
                tag: tag.trim() || null,
                price: price.trim() || null,
                description: description.trim() || null,
                inclusions: parseInclusions(inclusions),
                is_active: isActive,
                sort_order: Number(sortOrder) || 0,
            };

            if (mode === "create") {
                const { error } = await supabase
                    .from("packages")
                    .insert(payload);

                if (error) {
                    throw new Error(error.message);
                }
            }

            if (mode === "edit") {
                if (!initialData?.id) {
                    throw new Error("Missing package ID.");
                }

                const { error } = await supabase
                    .from("packages")
                    .update(payload)
                    .eq("id", initialData.id);

                if (error) {
                    throw new Error(error.message);
                }
            }

            router.push("/admin/packages");
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
                    <span>Package Title *</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Engagement Experience"
                        required
                    />
                </label>

                <label className="admin-field">
                    <span>Tag</span>
                    <input
                        type="text"
                        value={tag}
                        onChange={(event) => setTag(event.target.value)}
                        placeholder="Most Popular"
                    />
                </label>

                <label className="admin-field">
                    <span>Price</span>
                    <input
                        type="text"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="Starting from ₹2.5L"
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
                    <span>Show this package on website</span>
                </label>

                <label className="admin-field admin-field-full">
                    <span>Description</span>
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Write a short package description..."
                        rows={5}
                    />
                </label>

                <label className="admin-field admin-field-full">
                    <span>Inclusions</span>
                    <textarea
                        value={inclusions}
                        onChange={(event) => setInclusions(event.target.value)}
                        placeholder={`Venue assistance\nEngagement backdrop\nWelcome board\nTable decor\nSound setup`}
                        rows={8}
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
                          ? "Create Package"
                          : "Update Package"}
                </button>
            </div>
        </form>
    );
}
