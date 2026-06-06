"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
};

export default function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentElement = ref.current;

        if (!currentElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(currentElement);
                }
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -80px 0px",
            },
        );

        observer.observe(currentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal-item reveal-${direction} ${
                visible ? "reveal-visible" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}
