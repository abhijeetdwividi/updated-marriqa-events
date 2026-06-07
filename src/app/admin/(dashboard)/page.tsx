const adminCards = [
    {
        title: "Blogs",
        description:
            "Create wedding guides, venue blogs, planning tips, and inspiration articles.",
    },
    {
        title: "Venue Partners",
        description:
            "Manage resort, hotel, farmhouse, and destination venue partner listings.",
    },
    {
        title: "Packages",
        description:
            "Update package names, prices, inclusions, tags, and active status.",
    },
    {
        title: "Gallery Images",
        description:
            "Upload and manage portfolio images used across the website gallery.",
    },
    {
        title: "Testimonials",
        description:
            "Add client reviews, event stories, star ratings, and display order.",
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
                {adminCards.map((card) => (
                    <div className="admin-dashboard-card" key={card.title}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <span>Coming next</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
