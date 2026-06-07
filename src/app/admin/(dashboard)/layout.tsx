import Link from "next/link";
import { redirect } from "next/navigation";

import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    const { data: adminUser } = await supabase
        .from("admin_users")
        .select("id, email")
        .eq("id", user.id)
        .maybeSingle();

    if (!adminUser) {
        redirect("/admin/login");
    }

    return (
        <main className="admin-shell">
            <aside className="admin-sidebar">
                <div className="admin-brand-block">
                    <div className="admin-brand-logo">
                        Marriqa <span>Events</span>
                    </div>

                    <div className="admin-brand-subtitle">Admin Console</div>

                    <div className="admin-brand-email">{adminUser.email}</div>
                </div>

                <div className="admin-nav">
                    <Link href="/admin">Dashboard</Link>
                    <Link href="/admin/enquiries">Enquiries</Link>
                    <Link href="/admin/blogs">Blogs</Link>
                    <Link href="/admin/venues">Venue Partners</Link>
                    <Link href="/admin/packages">Packages</Link>
                    <Link href="/admin/gallery">Gallery</Link>
                    <Link href="/admin/testimonials">Testimonials</Link>
                </div>

                <AdminLogoutButton />
            </aside>

            <section className="admin-main">{children}</section>
        </main>
    );
}
