import SiteInteractions from "@/components/SiteInteractions";

import CursorLoader from "@/components/legacy/CursorLoader";
import Navbar from "@/components/legacy/Navbar";
import Hero from "@/components/legacy/Hero";
import About from "@/components/legacy/About";
import Founders from "@/components/legacy/Founders";
import Services from "@/components/legacy/Services";
import Packages from "@/components/legacy/Packages";
import VenuePartners from "@/components/legacy/VenuePartners";
import Gallery from "@/components/legacy/Gallery";
import Testimonials from "@/components/legacy/Testimonials";
import BlogSection from "@/components/legacy/BlogSection";
import Contact from "@/components/legacy/Contact";
import Instagram from "@/components/legacy/Instagram";
import Footer from "@/components/legacy/Footer";

export const dynamic = "force-dynamic";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.marriqaevents.com";

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Marriqa Events",
                        url: siteUrl,
                        logo: `${siteUrl}/images/logonew.jpeg`,
                        image: `${siteUrl}/images/destination.png`,
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

            <CursorLoader />
            <Navbar />
            <Hero />
            <About />
            <Founders />
            <Services />
            <Packages />
            <VenuePartners />
            <Gallery />
            <Testimonials />
            <BlogSection />
            <Contact />
            <Instagram />
            <Footer />

            <SiteInteractions />
        </>
    );
}
