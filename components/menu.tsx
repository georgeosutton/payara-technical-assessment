import React from "react";
import { ModeToggle } from "./mode-toggle";
import { PricingToggle } from "./pricing-toggle";

export default function Menu() {
  return (
    <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8">
      <ModeToggle />
      <PricingToggle />
    </div>
  );
}
