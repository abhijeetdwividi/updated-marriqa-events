import Link from "next/link";

const adminCards = [
    {
        title: "Enquiries",
        description:
            "View website leads, event enquiries, client contact details, and follow-up status.",
        href: "/admin/enquiries",
        status: "View Leads",
    },
    {
        title: "Blogs",
        description:
            "Create wedding guides, venue blogs, planning tips, and inspiration articles.",
        href: "/admin/blogs",
        status: "Manage Blogs",
    },
    {
        title: "Venue Partners",
        description:
            "Manage resort, hotel, farmhouse, and destination venue partner listings.",
        href: "/admin/venues",
        status: "Manage Venues",
    },
    {
        title: "Packages",
        description:
            "Update package names, prices, inclusions, tags, and active status.",
        href: "/admin/packages",
        status: "Manage Packages",
    },
    {
        title: "Gallery Images",
        description:
            "Upload and manage portfolio images used across the website gallery.",
        href: "/admin/gallery",
        status: "Manage Gallery",
    },
    {
        title: "Testimonials",
        description:
            "Add client reviews, event stories, star ratings, and display order.",
        href: "/admin/testimonials",
        status: "Manage Testimonials",
    },
];

export default function AdminDashboardPage() {
    return (
        <div>
            <div className="admin-page-header">
                <span className="admin-kicker">Dashboard</span>
                <h1>Website Content Manager</h1>
                <p>
                    Manage Marriqa Events website content from one place.
                    Editing pages will be added section by section.
                </p>
            </div>

            <div className="admin-dashboard-grid">
                {adminCards.map((card) => {
                    if (!card.href) {
                        return (
                            <div
                                className="admin-dashboard-card admin-dashboard-card-disabled"
                                key={card.title}
                            >
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <span>{card.status}</span>
                            </div>
                        );
                    }

                    return (
                        <Link
                            href={card.href}
                            className="admin-dashboard-card admin-dashboard-card-link"
                            key={card.title}
                        >
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <span>{card.status}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
