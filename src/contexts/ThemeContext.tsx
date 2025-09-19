"use client";

// External imports
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Theme constants
const _LIGHT = "light";
const _DARK = "dark";

type ThemeType = typeof _LIGHT | typeof _DARK;

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(_DARK);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mounting
  useEffect(() => {
    setMounted(true);
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (savedTheme) {
      setTheme(savedTheme as ThemeType);
    }
  }, []);

  // Update document attribute and localStorage when theme changes
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
