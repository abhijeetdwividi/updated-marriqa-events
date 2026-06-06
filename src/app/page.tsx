import fs from "fs";
import path from "path";
import SiteInteractions from "@/components/SiteInteractions";

function getLegacyHomeHtml() {
    const filePath = path.join(process.cwd(), "src", "legacy", "index.html");
    const html = fs.readFileSync(filePath, "utf8");

    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const bodyHtml = bodyMatch?.[1] ?? "";

    return bodyHtml
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
    const legacyHomeHtml = getLegacyHomeHtml();

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: legacyHomeHtml }} />
            <SiteInteractions />
        </>
    );
}
