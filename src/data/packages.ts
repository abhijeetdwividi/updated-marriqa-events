import type { Package } from "@/types";

export const packages: Package[] = [
    {
        id: 1,
        title: "Engagement Celebration",
        slug: "engagement-celebration",
        price: "Starting from ₹59,999",
        location: "Delhi NCR · Jim Corbett · Mussoorie",
        description:
            "A refined engagement setup with premium backdrop, couple seating, floral entry, lighting and styling.",
        inclusions: [
            "Stage backdrop",
            "Welcome board",
            "Couple seating",
            "Basic lighting",
        ],
        badge: "Most Popular",
        isPopular: true,
    },
    {
        id: 2,
        title: "Luxury Wedding Decor",
        slug: "luxury-wedding-decor",
        price: "Starting from ₹4.5L",
        location: "Delhi NCR · Uttarakhand · Rajasthan",
        description:
            "Complete wedding decor experience with jaimala stage, mandap, aisle, lounges, entry and floral styling.",
        inclusions: ["Mandap", "Jaimala stage", "Aisle decor", "VIP lounge"],
        badge: "Signature",
        isPopular: true,
    },
    {
        id: 3,
        title: "Destination Wedding",
        slug: "destination-wedding",
        price: "Custom Quote",
        location: "Mussoorie · Jim Corbett · Rajasthan",
        description:
            "End-to-end destination wedding planning with venue coordination, decor, hospitality and guest experience.",
        inclusions: [
            "Venue planning",
            "Decor",
            "Hospitality",
            "Vendor coordination",
        ],
        badge: "Premium",
        isPopular: true,
    },
];
