import { createClient } from "@/lib/supabase/server";

type GalleryImage = {
    id: string;
    title: string | null;
    category: string | null;
    image_url: string;
    alt_text: string | null;
};

export default async function Gallery() {
    const supabase = await createClient();

    const { data: images, error } = await supabase
        .from("gallery_images")
        .select("id, title, category, image_url, alt_text")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error || !images || images.length === 0) {
        return null;
    }

    const galleryImages = images as GalleryImage[];
    const featuredImage = galleryImages[0];
    const gridImages = galleryImages.slice(1);

    return (
        <>
            <section id="gallery">
                <div className="gallery-header reveal">
                    <span className="section-label">Our Portfolio</span>

                    <h2 className="section-title">
                        Curated <em>Moments</em>
                        <br />
                        of Luxury
                    </h2>

                    <div className="gold-line"></div>

                    <p className="portfolio-reveal-intro">
                        A quiet visual journal of luxury decor, destination
                        celebrations, floral details, and signature Marriqa
                        event experiences.
                    </p>
                </div>

                <div className="portfolio-wall" id="galleryGrid">
                    {featuredImage ? (
                        <div className="gallery-item portfolio-wall-featured reveal">
                            <img
                                src={featuredImage.image_url}
                                alt={
                                    featuredImage.alt_text ||
                                    featuredImage.title ||
                                    "Marriqa Events Portfolio"
                                }
                                loading="lazy"
                            />

                            <div className="portfolio-wall-overlay">
                                <span>Featured Moment</span>
                                <h3>
                                    {featuredImage.title ||
                                        featuredImage.category ||
                                        "Luxury Celebration"}
                                </h3>
                            </div>
                        </div>
                    ) : null}

                    <div className="portfolio-wall-grid">
                        {gridImages.map((image, index) => (
                            <div
                                className="gallery-item portfolio-wall-card reveal"
                                style={{
                                    transitionDelay: `${index * 0.04}s`,
                                }}
                                key={image.id}
                            >
                                <img
                                    src={image.image_url}
                                    alt={
                                        image.alt_text ||
                                        image.title ||
                                        "Marriqa Events Portfolio"
                                    }
                                    loading="lazy"
                                />

                                <div className="portfolio-wall-overlay">
                                    <span>
                                        {image.category ||
                                            `Portfolio ${index + 1}`}
                                    </span>

                                    <h3>
                                        {image.title ||
                                            image.category ||
                                            "Marriqa Events"}
                                    </h3>

                                    <small>View Moment</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div id="lightbox">
                <button id="lb-close">✕</button>
                <img id="lb-img" alt="" />
            </div>
        </>
    );
}
