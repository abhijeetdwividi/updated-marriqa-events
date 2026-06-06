import fs from "fs";
import path from "path";

import SiteInteractions from "@/components/SiteInteractions";
import CursorLoader from "@/components/legacy/CursorLoader";
import Navbar from "@/components/legacy/Navbar";
import Hero from "@/components/legacy/Hero";
import About from "@/components/legacy/About";
import Services from "@/components/legacy/Services";

function getLegacySectionsAfterServices() {
    const filePath = path.join(process.cwd(), "src", "legacy", "index.html");
    const html = fs.readFileSync(filePath, "utf8");

    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyHtml = bodyMatch?.[1] ?? "";

    const galleryStartIndex = bodyHtml.indexOf("<!-- GALLERY -->");

    const remainingHtml =
        galleryStartIndex >= 0 ? bodyHtml.slice(galleryStartIndex) : "";

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
    const legacySectionsAfterServices = getLegacySectionsAfterServices();

    return (
        <>
            <CursorLoader />
            <Navbar />
            <Hero />
            <About />
            <Services />

            <div
                dangerouslySetInnerHTML={{
                    __html: legacySectionsAfterServices,
                }}
            />

            <SiteInteractions />
        </>
    );
}
