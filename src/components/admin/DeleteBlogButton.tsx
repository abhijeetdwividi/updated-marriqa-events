"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DeleteBlogButton({ blogId }: { blogId: string }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this blog?",
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        const supabase = createClient();

        const { error } = await supabase
            .from("blogs")
            .delete()
            .eq("id", blogId);

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
