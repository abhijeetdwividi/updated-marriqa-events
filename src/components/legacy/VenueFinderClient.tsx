"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

type Venue = {
    id: string;
    name: string;
    region: string | null;
    location: string | null;
    description: string | null;
    image_url: string | null;
    venue_type: string | null;
    min_budget: number | null;
    max_budget: number | null;
    min_guests: number | null;
    max_guests: number | null;
    room_count: number | null;
    lawn_capacity: number | null;
    banquet_capacity: number | null;
    best_for: string[] | null;
    finder_highlights: string[] | null;
    package_note: string | null;
};

type VenueWithScore = Venue & {
    matchScore: number;
    matchPercent: number;
    matchReasons: string[];
};

type VenueFinderClientProps = {
    venues: Venue[];
};

type FinderForm = {
    location: string;
    eventType: string;
    venueType: string;
    guests: string;
    budget: string;
    rooms: string;
};

const initialForm: FinderForm = {
    location: "",
    eventType: "",
    venueType: "",
    guests: "",
    budget: "",
    rooms: "",
};

function normalize(value: string | null | undefined) {
    return (value || "").toLowerCase().trim();
}

function formatBudget(value: number | null) {
    if (!value) return "On request";

    if (value >= 10000000) {
        return `₹${(value / 10000000).toFixed(1)}Cr`;
    }

    return `₹${Math.round(value / 100000)}L`;
}

function getVenueScore(venue: Venue, form: FinderForm) {
    let score = 0;
    const reasons: string[] = [];

    const guests = Number(form.guests);
    const budgetInRupees = Number(form.budget) * 100000;
    const rooms = Number(form.rooms);

    const venueLocation = `${venue.region || ""} ${venue.location || ""}`;
    const venueBestFor = (venue.best_for || []).join(" ");
    const venueType = venue.venue_type || "";

    if (
        form.location &&
        normalize(venueLocation).includes(normalize(form.location))
    ) {
        score += 30;
        reasons.push("Location match");
    }

    if (
        form.venueType &&
        normalize(venueType).includes(normalize(form.venueType))
    ) {
        score += 12;
        reasons.push("Venue type fit");
    }

    if (
        form.eventType &&
        normalize(venueBestFor).includes(normalize(form.eventType))
    ) {
        score += 14;
        reasons.push("Event type suitable");
    }

    if (guests && venue.min_guests && venue.max_guests) {
        if (guests >= venue.min_guests && guests <= venue.max_guests) {
            score += 28;
            reasons.push("Guest capacity fit");
        } else if (guests <= venue.max_guests + 50) {
            score += 10;
            reasons.push("Capacity may be manageable");
        }
    }

    if (budgetInRupees && venue.min_budget && venue.max_budget) {
        if (
            budgetInRupees >= venue.min_budget &&
            budgetInRupees <= venue.max_budget
        ) {
            score += 30;
            reasons.push("Budget range fit");
        } else if (budgetInRupees >= venue.min_budget * 0.85) {
            score += 12;
            reasons.push("Close to budget");
        }
    }

    if (rooms && venue.room_count) {
        if (rooms <= venue.room_count) {
            score += 16;
            reasons.push("Room count fit");
        } else if (rooms <= venue.room_count + 10) {
            score += 7;
            reasons.push("Nearby rooms may help");
        }
    }

    const matchPercent = Math.min(
        98,
        Math.max(35, Math.round((score / 130) * 100)),
    );

    return { score, matchPercent, reasons };
}

function getWhatsAppUrl(form: FinderForm, venues: VenueWithScore[]) {
    const venueNames = venues.map((venue) => venue.name).join(", ");

    const message = encodeURIComponent(
        `Hello Marriqa Events, I used the Venue Finder and want details.\n\nLocation: ${form.location || "Not selected"}\nEvent Type: ${form.eventType || "Not selected"}\nVenue Type: ${form.venueType || "Not selected"}\nGuests: ${form.guests || "Not shared"}\nBudget: ${form.budget ? `₹${form.budget}L` : "Not shared"}\nRooms: ${form.rooms || "Not shared"}\n\nSuggested Venues: ${venueNames || "Please suggest options"}`,
    );

    return `https://wa.me/918252216549?text=${message}`;
}

export default function VenueFinderClient({ venues }: VenueFinderClientProps) {
    const [form, setForm] = useState<FinderForm>(initialForm);
    const [hasSearched, setHasSearched] = useState(false);

    const results = useMemo(() => {
        return venues
            .map((venue) => {
                const match = getVenueScore(venue, form);

                return {
                    ...venue,
                    matchScore: match.score,
                    matchPercent: match.matchPercent,
                    matchReasons: match.reasons,
                };
            })
            .filter((venue) => venue.matchScore > 0)
            .sort((a, b) => b.matchScore - a.matchScore)
            .slice(0, 3);
    }, [venues, form]);

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setHasSearched(true);
    }

    function handleReset() {
        setForm(initialForm);
        setHasSearched(false);
    }

    return (
        <div className="venue-finder-box venue-finder-box-refined">
            <form
                className="venue-finder-form venue-finder-form-refined"
                onSubmit={handleSubmit}
            >
                <div className="venue-finder-field">
                    <label>Preferred Location</label>
                    <select
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                    >
                        <option value="">Select Location</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Noida">Noida</option>
                        <option value="Jim Corbett">Jim Corbett</option>
                        <option value="Mussoorie">Mussoorie</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Rajasthan">Rajasthan</option>
                    </select>
                </div>

                <div className="venue-finder-field">
                    <label>Event Type</label>
                    <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                    >
                        <option value="">Select Event</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Private Celebration">
                            Private Celebration
                        </option>
                    </select>
                </div>

                <div className="venue-finder-field">
                    <label>Venue Type</label>
                    <select
                        name="venueType"
                        value={form.venueType}
                        onChange={handleChange}
                    >
                        <option value="">Any Type</option>
                        <option value="Resort">Resort</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Farmhouse">Farmhouse</option>
                        <option value="Banquet">Banquet</option>
                        <option value="Heritage">Heritage</option>
                    </select>
                </div>

                <div className="venue-finder-field">
                    <label>Guest Count</label>
                    <input
                        type="number"
                        name="guests"
                        placeholder="Example: 150"
                        value={form.guests}
                        onChange={handleChange}
                    />
                </div>

                <div className="venue-finder-field">
                    <label>Budget in Lakhs</label>
                    <input
                        type="number"
                        name="budget"
                        placeholder="Example: 35"
                        value={form.budget}
                        onChange={handleChange}
                    />
                </div>

                <div className="venue-finder-field">
                    <label>Rooms Required</label>
                    <input
                        type="number"
                        name="rooms"
                        placeholder="Example: 40"
                        value={form.rooms}
                        onChange={handleChange}
                    />
                </div>

                <div className="venue-finder-actions">
                    <button type="submit" className="venue-finder-submit">
                        Find Best Venues
                    </button>

                    <button
                        type="button"
                        className="venue-finder-reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div className="venue-finder-results venue-finder-results-refined">
                {!hasSearched ? (
                    <div className="venue-finder-empty venue-finder-empty-refined">
                        <span>Venue Intelligence</span>
                        <h3>Find venues that fit your event.</h3>
                        <p>
                            Add your location, guest count, budget and room
                            requirement. We’ll shortlist suitable partner venues
                            from Marriqa’s curated network.
                        </p>
                    </div>
                ) : results.length > 0 ? (
                    <>
                        <div className="venue-finder-result-header venue-finder-result-header-refined">
                            <div>
                                <span>Best Matches</span>
                                <h3>Recommended Venues</h3>
                            </div>

                            <a
                                href={getWhatsAppUrl(form, results)}
                                target="_blank"
                                rel="noreferrer"
                                className="venue-finder-whatsapp venue-finder-whatsapp-top"
                            >
                                Get Detailed Quote
                            </a>
                        </div>

                        <div className="venue-finder-result-grid">
                            {results.map((venue, index) => (
                                <article
                                    className="venue-finder-premium-card"
                                    key={venue.id}
                                >
                                    <div className="venue-finder-premium-image">
                                        {venue.image_url ? (
                                            <img
                                                src={venue.image_url}
                                                alt={venue.name}
                                            />
                                        ) : null}

                                        <span>
                                            {index === 0
                                                ? "Best Match"
                                                : `Option ${index + 1}`}
                                        </span>

                                        <strong>{venue.matchPercent}%</strong>
                                    </div>

                                    <div className="venue-finder-premium-content">
                                        <p className="venue-finder-location">
                                            {venue.location ||
                                                venue.region ||
                                                "Location on request"}
                                        </p>

                                        <h4>{venue.name}</h4>

                                        <div className="venue-finder-premium-stats">
                                            <div>
                                                <span>Rooms</span>
                                                <strong>
                                                    {venue.room_count ||
                                                        "Request"}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Guests</span>
                                                <strong>
                                                    {venue.min_guests &&
                                                    venue.max_guests
                                                        ? `${venue.min_guests}-${venue.max_guests}`
                                                        : "Request"}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Budget</span>
                                                <strong>
                                                    {formatBudget(
                                                        venue.min_budget,
                                                    )}{" "}
                                                    -{" "}
                                                    {formatBudget(
                                                        venue.max_budget,
                                                    )}
                                                </strong>
                                            </div>
                                        </div>

                                        {venue.package_note ? (
                                            <p className="venue-finder-note">
                                                {venue.package_note}
                                            </p>
                                        ) : null}

                                        <div className="venue-finder-reasons">
                                            {[
                                                ...venue.matchReasons,
                                                ...(venue.finder_highlights ||
                                                    []),
                                            ]
                                                .slice(0, 4)
                                                .map((reason) => (
                                                    <span key={reason}>
                                                        {reason}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="venue-finder-empty venue-finder-empty-refined">
                        <span>No Exact Match</span>
                        <h3>We’ll curate options manually.</h3>
                        <p>
                            Your requirement may need a custom venue shortlist.
                            Share your details and our team will suggest the
                            best available options.
                        </p>

                        <a
                            href={getWhatsAppUrl(form, [])}
                            target="_blank"
                            rel="noreferrer"
                            className="venue-finder-whatsapp"
                        >
                            Ask Marriqa Team
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
