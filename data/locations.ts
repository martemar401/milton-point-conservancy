export type ConservancyLocation = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: "Historic home" | "Meeting house" | "Archaeological site";
  description: string;
  image?: string;
  status: string;
};

export const locations: ConservancyLocation[] = [
  {
    id: "bird-homestead",
    name: "Bird Homestead",
    address: "600 Milton Road, Rye, NY 10580",
    latitude: 40.9596223,
    longitude: -73.6894023,
    category: "Historic home",
    description: "An 1835 Greek Revival homestead overlooking Blind Brook Estuary.",
    image: "/bird-homestead.jpg",
    status: "Restoration in progress",
  },
  {
    id: "rye-meeting-house",
    name: "Rye Meeting House",
    address: "624 Milton Road, Rye, NY 10580",
    latitude: 40.9588356,
    longitude: -73.6891698,
    category: "Meeting house",
    description: "A historic schoolhouse, chapel, library, and community gathering place.",
    image: "/rye-meeting-house-06.webp",
    status: "Historic landmark",
  },
  {
    id: "william-voris-site",
    name: "William Voris Site",
    address: "Milton Road, Rye, NY 10580",
    latitude: 40.95923,
    longitude: -73.68927,
    category: "Archaeological site",
    description: "The documented site associated with pioneering Black entrepreneur William Voris.",
    status: "Research and interpretation",
  },
];
