"use client";

import * as React from "react";
import { Switch } from "./switch";
import { usePricing } from "@/contexts/PricingContext";
import { Label } from "./label";

export function PricingToggle() {
  const { toggleYearly } = usePricing();

  return (
    <div className="flex items-center gap-2">
      <Switch onClick={() => toggleYearly()} id="yearly-pricing" />
      <Label htmlFor="yearly-pricing">Yearly Pricing</Label>
    </div>
  );
}
