import DeleteEnquiryButton from "@/components/admin/DeleteEnquiryButton";
import EnquiryStatusSelect from "@/components/admin/EnquiryStatusSelect";
import { createClient } from "@/lib/supabase/server";

type Enquiry = {
    id: string;
    full_name: string;
    phone: string;
    email: string;
    event_type: string;
    event_date: string | null;
    budget: string | null;
    location: string | null;
    guest_count: string | null;
    message: string | null;
    status: string;
    created_at: string;
};

export default async function AdminEnquiriesPage() {
    const supabase = await createClient();

    const { data: enquiries, error } = await supabase
        .from("enquiries")
        .select(
            "id, full_name, phone, email, event_type, event_date, budget, location, guest_count, message, status, created_at",
        )
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Enquiries</span>
                <h1>Lead Inbox</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Client Leads</span>
                    <h1>Lead Inbox</h1>
                    <p>
                        View website enquiries, track lead status, and follow up
                        with potential clients.
                    </p>
                </div>
            </div>

            <div className="admin-table-card">
                {enquiries && enquiries.length > 0 ? (
                    <div className="admin-enquiry-list">
                        {(enquiries as Enquiry[]).map((enquiry) => (
                            <div
                                className="admin-enquiry-card"
                                key={enquiry.id}
                            >
                                <div className="admin-enquiry-top">
                                    <div>
                                        <div className="admin-blog-meta">
                                            <span>{enquiry.event_type}</span>
                                            <span>
                                                {enquiry.budget || "No Budget"}
                                            </span>
                                            <span>
                                                {new Date(
                                                    enquiry.created_at,
                                                ).toLocaleDateString("en-IN", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>

                                        <h3>{enquiry.full_name}</h3>

                                        <p className="admin-enquiry-contact">
                                            <a href={`tel:${enquiry.phone}`}>
                                                {enquiry.phone}
                                            </a>
                                            <span>•</span>
                                            <a href={`mailto:${enquiry.email}`}>
                                                {enquiry.email}
                                            </a>
                                        </p>
                                    </div>

                                    <div className="admin-enquiry-actions">
                                        <EnquiryStatusSelect
                                            enquiryId={enquiry.id}
                                            currentStatus={enquiry.status}
                                        />

                                        <DeleteEnquiryButton
                                            enquiryId={enquiry.id}
                                        />
                                    </div>
                                </div>

                                <div className="admin-enquiry-details">
                                    <div>
                                        <span>Event Date</span>
                                        <strong>
                                            {enquiry.event_date || "Not shared"}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Location</span>
                                        <strong>
                                            {enquiry.location || "Not shared"}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Guest Count</span>
                                        <strong>
                                            {enquiry.guest_count ||
                                                "Not shared"}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>Status</span>
                                        <strong>{enquiry.status}</strong>
                                    </div>
                                </div>

                                {enquiry.message ? (
                                    <div className="admin-enquiry-message">
                                        <span>Client Message</span>
                                        <p>{enquiry.message}</p>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No enquiries yet</h3>
                        <p>New website enquiries will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
