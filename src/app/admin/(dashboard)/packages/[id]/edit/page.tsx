import Link from "next/link";
import { notFound } from "next/navigation";

import PackageForm from "@/components/admin/PackageForm";
import { createClient } from "@/lib/supabase/server";

type EditPackagePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditPackagePage({
    params,
}: EditPackagePageProps) {
    const { id } = await params;

    const supabase = await createClient();

    const { data: packageItem, error } = await supabase
        .from("packages")
        .select(
            "id, title, tag, price, description, inclusions, is_active, sort_order",
        )
        .eq("id", id)
        .single();

    if (error || !packageItem) {
        notFound();
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Packages</span>
                    <h1>Edit Package</h1>
                    <p>
                        Update package title, pricing, inclusions, and
                        visibility.
                    </p>
                </div>

                <Link href="/admin/packages" className="admin-secondary-link">
                    Back to Packages
                </Link>
            </div>

            <PackageForm mode="edit" initialData={packageItem} />
        </div>
    );
}
