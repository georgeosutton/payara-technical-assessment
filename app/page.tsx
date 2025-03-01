import Menu from "@/components/menu";
import PageHero from "@/components/page-hero";
import PricingCardsList from "@/components/pricing-cards-list";
import { plans } from "@/lib/plan-data";

export default function Home() {
  return (
    <div>
      <header className="dark:bg-grey-800 fixed top-0 z-20 w-full bg-violet-50">
        <Menu />
      </header>
      <main className="pt-16">
        <div className="py-10 lg:py-20">
          <PageHero />
          <PricingCardsList plans={plans} />
        </div>
      </main>
    </div>
  );
}
