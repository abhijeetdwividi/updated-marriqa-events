import type { Venue } from "@/types";

export const venues: Venue[] = [
    {
        id: 1,
        name: "Noida Farmhouse Collection",
        slug: "noida-farmhouse-collection",
        region: "Delhi NCR",
        capacity: "100–500 guests",
        image: "/images/img1.png",
        description:
            "Premium farmhouse venues in Noida and Delhi NCR for weddings, engagements, haldi, mehendi and private celebrations.",
        isPartner: true,
    },
    {
        id: 2,
        name: "Jim Corbett Resorts",
        slug: "jim-corbett-resorts",
        region: "Uttarakhand",
        capacity: "150–500 guests",
        image: "/images/img2.png",
        description:
            "Luxury resort options in Jim Corbett for destination weddings surrounded by nature, lawns and premium hospitality.",
        isPartner: true,
    },
    {
        id: 3,
        name: "Mussoorie Destination Venues",
        slug: "mussoorie-destination-venues",
        region: "Uttarakhand",
        capacity: "80–250 guests",
        image: "/images/img3.png",
        description:
            "Mountain destination venues in Mussoorie for intimate luxury weddings, anniversaries and family celebrations.",
        isPartner: true,
    },
];
