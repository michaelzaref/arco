import {
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Palette,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Custom Websites",
    description:
      "Stunning, fast, and responsive websites tailored to your brand — from landing pages to full corporate sites.",
    icon: Globe,
  },
  {
    id: "webapp",
    title: "Web Applications",
    description:
      "Powerful dashboards, SaaS platforms, and internal tools built with modern frameworks and clean architecture.",
    icon: LayoutDashboard,
  },
  {
    id: "mobile",
    title: "Mobile-Ready Solutions",
    description:
      "Progressive web apps and mobile-first experiences that work flawlessly on every device.",
    icon: Smartphone,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Online stores with seamless checkout, inventory management, and conversion-focused design.",
    icon: ShoppingCart,
  },
  {
    id: "ui",
    title: "UI/UX Design",
    description:
      "Interfaces people love to use — wireframes, prototypes, and pixel-perfect design systems.",
    icon: Palette,
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description:
      "Reliable hosting, CI/CD pipelines, and scalable infrastructure so your product stays online.",
    icon: Cloud,
  },
];
