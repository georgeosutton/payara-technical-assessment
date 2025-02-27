import localFont from "next/font/local";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../public/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export { satoshi };
