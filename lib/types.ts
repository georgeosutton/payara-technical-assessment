export type PlanType = "freebie" | "professional" | "enterprise";

export type Plan = {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  planType: PlanType;
  recommended: boolean;
  features: {
    text: string;
    plans: PlanType[];
  }[];
};
