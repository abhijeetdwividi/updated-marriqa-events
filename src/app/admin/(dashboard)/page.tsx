import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

type RecentEnquiry = {
    id: string;
    full_name: string;
    phone: string;
    email: string;
    event_type: string;
    status: string;
    created_at: string;
};

async function getCount(
    table: string,
    filters?: { column: string; value: string | boolean }[],
) {
    const supabase = await createClient();

    let query = supabase
        .from(table)
        .select("*", { count: "exact", head: true });

    filters?.forEach((filter) => {
        query = query.eq(filter.column, filter.value);
    });

    const { count } = await query;

    return count ?? 0;
}

export default async function AdminDashboardPage() {
    const supabase = await createClient();

    const [
        totalEnquiries,
        newLeads,
        publishedBlogs,
        activeVenues,
        activePackages,
        activeGalleryImages,
        activeTestimonials,
    ] = await Promise.all([
        getCount("enquiries"),
        getCount("enquiries", [{ column: "status", value: "New" }]),
        getCount("blogs", [{ column: "is_published", value: true }]),
        getCount("venue_partners", [{ column: "is_active", value: true }]),
        getCount("packages", [{ column: "is_active", value: true }]),
        getCount("gallery_images", [{ column: "is_active", value: true }]),
        getCount("testimonials", [{ column: "is_active", value: true }]),
    ]);

    const { data: recentEnquiries } = await supabase
        .from("enquiries")
        .select("id, full_name, phone, email, event_type, status, created_at")
        .order("created_at", { ascending: false })
        .limit(6);

    const statCards = [
        {
            label: "Total Enquiries",
            value: totalEnquiries,
            href: "/admin/enquiries",
        },
        {
            label: "New Leads",
            value: newLeads,
            href: "/admin/enquiries",
        },
        {
            label: "Published Blogs",
            value: publishedBlogs,
            href: "/admin/blogs",
        },
        {
            label: "Active Venues",
            value: activeVenues,
            href: "/admin/venues",
        },
        {
            label: "Active Packages",
            value: activePackages,
            href: "/admin/packages",
        },
        {
            label: "Gallery Images",
            value: activeGalleryImages,
            href: "/admin/gallery",
        },
        {
            label: "Testimonials",
            value: activeTestimonials,
            href: "/admin/testimonials",
        },
    ];

    return (
        <div>
            <div className="admin-page-header">
                <span className="admin-kicker">Dashboard</span>
                <h1>Website Overview</h1>
                <p>
                    Track Marriqa Events leads, website content, venues,
                    packages, gallery images, blogs, and client testimonials
                    from one clean dashboard.
                </p>
            </div>

            <div className="admin-stats-grid">
                {statCards.map((card) => (
                    <Link
                        href={card.href}
                        className="admin-stat-card"
                        key={card.label}
                    >
                        <span>{card.label}</span>
                        <strong>{card.value}</strong>
                    </Link>
                ))}
            </div>

            <section className="admin-recent-panel admin-recent-panel-full">
                <div className="admin-section-heading admin-section-heading-row">
                    <div>
                        <span className="admin-kicker">Recent Leads</span>
                        <h2>Latest Enquiries</h2>
                    </div>

                    <Link
                        href="/admin/enquiries"
                        className="admin-secondary-link"
                    >
                        View All Leads
                    </Link>
                </div>

                {recentEnquiries && recentEnquiries.length > 0 ? (
                    <div className="admin-recent-list">
                        {(recentEnquiries as RecentEnquiry[]).map((enquiry) => (
                            <Link
                                href="/admin/enquiries"
                                className="admin-recent-item"
                                key={enquiry.id}
                            >
                                <div>
                                    <h3>{enquiry.full_name}</h3>
                                    <p>{enquiry.event_type}</p>
                                    <small>{enquiry.phone}</small>
                                </div>

                                <div>
                                    <span>{enquiry.status}</span>
                                    <small>
                                        {new Date(
                                            enquiry.created_at,
                                        ).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                        })}
                                    </small>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-mini">
                        <h3>No enquiries yet</h3>
                        <p>New website leads will appear here.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
