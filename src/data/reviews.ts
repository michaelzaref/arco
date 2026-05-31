export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Bloom Studio",
    text: "ARCO delivered exactly what we envisioned — a sleek, fast website that our clients love. Communication was clear from day one.",
    rating: 5,
  },
  {
    id: "2",
    name: "Omar Hassan",
    role: "Operations Manager",
    company: "Nile Logistics",
    text: "We needed a custom dashboard fast. The team understood our workflow and built something that actually saves us hours every week.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Marketing Director",
    company: "Vertex Health",
    text: "Professional, creative, and on deadline. They didn't just build a site — they helped us think through the user journey.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Okonkwo",
    role: "CEO",
    company: "TradeBridge",
    text: "From concept to launch in weeks. The animations and polish exceeded what we expected for our budget.",
    rating: 5,
  },
  {
    id: "5",
    name: "Layla Farouk",
    role: "Product Owner",
    company: "Cairo Eats",
    text: "Our online ordering experience transformed after ARCO rebuilt our platform. Orders went up and support tickets went down.",
    rating: 5,
  },
  {
    id: "6",
    name: "David Park",
    role: "CTO",
    company: "Finova",
    text: "Solid engineering and beautiful design in one package. We'd work with them again without hesitation.",
    rating: 5,
  },
];
