import Link from "next/link";
import TestimonialForm from "@/components/admin/TestimonialForm";

export default function NewTestimonialPage() {
    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Testimonials</span>
                    <h1>Add New Testimonial</h1>
                    <p>Create a new client testimonial for the website.</p>
                </div>

                <Link
                    href="/admin/testimonials"
                    className="admin-secondary-link"
                >
                    Back to Testimonials
                </Link>
            </div>

            <TestimonialForm mode="create" />
        </div>
    );
}
