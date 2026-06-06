import SiteInteractions from "@/components/SiteInteractions";

import CursorLoader from "@/components/legacy/CursorLoader";
import Navbar from "@/components/legacy/Navbar";
import Hero from "@/components/legacy/Hero";
import About from "@/components/legacy/About";
import Services from "@/components/legacy/Services";
import Packages from "@/components/legacy/Packages";
import VenuePartners from "@/components/legacy/VenuePartners";
import Gallery from "@/components/legacy/Gallery";
import Testimonials from "@/components/legacy/Testimonials";
import Contact from "@/components/legacy/Contact";
import Instagram from "@/components/legacy/Instagram";
import Footer from "@/components/legacy/Footer";

export default function Home() {
    return (
        <>
            <CursorLoader />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Packages />
            <VenuePartners />
            <Gallery />
            <Testimonials />
            <Contact />
            <Instagram />
            <Footer />

            <SiteInteractions />
        </>
    );
}
