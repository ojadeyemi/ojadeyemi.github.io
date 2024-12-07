import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";

import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeButton = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} // Accessible label
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="px-2"
      onClick={toggleTheme}
      {...props}
    >
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
});

ThemeButton.displayName = "ThemeButton";

export default ThemeButton;
