import { Plan, PlanType } from "./types";

export const features: { text: string; plans: PlanType[] }[] = [
  {
    text: "20,000+ of PNG & SVG graphics",
    plans: ["freebie", "professional", "enterprise"],
  },
  {
    text: "Access to 100 million stock images",
    plans: ["freebie", "professional", "enterprise"],
  },
  {
    text: "Upload custom icons and fonts",
    plans: ["professional", "enterprise"],
  },
  {
    text: "Unlimited Sharing",
    plans: ["professional", "enterprise"],
  },
  {
    text: "Upload graphics & video in up to 4k",
    plans: ["professional", "enterprise"],
  },
  {
    text: "Unlimited Projects",
    plans: ["professional", "enterprise"],
  },
  {
    text: "Instant Access to our design system",
    plans: ["enterprise"],
  },
  {
    text: "Create teams to collaborate on designs",
    plans: ["enterprise"],
  },
];

export const plans: Plan[] = [
  {
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: {
      monthly: "0",
      yearly: "0",
    },
    planType: "freebie",
    recommended: false,
    features,
  },
  {
    title: "Professional",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    price: {
      monthly: "25",
      yearly: "300",
    },
    planType: "professional",
    recommended: true,
    features,
  },
  {
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: {
      monthly: "100",
      yearly: "1200",
    },
    planType: "enterprise",
    recommended: false,
    features,
  },
];
