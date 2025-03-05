"use client";
import { usePricing } from "@/contexts/pricing-context";
import { cn } from "@/lib/utils";
import React from "react";

export default function Price({
  price,
  recommended,
}: {
  recommended: boolean;
  price: { yearly: string; monthly: string };
}) {
  const { yearlyPricing } = usePricing();

  return (
    <p
      className={cn(
        "flex items-center gap-1 pb-6 text-5xl font-bold",
        !recommended && "text-violet-950 dark:text-gray-100",
      )}
    >
      ${yearlyPricing ? price.yearly : price.monthly}{" "}
      <span className="text-base font-medium">
        / {yearlyPricing ? "Year" : "Month"}
      </span>
    </p>
  );
}
