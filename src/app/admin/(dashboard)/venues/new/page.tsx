import Link from "next/link";
import VenueForm from "@/components/admin/VenueForm";

export default function NewVenuePage() {
    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Venue Partners</span>
                    <h1>Add New Venue</h1>
                    <p>Create a new venue partner card for the website.</p>
                </div>

                <Link href="/admin/venues" className="admin-secondary-link">
                    Back to Venues
                </Link>
            </div>

            <VenueForm mode="create" />
        </div>
    );
}
