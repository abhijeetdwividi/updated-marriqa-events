import MarketingShell from "@/components/legacy/MarketingShell";
import Hero from "@/components/legacy/Hero";
import HomeIntro from "@/components/legacy/HomeIntro";
import ServicesPreview from "@/components/legacy/ServicesPreview";
import DestinationFinderPreview from "@/components/legacy/DestinationFinderPreview";
import VenuePartners from "@/components/legacy/VenuePartners";
import Gallery from "@/components/legacy/Gallery";
import Testimonials from "@/components/legacy/Testimonials";
import Instagram from "@/components/legacy/Instagram";
import FinalCTA from "@/components/legacy/FinalCTA";

export const dynamic = "force-dynamic";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.marriqaevents.com";

export default function Home() {
    return (
        <MarketingShell>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Marriqa Events",
                        url: siteUrl,
                        logo: `${siteUrl}/images/logonew.jpeg`,
                        image: `${siteUrl}/opengraph-image`,
                        telephone: "+91 82522 16549",
                        email: "marriqaevents@gmail.com",
                        priceRange: "₹₹₹",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Delhi NCR",
                            addressRegion: "Delhi NCR",
                            addressCountry: "IN",
                        },
                        areaServed: [
                            "Delhi NCR",
                            "Uttarakhand",
                            "Rajasthan",
                            "Jim Corbett",
                            "Mussoorie",
                            "Noida",
                            "Pan India",
                        ],
                        sameAs: ["https://www.instagram.com/marriqaevents"],
                        description:
                            "Marriqa Events is a luxury wedding planner and event design company for destination weddings, engagement ceremonies, premium decor, venue experiences, and bespoke celebrations across Delhi NCR, Uttarakhand, Rajasthan, and Pan India.",
                    }),
                }}
            />

            <Hero />
            <HomeIntro />
            <ServicesPreview />
            <DestinationFinderPreview />

            <section className="home-section-short">
                <VenuePartners />
            </section>

            <section className="home-section-short">
                <Gallery />
            </section>

            <Testimonials />

            <FinalCTA
                eyebrow="Start Planning"
                title="Tell us your event date, guest count and preferred city."
                text="We’ll help you with venues, decor, planning scope and a clear direction for your celebration."
                buttonText="Start Enquiry"
                buttonHref="/contact"
            />

            <Instagram />
        </MarketingShell>
    );
}
