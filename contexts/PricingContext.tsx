"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PricingContextType = {
  yearlyPricing: boolean;
  toggleYearly: () => void;
};

const PricingContext = createContext<PricingContextType | undefined>(undefined);

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({
  children,
}) => {
  const [yearlyPricing, setYearlyPricing] = useState<boolean>(false);

  const toggleYearly = () => {
    setYearlyPricing((prev) => !prev);
  };

  return (
    <PricingContext.Provider value={{ yearlyPricing, toggleYearly }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = (): PricingContextType => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
};
