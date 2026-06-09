"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type FloatingForm = {
    fullName: string;
    phone: string;
    email: string;
    eventType: string;
    eventDate: string;
    budget: string;
    location: string;
    guestCount: string;
    message: string;
};

const initialForm: FloatingForm = {
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    budget: "",
    location: "",
    guestCount: "",
    message: "",
};

export default function FloatingEnquiry() {
    const supabase = useMemo(() => createClient(), []);

    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState<FloatingForm>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    function handleChange(
        event: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function getWhatsAppUrl() {
        const message = encodeURIComponent(
            `Hello Marriqa Events, I want to enquire about an event.\n\nName: ${
                form.fullName || "Not shared"
            }\nPhone: ${form.phone || "Not shared"}\nEmail: ${
                form.email || "Not shared"
            }\nEvent Type: ${
                form.eventType || "Not selected"
            }\nEvent Date: ${form.eventDate || "Not shared"}\nBudget: ${
                form.budget || "Not shared"
            }\nLocation: ${form.location || "Not shared"}\nGuest Count: ${
                form.guestCount || "Not shared"
            }\nMessage: ${form.message || "Not shared"}`,
        );

        return `https://wa.me/918252216549?text=${message}`;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            if (!form.fullName.trim()) {
                throw new Error("Please enter your name.");
            }

            if (!form.phone.trim()) {
                throw new Error("Please enter your phone number.");
            }

            const { error } = await supabase.from("enquiries").insert({
                full_name: form.fullName.trim(),
                phone: form.phone.trim(),
                email: form.email.trim() || null,
                event_type: form.eventType.trim() || "General Enquiry",
                event_date: form.eventDate || null,
                budget: form.budget.trim() || null,
                location: form.location.trim() || null,
                guest_count: form.guestCount.trim() || null,
                message: form.message.trim() || null,
                status: "New",
            });

            if (error) {
                throw new Error(error.message);
            }

            setForm(initialForm);
            setSuccessMessage(
                "Thank you. Your enquiry has been received. Our team will connect with you shortly.",
            );
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.",
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            {!isOpen ? (
                <button
                    type="button"
                    className="floating-enquiry-button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open enquiry form"
                >
                    <span className="floating-enquiry-dot"></span>
                    <span>Enquire Now</span>
                </button>
            ) : null}

            {isOpen ? (
                <div className="floating-enquiry-modal">
                    <button
                        type="button"
                        className="floating-enquiry-backdrop"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close enquiry form"
                    />

                    <div
                        className="floating-enquiry-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Event enquiry form"
                    >
                        <button
                            type="button"
                            className="floating-enquiry-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="floating-enquiry-header">
                            <span>Marriqa Events</span>
                            <h3>Start Your Event Enquiry</h3>
                            <p>
                                Share a few details and our team will help you
                                with venues, decor, planning and complete event
                                execution.
                            </p>
                        </div>

                        <form
                            className="floating-enquiry-form"
                            onSubmit={handleSubmit}
                        >
                            <label>
                                <span>Name *</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </label>

                            <label>
                                <span>Phone *</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91..."
                                    required
                                />
                            </label>

                            <label>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                />
                            </label>

                            <label>
                                <span>Event Type</span>
                                <select
                                    name="eventType"
                                    value={form.eventType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select event type</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Engagement">
                                        Engagement
                                    </option>
                                    <option value="Anniversary">
                                        Anniversary
                                    </option>
                                    <option value="Corporate Event">
                                        Corporate Event
                                    </option>
                                    <option value="Private Celebration">
                                        Private Celebration
                                    </option>
                                </select>
                            </label>

                            <label>
                                <span>Event Date</span>
                                <input
                                    type="date"
                                    name="eventDate"
                                    value={form.eventDate}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                <span>Budget</span>
                                <input
                                    type="text"
                                    name="budget"
                                    value={form.budget}
                                    onChange={handleChange}
                                    placeholder="Example: ₹10L - ₹20L"
                                />
                            </label>

                            <label>
                                <span>Location</span>
                                <input
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    placeholder="Delhi NCR / Mussoorie / Corbett"
                                />
                            </label>

                            <label>
                                <span>Guest Count</span>
                                <input
                                    type="text"
                                    name="guestCount"
                                    value={form.guestCount}
                                    onChange={handleChange}
                                    placeholder="Example: 150"
                                />
                            </label>

                            <label className="floating-enquiry-full">
                                <span>Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your event..."
                                    rows={4}
                                />
                            </label>

                            {successMessage ? (
                                <div className="floating-enquiry-success">
                                    {successMessage}
                                </div>
                            ) : null}

                            {errorMessage ? (
                                <div className="floating-enquiry-error">
                                    {errorMessage}
                                </div>
                            ) : null}

                            <button
                                type="submit"
                                className="floating-enquiry-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Submit Enquiry"}
                            </button>

                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noreferrer"
                                className="floating-enquiry-whatsapp"
                            >
                                Continue on WhatsApp
                            </a>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    );
}
