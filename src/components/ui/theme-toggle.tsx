
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Toggle } from "./toggle";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={className}>
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Cambiar tema"
        className="relative h-9 w-14 rounded-full bg-secondary p-0.5 transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun className="h-4 w-4 text-muted-foreground opacity-70" />
          <Moon className="h-4 w-4 text-muted-foreground opacity-70" />
        </div>
        <div
          className={`${
            theme === "dark" ? "translate-x-5" : "translate-x-0"
          } h-7 w-7 transform rounded-full bg-background shadow-sm ring-1 ring-border transition-transform duration-200`}
        />
      </Toggle>
    </div>
  );
}
