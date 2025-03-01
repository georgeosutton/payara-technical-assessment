import { ModeToggle } from "@/components/mode-toggle";
import { PaymentCard } from "@/components/payment-card";
import { PricingToggle } from "@/components/pricing-toggle";
import { plans } from "@/lib/plan-data";

export default function Home() {
  return (
    <div>
      <header className="dark:bg-grey-800 fixed top-0 z-20 w-full bg-violet-50">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8">
          <ModeToggle />
          <PricingToggle />
        </div>
      </header>
      <main className="pt-16">
        <div className="py-10 lg:py-20">
          <h1 className="pb-4 text-center text-5xl font-bold text-violet-950 dark:text-violet-500">
            Powerful features for{" "}
            <span className="text-violet-600 dark:text-violet-50">
              powerful creators
            </span>
          </h1>
          <p className="pb-10 text-center text-gray-600 lg:pb-[84px] dark:text-gray-400">
            Choose a plan that’s right for you
          </p>
          <div className="mx-auto grid max-w-[1440px] grid-cols-[fit-content(436px)] justify-center gap-10 px-8 lg:max-w-none lg:grid-cols-[fit-content(378px)_fit-content(416px)_fit-content(378px)] lg:gap-0">
            {plans.map((plan) => (
              <PaymentCard key={plan.planType as string} {...plan} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
