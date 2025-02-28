"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button className="group/toggle h-8 w-8 px-0" onClick={toggleTheme}>
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
