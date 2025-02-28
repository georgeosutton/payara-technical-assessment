"use client";

import * as React from "react";
import { Switch } from "./switch";
import { usePricing } from "@/contexts/PricingContext";

export function PricingToggle() {
  const { toggleYearly } = usePricing();

  return (
    <div className="flex items-center gap-2">
      <Switch onClick={() => toggleYearly()} />
      Yearly Pricing
    </div>
  );
}
