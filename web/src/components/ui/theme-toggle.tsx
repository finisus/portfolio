import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { cn } from "@/utils/cn";
import type { Theme } from "@/utils/types";
import { LaptopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";

type ThemeToggleProps = {
  theme: Theme;
  size: "icon_xs" | "icon_sm";
  weight: "bold" | "regular";
  font: "font-mono" | "font-serif";
  variant: "ghost" | "outline";
  setTheme: (theme: Theme) => void;
};

export default function ThemeToggle({
  theme,
  size,
  weight,
  font,
  variant,
  setTheme,
}: ThemeToggleProps) {
  return (
    <MenuTrigger>
      <Button aria-label="Theme Toggle" variant={variant} size={size}>
        <SunIcon
          size={14}
          weight={weight}
          className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <MoonIcon
          size={14}
          weight={weight}
          className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover
        className={`border-border/70 bg-card/70 p-0 backdrop-blur-xs ${font}`}
      >
        <Menu className="p-1">
          <MenuItem
            onAction={() => setTheme("light")}
            className={cn(
              "gap-2",
              theme === "light" &&
                "text-accent-foreground underline decoration-[1.5px]",
            )}
          >
            <SunIcon size={14} weight={weight} />
            Light
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("dark")}
            className={cn(
              "gap-2",
              theme === "dark" &&
                "text-accent-foreground underline decoration-[1.5px]",
            )}
          >
            <MoonIcon size={14} weight={weight} />
            Dark
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("system")}
            className={cn(
              "gap-2",
              theme === "system" &&
                "text-accent-foreground underline decoration-[1.5px]",
            )}
          >
            <LaptopIcon size={14} weight={weight} />
            System
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
