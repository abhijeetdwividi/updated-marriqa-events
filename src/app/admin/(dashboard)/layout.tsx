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

    const navItems = [
        {
            label: "Dashboard",
            href: "/admin",
        },
        {
            label: "Enquiries",
            href: "/admin/enquiries",
        },
        {
            label: "Blogs",
            href: "/admin/blogs",
        },
        {
            label: "Venue Partners",
            href: "/admin/venues",
        },
        {
            label: "Packages",
            href: "/admin/packages",
        },
        {
            label: "Gallery",
            href: "/admin/gallery",
        },
        {
            label: "Testimonials",
            href: "/admin/testimonials",
        },
    ];

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

                <nav className="admin-nav" aria-label="Admin navigation">
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            className="admin-nav-link"
                            key={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <AdminLogoutButton />
            </aside>

            <section className="admin-main">{children}</section>
        </main>
    );
}
