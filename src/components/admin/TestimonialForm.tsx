"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type TestimonialFormData = {
    id?: string;
    client_name: string;
    event_type: string | null;
    message: string;
    rating: number | null;
    is_active: boolean;
    sort_order: number | null;
};

type TestimonialFormProps = {
    mode: "create" | "edit";
    initialData?: TestimonialFormData;
};

export default function TestimonialForm({
    mode,
    initialData,
}: TestimonialFormProps) {
    const router = useRouter();

    const [clientName, setClientName] = useState(
        initialData?.client_name ?? "",
    );
    const [eventType, setEventType] = useState(initialData?.event_type ?? "");
    const [message, setMessage] = useState(initialData?.message ?? "");
    const [rating, setRating] = useState(String(initialData?.rating ?? 5));
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
            if (!clientName.trim()) {
                throw new Error("Client name is required.");
            }

            if (!message.trim()) {
                throw new Error("Testimonial message is required.");
            }

            const supabase = createClient();

            const safeRating = Math.min(Math.max(Number(rating) || 5, 1), 5);

            const payload = {
                client_name: clientName.trim(),
                event_type: eventType.trim() || null,
                message: message.trim(),
                rating: safeRating,
                is_active: isActive,
                sort_order: Number(sortOrder) || 0,
            };

            if (mode === "create") {
                const { error } = await supabase
                    .from("testimonials")
                    .insert(payload);

                if (error) {
                    throw new Error(error.message);
                }
            }

            if (mode === "edit") {
                if (!initialData?.id) {
                    throw new Error("Missing testimonial ID.");
                }

                const { error } = await supabase
                    .from("testimonials")
                    .update(payload)
                    .eq("id", initialData.id);

                if (error) {
                    throw new Error(error.message);
                }
            }

            router.push("/admin/testimonials");
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
                    <span>Client Name *</span>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(event) => setClientName(event.target.value)}
                        placeholder="Aarav & Ananya"
                        required
                    />
                </label>

                <label className="admin-field">
                    <span>Event Type</span>
                    <input
                        type="text"
                        value={eventType}
                        onChange={(event) => setEventType(event.target.value)}
                        placeholder="Destination Wedding"
                    />
                </label>

                <label className="admin-field">
                    <span>Rating</span>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        placeholder="5"
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
                    <span>Show this testimonial on website</span>
                </label>

                <label className="admin-field admin-field-full">
                    <span>Testimonial Message *</span>
                    <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Write the client testimonial here..."
                        rows={7}
                        required
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
                          ? "Create Testimonial"
                          : "Update Testimonial"}
                </button>
            </div>
        </form>
    );
}
