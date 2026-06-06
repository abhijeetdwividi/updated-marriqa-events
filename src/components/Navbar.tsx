"use client";

import { useState } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Services", href: "#services" },
    { label: "Venues", href: "#venues" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-[rgba(212,175,55,0.12)] bg-[rgba(11,11,11,0.72)] px-[6vw] py-5 backdrop-blur-xl">
                <a
                    href="#hero"
                    className="font-serif text-3xl tracking-wide text-[var(--white)]"
                >
                    Marriqa <span className="text-[var(--gold)]">Events</span>
                </a>

                <div className="hidden items-center gap-9 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-xs uppercase tracking-[0.22em] text-[var(--beige-dim)] transition hover:text-[var(--gold)]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden border border-[var(--gold)] px-5 py-3 text-xs uppercase tracking-[0.22em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--black)] lg:inline-flex"
                >
                    Book Consultation
                </a>

                <button
                    onClick={() => setOpen(true)}
                    className="flex flex-col gap-1.5 lg:hidden"
                    aria-label="Open menu"
                >
                    <span className="h-px w-7 bg-[var(--gold)]" />
                    <span className="h-px w-7 bg-[var(--gold)]" />
                    <span className="h-px w-7 bg-[var(--gold)]" />
                </button>
            </nav>

            {open && (
                <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[rgba(11,11,11,0.96)] px-8 text-center backdrop-blur-xl">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute right-7 top-7 font-serif text-4xl text-[var(--gold)]"
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                    <div className="flex flex-col gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="font-serif text-4xl text-[var(--white)]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="btn-primary mt-5"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
