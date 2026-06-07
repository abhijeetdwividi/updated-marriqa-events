import Link from "next/link";
import { notFound } from "next/navigation";

import VenueForm from "@/components/admin/VenueForm";
import { createClient } from "@/lib/supabase/server";

type EditVenuePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditVenuePage({ params }: EditVenuePageProps) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: venue, error } = await supabase
        .from("venue_partners")
        .select(
            "id, name, slug, region, location, image_url, description, features, is_active, sort_order",
        )
        .eq("id", id)
        .single();

    if (error || !venue) {
        notFound();
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Venue Partners</span>
                    <h1>Edit Venue</h1>
                    <p>
                        Update venue image, region, location, features, and
                        visibility.
                    </p>
                </div>

                <Link href="/admin/venues" className="admin-secondary-link">
                    Back to Venues
                </Link>
            </div>

            <VenueForm mode="edit" initialData={venue} />
        </div>
    );
}
