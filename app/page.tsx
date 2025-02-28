"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { PaymentCard } from "@/components/payment-card";
import { Switch } from "@/components/switch";
import { plans } from "@/lib/plan-data";
import { useState } from "react";

export default function Home() {
  const [yearlyPricing, setYearlyPricing] = useState(false);
  return (
    <div>
      <header className="fixed top-0 w-full">
        <div className="max-w-[1440px] flex justify-between px-8 mx-auto h-20 items-center">
          <ModeToggle />
          <div className="flex items-center gap-2">
            <Switch onClick={() => setYearlyPricing(!yearlyPricing)} />
            Yearly Pricing
          </div>
        </div>
      </header>
      <main className="pt-20">
        <h1 className="text-5xl pt-18 pb-4 text-center font-bold text-violet-950 dark:text-violet-500">
          Powerful features for{" "}
          <span className="text-violet-600 dark:text-violet-50">
            powerful creators
          </span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 pb-10 lg:pb-[84px]">
          Choose a plan that’s right for you
        </p>
        <div className="grid justify-center grid-cols-[fit-content(436px)] lg:gap-0 gap-10 lg:max-w-none lg:grid-cols-[fit-content(378px)_fit-content(416px)_fit-content(378px)] max-w-[1440px] px-8 mx-auto">
          {plans.map(plan => (
            <PaymentCard
              key={plan.planType as string}
              yearlyPricing={yearlyPricing}
              {...plan}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
