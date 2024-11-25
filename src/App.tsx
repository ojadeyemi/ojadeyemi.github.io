import "./globals.css"; // Import your global styles
import Navbar from "./components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";

const App = () => {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={1}>
        <div
          className="mx-auto min-h-screen max-w-xl bg-background px-6 pb-12 font-sans antialiased sm:py-24"
          style={{ "--font-sans": "Inter, sans-serif" } as React.CSSProperties}
        >
          <Home />
          <Navbar />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
