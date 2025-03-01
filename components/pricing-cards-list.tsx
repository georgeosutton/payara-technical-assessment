import React from "react";
import { PricingCard } from "./pricing-card";
import { Plan } from "@/lib/types";

export default function PricingCardsList({ plans }: { plans: Plan[] }) {
  return (
    <ul className="mx-auto grid max-w-[1440px] grid-cols-[fit-content(436px)] justify-center gap-10 px-8 lg:max-w-none lg:grid-cols-[fit-content(378px)_fit-content(416px)_fit-content(378px)] lg:gap-0">
      {plans.map((plan) => (
        <PricingCard key={plan.planType as string} {...plan} />
      ))}
    </ul>
  );
}
