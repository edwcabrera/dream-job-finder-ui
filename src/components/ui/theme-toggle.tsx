
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./button";
import { Toggle } from "./toggle";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={className}>
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Cambiar tema"
        className="relative h-8 w-12 rounded-full bg-secondary p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="absolute inset-0 flex items-center justify-between px-1.5">
          <Sun className="h-4 w-4 text-muted-foreground opacity-70" />
          <Moon className="h-4 w-4 text-muted-foreground opacity-70" />
        </div>
        <div
          className={`${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          } h-6 w-6 transform rounded-full bg-background shadow-sm transition-transform`}
        />
      </Toggle>
    </div>
  );
}
