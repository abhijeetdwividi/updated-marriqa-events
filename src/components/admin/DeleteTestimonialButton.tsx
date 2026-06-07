"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DeleteTestimonialButton({
    testimonialId,
}: {
    testimonialId: string;
}) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this testimonial?",
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        const supabase = createClient();

        const { error } = await supabase
            .from("testimonials")
            .delete()
            .eq("id", testimonialId);

        setIsDeleting(false);

        if (error) {
            alert(error.message);
            return;
        }

        router.refresh();
    }

    return (
        <button
            type="button"
            className="admin-danger-btn"
            onClick={handleDelete}
            disabled={isDeleting}
        >
            {isDeleting ? "Deleting..." : "Delete"}
        </button>
    );
}
