import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const ThemeButton = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button
      ref={ref} // Pass down the ref
      variant="ghost"
      size="icon"
      type="button"
      className="px-2"
      onClick={toggleTheme}
      {...props} // Spread the rest of props to handle any additional ones
    >
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
});

ThemeButton.displayName = "ThemeButton"; // Name for debugging

export default ThemeButton;
