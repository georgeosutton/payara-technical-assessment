import { PlanType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function PaymentCard({
  title,
  description,
  features,
  price,
  recommended,
}: {
  title: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  planType: PlanType;
  features: {
    text: string;
    plans: PlanType[];
  }[];
  recommended: boolean;
}) {
  return (
    <div
      className={cn(
        "h-fit bg-violet-100 px-6 py-10 rounded-2xl mt-[30px]",
        "dark:text-violet-50 dark:bg-grey-700",
        recommended &&
          "py-[70px] dark:bg-violet-700 dark:text-gray-100 bg-violet-700 text-violet-50 mt-0 z-10"
      )}
    >
      <h3
        className={cn(
          "text-4xl pb-3",
          !recommended && "text-violet-950 dark:text-gray-100"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "pb-5",
          !recommended && "text-gray-700 dark:text-gray-100"
        )}
      >
        {description}
      </p>
      <p
        className={cn(
          "pb-6 text-5xl font-bold flex items-center gap-1",
          !recommended && "text-violet-950 dark:text-gray-100"
        )}
      >
        ${price.monthly} <span className="text-base font-medium">/ Month</span>
      </p>
      <div className="pb-10">
        <Button
          variant={recommended ? "primary" : "secondary"}
          className="w-full"
        >
          Get Started Now
        </Button>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map(feature => {
          return (
            <li className="flex items-center gap-4" key={feature.text}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM21.7913 13.1495C22.058 12.8957 22.0684 12.4737 21.8145 12.207C21.5606 11.9403 21.1387 11.9299 20.872 12.1838L13.6717 19.0379L11.1666 16.1763C10.9241 15.8992 10.5029 15.8713 10.2258 16.1138C9.94881 16.3563 9.92083 16.7775 10.1634 17.0545L13.1263 20.4391C13.246 20.5758 13.4162 20.6577 13.5976 20.666C13.7791 20.6742 13.956 20.6081 14.0876 20.4829L21.7913 13.1495Z"
                  className={cn(
                    "dark:fill-violet-300 fill-violet-500",
                    recommended && "dark:fill-violet-200 fill-current"
                  )}
                />
              </svg>
              {feature.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
