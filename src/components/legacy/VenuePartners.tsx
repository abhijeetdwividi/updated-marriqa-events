import { createClient } from "@/lib/supabase/server";

type VenuePartner = {
    id: string;
    name: string;
    slug: string;
    region: string | null;
    location: string | null;
    image_url: string | null;
    description: string | null;
    features: string[] | null;
};

export default async function VenuePartners() {
    const supabase = await createClient();

    const { data: venues, error } = await supabase
        .from("venue_partners")
        .select(
            "id, name, slug, region, location, image_url, description, features",
        )
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error || !venues || venues.length === 0) {
        return null;
    }

    return (
        <section id="venue-partners">
            <div className="venue-partners-inner">
                <div className="venue-partners-header reveal">
                    <span className="section-label">Our Network</span>

                    <h2 className="section-title">
                        Our Venue <em>Partners</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        From luxury farmhouses in Delhi NCR to destination
                        resorts in Jim Corbett, Mussoorie, Varanasi, and
                        Rajasthan — we help you discover venues that match your
                        guest count, budget, and celebration style.
                    </p>
                </div>

                <div className="venue-partners-grid venue-partners-grid-image">
                    {(venues as VenuePartner[]).map((venue, index) => (
                        <div
                            className="venue-partner-card venue-partner-image-card reveal"
                            style={{
                                transitionDelay: `${0.1 + index * 0.08}s`,
                            }}
                            key={venue.id}
                        >
                            <div className="venue-image-wrap">
                                {venue.image_url ? (
                                    <img
                                        src={venue.image_url}
                                        alt={venue.name}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="venue-placeholder-image">
                                        Marriqa Venue
                                    </div>
                                )}

                                <div className="venue-image-overlay"></div>

                                <span className="venue-region">
                                    {venue.region ||
                                        venue.location ||
                                        "Venue Partner"}
                                </span>
                            </div>

                            <div className="venue-card-content">
                                <h3>{venue.name}</h3>

                                {venue.description ? (
                                    <p>{venue.description}</p>
                                ) : null}

                                {venue.features && venue.features.length > 0 ? (
                                    <div className="venue-feature-list">
                                        {venue.features.map((feature) => (
                                            <span key={feature}>{feature}</span>
                                        ))}
                                    </div>
                                ) : null}

                                <a href="#contact" className="venue-card-btn">
                                    Enquire Venue
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="venue-partners-cta reveal">
                    <p>
                        Looking for a venue based on your budget, location,
                        guest count, and event type?
                    </p>

                    <a href="#contact" className="btn-outline">
                        Find My Venue
                    </a>
                </div>
            </div>
        </section>
    );
}
