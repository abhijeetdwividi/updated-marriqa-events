import Link from "next/link";
import PackageForm from "@/components/admin/PackageForm";

export default function NewPackagePage() {
    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Packages</span>
                    <h1>Add New Package</h1>
                    <p>Create a new website package card.</p>
                </div>

                <Link href="/admin/packages" className="admin-secondary-link">
                    Back to Packages
                </Link>
            </div>

            <PackageForm mode="create" />
        </div>
    );
}
