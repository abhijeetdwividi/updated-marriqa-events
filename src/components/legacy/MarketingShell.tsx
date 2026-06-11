import type { ReactNode } from "react";

import SiteInteractions from "@/components/SiteInteractions";
import CursorLoader from "@/components/legacy/CursorLoader";
import Navbar from "@/components/legacy/Navbar";
import Footer from "@/components/legacy/Footer";
import FloatingEnquiry from "@/components/legacy/FloatingEnquiry";

type MarketingShellProps = {
    children: ReactNode;
};

export default function MarketingShell({ children }: MarketingShellProps) {
    return (
        <>
            <CursorLoader />
            <Navbar />

            {children}

            <Footer />
            <FloatingEnquiry />
            <SiteInteractions />
        </>
    );
}
