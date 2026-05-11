/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  name: string;
  price?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  icon: string;
}

export const services: ServiceCategory[] = [
  {
    title: "Hair Services",
    icon: "scissors",
    items: [
      { name: "Hair Cutting" },
      { name: "Hair Styling" },
      { name: "Hair Wash and Blow Dry" },
      { name: "Hair Straightening" },
      { name: "Hair Rebonding" },
      { name: "Keratin Treatment" },
      { name: "Hair Smoothening" },
      { name: "Hair Coloring" },
      { name: "Highlights and Balayage" },
      { name: "Hair Spa" },
      { name: "Deep Conditioning" },
      { name: "Hair Repair Treatments" },
    ],
  },
  {
    title: "Makeup Services",
    icon: "palette",
    items: [
      { name: "Party Makeup" },
      { name: "Bridal Makeup" },
      { name: "Engagement Makeup" },
      { name: "HD Makeup" },
      { name: "Natural Makeup" },
      { name: "Eye Makeup" },
    ],
  },
  {
    title: "Skin Care",
    icon: "sparkles",
    items: [
      { name: "Facial" },
      { name: "Whitening Facial" },
      { name: "Gold Facial" },
      { name: "Hydrafacial" },
      { name: "Cleanup" },
      { name: "Skin Polishing" },
    ],
  },
  {
    title: "Threading & Waxing",
    icon: "flower-2",
    items: [
      { name: "Eyebrow Threading" },
      { name: "Upper Lip Threading" },
      { name: "Full Face Threading" },
      { name: "Full Body Waxing" },
      { name: "Arms and Legs Waxing" },
      { name: "Bikini Wax" },
    ],
  },
  {
    title: "Mani & Pedi",
    icon: "hand",
    items: [
      { name: "Basic Manicure" },
      { name: "Spa Manicure" },
      { name: "Basic Pedicure" },
      { name: "Spa Pedicure" },
    ],
  },
  {
    title: "Nail Services",
    icon: "gem",
    items: [
      { name: "Nail Art" },
      { name: "Gel Nails" },
      { name: "Acrylic Nails" },
      { name: "Nail Extensions" },
    ],
  },
  {
    title: "Massage Services",
    icon: "waves",
    items: [
      { name: "Head Massage" },
      { name: "Body Massage" },
      { name: "Relaxation Massage" },
    ],
  },
  {
    title: "Henna Services",
    icon: "brush",
    items: [
      { name: "Bridal Mehndi" },
      { name: "Party Mehndi" },
      { name: "Arabic Mehndi Designs" },
    ],
  },
];
