import Link from "next/link";

import DeleteTestimonialButton from "@/components/admin/DeleteTestimonialButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminTestimonialsPage() {
    const supabase = await createClient();

    const { data: testimonials, error } = await supabase
        .from("testimonials")
        .select(
            "id, client_name, event_type, message, rating, is_active, sort_order, created_at",
        )
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Testimonials</span>
                <h1>Testimonials CMS</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Client Stories</span>
                    <h1>Testimonials CMS</h1>
                    <p>
                        Add, edit, hide, show, and delete client testimonials.
                    </p>
                </div>

                <Link
                    href="/admin/testimonials/new"
                    className="admin-primary-link"
                >
                    Add New Testimonial
                </Link>
            </div>

            <div className="admin-table-card">
                {testimonials && testimonials.length > 0 ? (
                    <div className="admin-blog-list">
                        {testimonials.map((testimonial) => (
                            <div
                                className="admin-blog-row"
                                key={testimonial.id}
                            >
                                <div className="admin-blog-thumb admin-testimonial-rating">
                                    <span>{testimonial.rating ?? 5}★</span>
                                </div>

                                <div className="admin-blog-info">
                                    <div className="admin-blog-meta">
                                        <span>
                                            {testimonial.event_type ||
                                                "No Event Type"}
                                        </span>
                                        <span>
                                            {testimonial.is_active
                                                ? "Active"
                                                : "Hidden"}
                                        </span>
                                        <span>
                                            Order {testimonial.sort_order ?? 0}
                                        </span>
                                    </div>

                                    <h3>{testimonial.client_name}</h3>

                                    <p>{testimonial.message}</p>
                                </div>

                                <div className="admin-blog-actions">
                                    <Link
                                        href={`/admin/testimonials/${testimonial.id}/edit`}
                                        className="admin-secondary-link"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteTestimonialButton
                                        testimonialId={testimonial.id}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No testimonials yet</h3>
                        <p>
                            Create your first client testimonial for the Marriqa
                            website.
                        </p>
                        <Link
                            href="/admin/testimonials/new"
                            className="admin-primary-link"
                        >
                            Add First Testimonial
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
