import { PlanType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Price from "./price";

export function PaymentCard({
  title,
  description,
  features,
  price,
  recommended,
  planType,
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
        "h-fit rounded-2xl bg-violet-100 px-6 py-10 lg:mt-[30px]",
        "dark:bg-grey-700 dark:text-violet-50",
        recommended &&
          "z-10 bg-violet-700 py-[70px] text-violet-50 shadow-[0px_4px_44px_0px_#A78BFA] lg:-mx-2.5 lg:mt-0 dark:bg-violet-700 dark:text-gray-100 dark:shadow-[0px_4px_44px_0px_#020617]",
      )}
    >
      <h3
        className={cn(
          "pb-3 text-4xl",
          !recommended && "text-violet-950 dark:text-gray-100",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "pb-5",
          !recommended && "text-gray-700 dark:text-gray-100",
        )}
      >
        {description}
      </p>
      <Price price={price} recommended={recommended} />
      <div className="pb-10">
        <Button
          variant={recommended ? "primary" : "secondary"}
          className="w-full"
        >
          Get Started Now
        </Button>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((feature) => {
          const included = feature.plans.includes(planType);
          return (
            <li
              className={cn(
                "flex items-center gap-4 text-violet-950 dark:text-violet-50",
                recommended && "text-violet-50",
                recommended && !included && "dark:text-violet-400",
                !included &&
                  !recommended &&
                  "text-violet-400 dark:text-gray-400",
              )}
              key={feature.text}
            >
              {!included && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM20.2389 19.2978C20.4992 19.5581 20.4992 19.9803 20.2389 20.2406C19.9785 20.501 19.5564 20.501 19.2961 20.2406L15.9967 16.9412L12.6973 20.2406C12.437 20.501 12.0149 20.501 11.7545 20.2406C11.4942 19.9803 11.4942 19.5581 11.7545 19.2978L15.0539 15.9984L11.7536 12.6981C11.4933 12.4378 11.4933 12.0157 11.7536 11.7553C12.014 11.495 12.4361 11.495 12.6964 11.7553L15.9967 15.0556L19.297 11.7553C19.5573 11.495 19.9795 11.495 20.2398 11.7553C20.5001 12.0157 20.5001 12.4378 20.2398 12.6981L16.9395 15.9984L20.2389 19.2978Z"
                    className={cn(
                      "dark:fill-grey-500 fill-violet-300",
                      recommended && "dark:fill-violet-500",
                    )}
                  />
                </svg>
              )}
              {included && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9983 32C24.8348 32 31.9983 24.8366 31.9983 16C31.9983 7.16344 24.8348 0 15.9983 0C7.16174 0 -0.00170898 7.16344 -0.00170898 16C-0.00170898 24.8366 7.16174 32 15.9983 32ZM21.7913 13.1495C22.058 12.8957 22.0684 12.4737 21.8145 12.207C21.5606 11.9403 21.1387 11.9299 20.872 12.1838L13.6717 19.0379L11.1666 16.1763C10.9241 15.8992 10.5029 15.8713 10.2258 16.1138C9.94881 16.3563 9.92083 16.7775 10.1634 17.0545L13.1263 20.4391C13.246 20.5758 13.4162 20.6577 13.5976 20.666C13.7791 20.6742 13.956 20.6081 14.0876 20.4829L21.7913 13.1495Z"
                    className={cn(
                      "fill-violet-500 dark:fill-violet-300",
                      recommended && "fill-violet-50 dark:fill-violet-200",
                    )}
                  />
                </svg>
              )}
              {feature.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
