import React from "react";

export default function PageHero() {
  return (
    <>
      <h1 className="pb-4 text-center text-5xl font-bold text-violet-950 dark:text-violet-500">
        Powerful features for{" "}
        <span className="text-violet-600 dark:text-violet-50">
          powerful creators
        </span>
      </h1>
      <p className="pb-10 text-center text-gray-600 lg:pb-[84px] dark:text-gray-400">
        Choose a plan that’s right for you
      </p>
    </>
  );
}
