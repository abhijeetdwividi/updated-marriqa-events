import Link from "next/link";
import { notFound } from "next/navigation";

import TestimonialForm from "@/components/admin/TestimonialForm";
import { createClient } from "@/lib/supabase/server";

type EditTestimonialPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditTestimonialPage({
    params,
}: EditTestimonialPageProps) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: testimonial, error } = await supabase
        .from("testimonials")
        .select(
            "id, client_name, event_type, message, rating, is_active, sort_order",
        )
        .eq("id", id)
        .single();

    if (error || !testimonial) {
        notFound();
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Testimonials</span>
                    <h1>Edit Testimonial</h1>
                    <p>Update client name, message, rating, and visibility.</p>
                </div>

                <Link
                    href="/admin/testimonials"
                    className="admin-secondary-link"
                >
                    Back to Testimonials
                </Link>
            </div>

            <TestimonialForm mode="edit" initialData={testimonial} />
        </div>
    );
}
