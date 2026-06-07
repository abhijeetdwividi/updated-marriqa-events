"use client";

import { useEffect } from "react";

type Testimonial = {
    name: string;
    event: string;
    text: string;
    initial: string;
};

export default function SiteInteractions() {
    useEffect(() => {
        // CUSTOM CURSOR
        const cursor = document.getElementById("cursor");
        const ring = document.getElementById("cursor-ring");

        const handleMouseMove = (e: MouseEvent) => {
            if (!cursor || !ring) return;

            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            window.setTimeout(() => {
                ring.style.left = `${e.clientX}px`;
                ring.style.top = `${e.clientY}px`;
            }, 80);
        };

        document.addEventListener("mousemove", handleMouseMove);

        const hoverElements = document.querySelectorAll(
            "a, button, .service-card, .gallery-item",
        );

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                if (!cursor || !ring) return;
                cursor.style.width = "20px";
                cursor.style.height = "20px";
                ring.style.width = "60px";
                ring.style.height = "60px";
            });

            el.addEventListener("mouseleave", () => {
                if (!cursor || !ring) return;
                cursor.style.width = "12px";
                cursor.style.height = "12px";
                ring.style.width = "40px";
                ring.style.height = "40px";
            });
        });

        // LOADER
        const loader = document.getElementById("loader");
        const loaderTimer = window.setTimeout(() => {
            loader?.classList.add("hidden");
        }, 2200);

        // NAVBAR SCROLL
        const navbar = document.getElementById("navbar");

        const handleScrollNavbar = () => {
            navbar?.classList.toggle("scrolled", window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScrollNavbar);
        handleScrollNavbar();

        // MOBILE MENU
        const hamburger = document.getElementById("hamburger");
        const mobileMenu = document.getElementById("mobileMenu");
        const menuClose = document.getElementById("menuClose");

        const openMenu = () => mobileMenu?.classList.add("open");
        const closeMenu = () => mobileMenu?.classList.remove("open");

        hamburger?.addEventListener("click", openMenu);
        menuClose?.addEventListener("click", closeMenu);

        document.querySelectorAll(".mobile-link").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        // PARTICLES
        const particlesContainer = document.getElementById("particles");

        if (particlesContainer) {
            particlesContainer.innerHTML = "";

            for (let i = 0; i < 30; i++) {
                const p = document.createElement("div");
                p.classList.add("particle");

                const size = Math.random() * 4 + 1;

                p.style.cssText = `
                    width:${size}px;
                    height:${size}px;
                    left:${Math.random() * 100}%;
                    bottom:${Math.random() * 20}%;
                    animation-duration:${Math.random() * 15 + 10}s;
                    animation-delay:${Math.random() * 10}s;
                `;

                particlesContainer.appendChild(p);
            }
        }

        // SCROLL REVEAL
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            },
        );

        document
            .querySelectorAll(".reveal, .reveal-left, .reveal-right")
            .forEach((el) => revealObserver.observe(el));

        // GALLERY LIGHTBOX
        const lightbox = document.getElementById("lightbox");
        const lbImg = document.getElementById(
            "lb-img",
        ) as HTMLImageElement | null;
        const lbClose = document.getElementById("lb-close");

        document.querySelectorAll(".gallery-item img").forEach((img) => {
            img.addEventListener("click", () => {
                const image = img as HTMLImageElement;
                if (!lbImg || !lightbox) return;

                lbImg.src = image.src.replace("w=600", "w=1200");
                lightbox.classList.add("open");
            });
        });

        lbClose?.addEventListener("click", () => {
            lightbox?.classList.remove("open");
        });

        lightbox?.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("open");
            }
        });

        // TESTIMONIALS FALLBACK
        const testimonials: Testimonial[] = [
            {
                name: "Priya & Arjun Sharma",
                event: "Grand Wedding · Delhi",
                text: "Marriqa Events turned our dream into reality. Every detail was beyond perfect — the decor, the flowers, the ambiance. Our guests still talk about it months later.",
                initial: "P",
            },
            {
                name: "Sneha Kapoor",
                event: "Engagement Ceremony · Noida",
                text: "I was in tears when I saw what they created. It was more beautiful than anything I had ever imagined. Pure magic — truly luxury at its finest.",
                initial: "S",
            },
            {
                name: "Rahul & Divya Mehta",
                event: "Destination Wedding · Jaipur",
                text: "The palace wedding Marriqa curated for us was nothing short of cinematic. Every single element was thoughtfully placed. Absolutely world-class.",
                initial: "R",
            },
            {
                name: "Ananya Verma",
                event: "Birthday Gala · Gurgaon",
                text: "My 30th birthday felt like an editorial shoot. The lighting, the table settings, the floral art — Marriqa elevated everything to extraordinary.",
                initial: "A",
            },
            {
                name: "Vikram & Isha Bhatia",
                event: "Wedding · Mussoorie",
                text: "From the first consultation to the final farewell, the Marriqa team was flawless. They handled everything with grace, warmth, and impeccable taste.",
                initial: "V",
            },
            {
                name: "Nisha Agarwal",
                event: "Corporate Gala · Delhi",
                text: "Our annual gala was elevated to a completely new level. The attention to brand aesthetics and luxury experience was outstanding. Highly recommended.",
                initial: "N",
            },
        ];

        const track = document.getElementById("testiTrack");

        if (track && track.children.length === 0) {
            const renderTestimonial = (t: Testimonial) => `
                <div class="testi-card">
                    <div class="testi-quote">"</div>
                    <p class="testi-text">${t.text}</p>
                    <div class="testi-stars">★ ★ ★ ★ ★</div>
                    <div class="testi-author">
                        <div class="testi-avatar">${t.initial}</div>
                        <div>
                            <div class="testi-name">${t.name}</div>
                            <div class="testi-event">${t.event}</div>
                        </div>
                    </div>
                </div>
            `;

            [...testimonials, ...testimonials].forEach((testimonial) => {
                track.innerHTML += renderTestimonial(testimonial);
            });
        }

        // OLD FORM SUBMIT FALLBACK
        // This only works for old Formspree form.
        // Supabase contact form is handled inside Contact.tsx.
        const form = document.getElementById(
            "bookingForm",
        ) as HTMLFormElement | null;

        const handleSubmit = async (e: SubmitEvent) => {
            e.preventDefault();

            if (!form) return;

            const btn = form.querySelector(
                "button[type=submit]",
            ) as HTMLButtonElement | null;

            if (btn) {
                btn.textContent = "Sending...";
                btn.style.opacity = "0.7";
            }

            try {
                const res = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (res.ok) {
                    form.reset();

                    const success = document.getElementById("formSuccess");
                    if (success) success.style.display = "block";

                    if (btn) btn.textContent = "Sent ✓";
                } else {
                    if (btn) {
                        btn.textContent = "Send Enquiry →";
                        btn.style.opacity = "1";
                    }

                    alert(
                        "There was an issue. Please contact us directly on WhatsApp.",
                    );
                }
            } catch {
                if (btn) {
                    btn.textContent = "Send Enquiry →";
                    btn.style.opacity = "1";
                }

                alert("Please contact us directly on WhatsApp or email.");
            }
        };

        if (form && !form.dataset.supabaseForm) {
            form.addEventListener("submit", handleSubmit);
        }

        // PARALLAX HERO
        const handleHeroParallax = () => {
            const scrolled = window.scrollY;
            const heroContent = document.querySelector(
                ".hero-content",
            ) as HTMLElement | null;

            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
                heroContent.style.opacity = `${1 - scrolled / (window.innerHeight * 0.8)}`;
            }
        };

        document.addEventListener("scroll", handleHeroParallax);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScrollNavbar);
            document.removeEventListener("scroll", handleHeroParallax);

            hamburger?.removeEventListener("click", openMenu);
            menuClose?.removeEventListener("click", closeMenu);

            if (form && !form.dataset.supabaseForm) {
                form.removeEventListener("submit", handleSubmit);
            }

            window.clearTimeout(loaderTimer);
            revealObserver.disconnect();
        };
    }, []);

    return null;
}
