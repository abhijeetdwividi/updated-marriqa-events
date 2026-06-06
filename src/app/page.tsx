import fs from "fs";
import path from "path";

import SiteInteractions from "@/components/SiteInteractions";
import CursorLoader from "@/components/legacy/CursorLoader";
import Navbar from "@/components/legacy/Navbar";
import Hero from "@/components/legacy/Hero";
import About from "@/components/legacy/About";
import Services from "@/components/legacy/Services";
import Gallery from "@/components/legacy/Gallery";
import Testimonials from "@/components/legacy/Testimonials";
import Contact from "@/components/legacy/Contact";

function getLegacySectionsAfterContact() {
    const filePath = path.join(process.cwd(), "src", "legacy", "index.html");
    const html = fs.readFileSync(filePath, "utf8");

    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyHtml = bodyMatch?.[1] ?? "";

    const instagramStartIndex = bodyHtml.indexOf("<!-- INSTAGRAM -->");

    const remainingHtml =
        instagramStartIndex >= 0 ? bodyHtml.slice(instagramStartIndex) : "";

    return remainingHtml
        .replace(
            /<script\b[^>]*src=["'](?:\.\/)?script\.js["'][^>]*>\s*<\/script>/gi,
            "",
        )
        .replaceAll('src="./images/', 'src="/images/')
        .replaceAll("src='./images/", "src='/images/")
        .replaceAll('href="./images/', 'href="/images/')
        .replaceAll("href='./images/", "href='/images/")
        .replaceAll("url(./images/", "url(/images/");
}

export default function Home() {
    const legacySectionsAfterContact = getLegacySectionsAfterContact();

    return (
        <>
            <CursorLoader />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />

            <div
                dangerouslySetInnerHTML={{ __html: legacySectionsAfterContact }}
            />

            <SiteInteractions />
        </>
    );
}
