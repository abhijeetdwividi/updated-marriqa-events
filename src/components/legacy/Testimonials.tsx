import { createClient } from "@/lib/supabase/server";

type Testimonial = {
    id: string;
    client_name: string;
    event_type: string | null;
    message: string;
    rating: number | null;
};

function getStars(rating: number | null) {
    const safeRating = Math.min(Math.max(rating ?? 5, 1), 5);
    return "★".repeat(safeRating);
}

export default async function Testimonials() {
    const supabase = await createClient();

    const { data: testimonials, error } = await supabase
        .from("testimonials")
        .select("id, client_name, event_type, message, rating")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error || !testimonials || testimonials.length === 0) {
        return null;
    }

    const duplicatedTestimonials = [
        ...(testimonials as Testimonial[]),
        ...(testimonials as Testimonial[]),
    ];

    return (
        <section id="testimonials">
            <div className="testi-bg-text">Stories</div>

            <div className="testi-header reveal">
                <span className="section-label">Client Words</span>

                <h2 className="section-title">
                    Experiences That <em>Stay</em>
                </h2>

                <div className="gold-line"></div>
            </div>

            <div className="testi-carousel">
                <div className="testi-track" id="testiTrack">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div
                            className="testi-card dynamic-testi-card"
                            key={`${testimonial.id}-${index}`}
                        >
                            <div className="testi-stars">
                                {getStars(testimonial.rating)}
                            </div>

                            <p>“{testimonial.message}”</p>

                            <div className="testi-client">
                                <h4>{testimonial.client_name}</h4>

                                {testimonial.event_type ? (
                                    <span>{testimonial.event_type}</span>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
