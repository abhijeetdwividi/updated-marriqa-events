export type Package = {
    id: number;
    title: string;
    slug: string;
    price: string;
    location: string;
    description: string;
    inclusions: string[];
    badge: string;
    isPopular: boolean;
};

export type Venue = {
    id: number;
    name: string;
    slug: string;
    region: string;
    capacity: string;
    image: string;
    description: string;
    isPartner: boolean;
};

export type Blog = {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    author: string;
    date: string;
};
