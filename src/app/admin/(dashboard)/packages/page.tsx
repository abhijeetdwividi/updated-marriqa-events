import Link from "next/link";

import DeletePackageButton from "@/components/admin/DeletePackageButton";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPackagesPage() {
    const supabase = await createClient();

    const { data: packages, error } = await supabase
        .from("packages")
        .select("id, title, tag, price, is_active, sort_order, created_at")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-page-header">
                <span className="admin-kicker">Packages</span>
                <h1>Packages CMS</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="admin-list-header">
                <div>
                    <span className="admin-kicker">Packages</span>
                    <h1>Packages CMS</h1>
                    <p>Add, edit, hide, show, and delete website packages.</p>
                </div>

                <Link href="/admin/packages/new" className="admin-primary-link">
                    Add New Package
                </Link>
            </div>

            <div className="admin-table-card">
                {packages && packages.length > 0 ? (
                    <div className="admin-blog-list">
                        {packages.map((item) => (
                            <div className="admin-blog-row" key={item.id}>
                                <div className="admin-blog-thumb admin-package-index">
                                    <span>{item.sort_order ?? 0}</span>
                                </div>

                                <div className="admin-blog-info">
                                    <div className="admin-blog-meta">
                                        <span>{item.tag || "No Tag"}</span>
                                        <span>{item.price || "No Price"}</span>
                                        <span>
                                            {item.is_active
                                                ? "Active"
                                                : "Hidden"}
                                        </span>
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>
                                        Package display order:{" "}
                                        {item.sort_order ?? 0}
                                    </p>
                                </div>

                                <div className="admin-blog-actions">
                                    <Link
                                        href={`/admin/packages/${item.id}/edit`}
                                        className="admin-secondary-link"
                                    >
                                        Edit
                                    </Link>

                                    <DeletePackageButton packageId={item.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="admin-empty-state">
                        <h3>No packages yet</h3>
                        <p>
                            Create your first package for the Marriqa website.
                        </p>
                        <Link
                            href="/admin/packages/new"
                            className="admin-primary-link"
                        >
                            Add First Package
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
