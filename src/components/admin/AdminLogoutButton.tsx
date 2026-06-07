"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        const supabase = createClient();

        await supabase.auth.signOut();

        router.push("/admin/login");
        router.refresh();
    }

    return (
        <button
            type="button"
            className="admin-logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}
