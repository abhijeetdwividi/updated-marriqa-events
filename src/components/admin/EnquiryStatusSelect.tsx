"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const statuses = ["New", "Contacted", "Converted", "Lost"];

export default function EnquiryStatusSelect({
    enquiryId,
    currentStatus,
}: {
    enquiryId: string;
    currentStatus: string;
}) {
    const router = useRouter();
    const [status, setStatus] = useState(currentStatus);
    const [isSaving, setIsSaving] = useState(false);

    async function handleChange(nextStatus: string) {
        setStatus(nextStatus);
        setIsSaving(true);

        const supabase = createClient();

        const { error } = await supabase
            .from("enquiries")
            .update({ status: nextStatus })
            .eq("id", enquiryId);

        setIsSaving(false);

        if (error) {
            alert(error.message);
            setStatus(currentStatus);
            return;
        }

        router.refresh();
    }

    return (
        <select
            className="admin-status-select"
            value={status}
            onChange={(event) => handleChange(event.target.value)}
            disabled={isSaving}
        >
            {statuses.map((item) => (
                <option value={item} key={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}
