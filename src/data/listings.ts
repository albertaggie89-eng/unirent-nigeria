import img1 from "@/assets/listing-1.jpg";
import img2 from "@/assets/listing-2.jpg";
import img3 from "@/assets/listing-3.jpg";
import img4 from "@/assets/listing-4.jpg";
import img5 from "@/assets/listing-5.jpg";
import img6 from "@/assets/listing-6.jpg";

export type ListingType = "Self-contain" | "Single room" | "Shared flat" | "1 Bedroom" | "2 Bedroom" | "Hostel";

export interface Listing {
  id: string;
  title: string;
  type: ListingType;
  pricePerYear: number; // NGN
  university: string;
  state: string;
  city: string;
  address: string;
  beds: number;
  baths: number;
  amenities: string[];
  image: string;
  gallery: string[];
  description: string;
  landlord: { name: string; phone: string; verified: boolean };
}

const imgs = [img1, img2, img3, img4, img5, img6];

export const listings: Listing[] = [
  {
    id: "lag-001",
    title: "Sunlit Self-Contain near UNILAG Gate",
    type: "Self-contain",
    pricePerYear: 650000,
    university: "University of Lagos",
    state: "Lagos",
    city: "Akoka",
    address: "12 St. Finbarr's Rd, Akoka",
    beds: 1,
    baths: 1,
    amenities: ["24/7 Power", "Water", "Wi-Fi", "Tiled", "Wardrobe"],
    image: img1,
    gallery: [img1, img3, img5],
    description:
      "A bright self-contained apartment minutes from the UNILAG main gate. Newly tiled, with a private bathroom, modern wardrobe and steady power supply. Ideal for a focused student.",
    landlord: { name: "Mrs. Adebayo", phone: "+234 803 000 0001", verified: true },
  },
  {
    id: "oau-002",
    title: "Shared 3-Bedroom Flat off OAU Road",
    type: "Shared flat",
    pricePerYear: 420000,
    university: "Obafemi Awolowo University",
    state: "Osun",
    city: "Ile-Ife",
    address: "Road 7, Mayfair, Ile-Ife",
    beds: 3,
    baths: 2,
    amenities: ["Wi-Fi", "Borehole", "Security", "Kitchen", "Parking"],
    image: img2,
    gallery: [img2, img6, img3],
    description:
      "Cozy shared flat with two roommates. Spacious living room, fitted kitchen and gated compound with day & night security. 10 minutes by bike to OAU.",
    landlord: { name: "Mr. Femi", phone: "+234 805 000 0002", verified: true },
  },
  {
    id: "ui-003",
    title: "Modern 1-Bedroom near UI Agbowo",
    type: "1 Bedroom",
    pricePerYear: 850000,
    university: "University of Ibadan",
    state: "Oyo",
    city: "Ibadan",
    address: "Agbowo Express, Ibadan",
    beds: 1,
    baths: 1,
    amenities: ["Inverter", "Water", "Wi-Fi", "Furnished", "AC"],
    image: img3,
    gallery: [img3, img1, img5],
    description:
      "Newly built, fully furnished mini-flat with inverter backup. Walking distance to UI Agbowo gate, banks and eateries.",
    landlord: { name: "Bolu Properties", phone: "+234 802 000 0003", verified: true },
  },
  {
    id: "unn-004",
    title: "Quiet Hostel Room — UNN Nsukka",
    type: "Hostel",
    pricePerYear: 280000,
    university: "University of Nigeria, Nsukka",
    state: "Enugu",
    city: "Nsukka",
    address: "Odim Hills, Nsukka",
    beds: 1,
    baths: 1,
    amenities: ["Security", "Water", "Study Room", "Generator"],
    image: img4,
    gallery: [img4, img6, img1],
    description:
      "Affordable hostel room in a quiet, student-only block. Communal study room, shared kitchen and 24/7 security.",
    landlord: { name: "Pinecrest Hostels", phone: "+234 807 000 0004", verified: false },
  },
  {
    id: "abu-005",
    title: "Cozy Studio — ABU Samaru",
    type: "Self-contain",
    pricePerYear: 380000,
    university: "Ahmadu Bello University",
    state: "Kaduna",
    city: "Zaria",
    address: "Samaru, Zaria",
    beds: 1,
    baths: 1,
    amenities: ["Water", "Solar", "Wardrobe", "Tiled"],
    image: img5,
    gallery: [img5, img1, img3],
    description:
      "Self-contained studio with solar backup. Newly painted, with kitchenette and en-suite bathroom. 5 minutes to ABU Samaru gate.",
    landlord: { name: "Hauwa Rentals", phone: "+234 808 000 0005", verified: true },
  },
  {
    id: "covt-006",
    title: "2-Bedroom Flat near Covenant University",
    type: "2 Bedroom",
    pricePerYear: 1200000,
    university: "Covenant University",
    state: "Ogun",
    city: "Ota",
    address: "Canaanland Axis, Ota",
    beds: 2,
    baths: 2,
    amenities: ["Estate", "24/7 Power", "Wi-Fi", "Furnished", "Security"],
    image: img6,
    gallery: [img6, img2, img3],
    description:
      "Beautifully finished 2-bedroom flat inside a serviced estate. Power 24/7, treated water and on-site security. Ideal for two students sharing.",
    landlord: { name: "Estate Mgmt", phone: "+234 809 000 0006", verified: true },
  },
  {
    id: "uniben-007",
    title: "Single Room — UNIBEN BDPA",
    type: "Single room",
    pricePerYear: 220000,
    university: "University of Benin",
    state: "Edo",
    city: "Benin City",
    address: "BDPA, Ugbowo",
    beds: 1,
    baths: 1,
    amenities: ["Shared Kitchen", "Water", "Security"],
    image: img1,
    gallery: [img1, img4],
    description: "Budget-friendly single room in a student compound. Shared kitchen and bathroom.",
    landlord: { name: "Mr. Osas", phone: "+234 803 000 0007", verified: false },
  },
  {
    id: "uniabuja-008",
    title: "Self-Contain — Giri, near UniAbuja",
    type: "Self-contain",
    pricePerYear: 700000,
    university: "University of Abuja",
    state: "FCT",
    city: "Abuja",
    address: "Giri, Abuja",
    beds: 1,
    baths: 1,
    amenities: ["Inverter", "Borehole", "Tiled", "Wardrobe"],
    image: imgs[2],
    gallery: [img3, img5, img1],
    description: "Spacious self-contain with inverter and ample wardrobe space. Close to school shuttle stop.",
    landlord: { name: "Capital Homes", phone: "+234 806 000 0008", verified: true },
  },
];

export const formatNaira = (n: number) =>
  "₦" + n.toLocaleString("en-NG") + "/yr";
