import { PaymentCard } from "@/components/payment-card";
import { plans } from "@/lib/plan-data";

export default function Home() {
  return (
    <div className="">
      <main>
        <h1 className="text-5xl pt-18 pb-4 text-center font-bold text-violet-950 dark:text-violet-500">
          Powerful features for{" "}
          <span className="text-violet-600 dark:text-violet-50">
            powerful creators
          </span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 pb-[84px]">
          Choose a plan that’s right for you
        </p>
        <div className="grid justify-center grid-cols-[fit-content(378px)_fit-content(436px)_fit-content(378px)] max-w-[1440px] px-8 mx-auto">
          {plans.map(plan => (
            <PaymentCard key={plan.planType as string} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
}
