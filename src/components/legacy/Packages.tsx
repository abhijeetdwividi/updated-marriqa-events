import { createClient } from "@/lib/supabase/server";

type PackageItem = {
    id: string;
    title: string;
    tag: string | null;
    price: string | null;
    description: string | null;
    inclusions: string[] | null;
};

export default async function Packages() {
    const supabase = await createClient();

    const { data: packages, error } = await supabase
        .from("packages")
        .select("id, title, tag, price, description, inclusions")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error || !packages || packages.length === 0) {
        return null;
    }

    return (
        <section id="packages">
            <div className="packages-inner">
                <div className="packages-header reveal">
                    <span className="section-label">Curated Celebrations</span>

                    <h2 className="section-title">
                        Most Popular <em>Packages</em>
                    </h2>

                    <div className="gold-line"></div>

                    <p>
                        Thoughtfully designed event experiences for engagements,
                        destination weddings, anniversary celebrations, decor
                        styling, and complete wedding planning.
                    </p>
                </div>

                <div className="packages-grid">
                    {(packages as PackageItem[]).map((item, index) => (
                        <article
                            className="package-card reveal"
                            style={{
                                transitionDelay: `${0.1 + index * 0.08}s`,
                            }}
                            key={item.id}
                        >
                            {item.tag ? (
                                <span className="package-tag">{item.tag}</span>
                            ) : null}

                            <h3>{item.title}</h3>

                            {item.price ? (
                                <div className="package-price">
                                    {item.price}
                                </div>
                            ) : null}

                            {item.description ? (
                                <p>{item.description}</p>
                            ) : null}

                            {item.inclusions && item.inclusions.length > 0 ? (
                                <ul>
                                    {item.inclusions
                                        .slice(0, 6)
                                        .map((inclusion) => (
                                            <li key={inclusion}>{inclusion}</li>
                                        ))}
                                </ul>
                            ) : null}

                            <a href="#contact" className="package-card-btn">
                                Enquire Package
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
