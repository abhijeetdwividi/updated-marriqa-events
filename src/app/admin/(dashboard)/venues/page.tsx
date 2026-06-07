import Link from "next/link";

import DeleteVenueButton from "@/components/admin/DeleteVenueButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminVenuesPage() {
    const supabase = await createClient();

    const { data: venues, error } = await supabase
        .from("venue_partners")
        .select(
            "id, name, slug, region, location, image_url, is_active, sort_order, created_at",
        )
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Venue Partners</span>
                <h1>Venue Partners CMS</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Venue Partners</span>
                    <h1>Venue Partners CMS</h1>
                    <p>
                        Add, edit, hide, show, and delete website venue
                        partners.
                    </p>
                </div>

                <Link href="/admin/venues/new" className="admin-primary-link">
                    Add New Venue
                </Link>
            </div>

            <div className="admin-table-card">
                {venues && venues.length > 0 ? (
                    <div className="admin-blog-list">
                        {venues.map((venue) => (
                            <div className="admin-blog-row" key={venue.id}>
                                <div className="admin-blog-thumb">
                                    {venue.image_url ? (
                                        <img
                                            src={venue.image_url}
                                            alt={venue.name}
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>

                                <div className="admin-blog-info">
                                    <div className="admin-blog-meta">
                                        <span>
                                            {venue.region || "No Region"}
                                        </span>
                                        <span>
                                            {venue.location || "No Location"}
                                        </span>
                                        <span>
                                            {venue.is_active
                                                ? "Active"
                                                : "Hidden"}
                                        </span>
                                    </div>

                                    <h3>{venue.name}</h3>

                                    <p>/{venue.slug}</p>
                                </div>

                                <div className="admin-blog-actions">
                                    <Link
                                        href={`/admin/venues/${venue.id}/edit`}
                                        className="admin-secondary-link"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteVenueButton venueId={venue.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No venues yet</h3>
                        <p>
                            Create your first venue partner for the Marriqa
                            website.
                        </p>
                        <Link
                            href="/admin/venues/new"
                            className="admin-primary-link"
                        >
                            Add First Venue
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
