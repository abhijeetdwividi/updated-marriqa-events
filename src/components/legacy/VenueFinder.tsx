import { createClient } from "@/lib/supabase/server";
import VenueFinderClient from "./VenueFinderClient";

export default async function VenueFinder() {
    const supabase = await createClient();

    const { data: venues } = await supabase
        .from("venue_partners")
        .select(
            "id, name, region, location, description, image_url, venue_type, min_budget, max_budget, min_guests, max_guests, room_count, lawn_capacity, banquet_capacity, best_for, finder_highlights, package_note",
        )
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

    return (
        <section id="venue-finder">
            <div className="venue-finder-inner">
                <div className="venue-finder-header reveal">
                    <span className="section-label">Venue Finder</span>

                    <h2 className="section-title">
                        Find Your <em>Best Venue</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        Share your location, guest count, budget and room
                        requirement — we’ll suggest the most suitable venue
                        options from Marriqa’s curated partner network.
                    </p>
                </div>

                <VenueFinderClient venues={venues || []} />
            </div>
        </section>
    );
}
