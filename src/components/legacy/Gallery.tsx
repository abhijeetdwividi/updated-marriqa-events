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
                </div>

                <div className="gallery-grid" id="galleryGrid">
                    {(images as GalleryImage[]).map((image, index) => (
                        <div
                            className="gallery-item reveal"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                            key={image.id}
                        >
                            <img
                                src={image.image_url}
                                alt={
                                    image.alt_text ||
                                    image.title ||
                                    "Marriqa Events Gallery"
                                }
                                loading="lazy"
                            />

                            <div className="g-overlay">
                                <span className="g-label">
                                    {image.title ||
                                        image.category ||
                                        "Marriqa Events"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div id="lightbox">
                <button id="lb-close">✕</button>
                <img id="lb-img" alt="" />
            </div>
        </>
    );
}
