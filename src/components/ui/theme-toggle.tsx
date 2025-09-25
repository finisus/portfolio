import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { cn } from "@/utils/cn";
import type { Theme } from "@/utils/types";
import { LaptopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";

type ThemeToggleProps = {
  theme: Theme;
  size: "icon_xs" | "icon_sm";
  variant: "ghost" | "outline";
  setTheme: (theme: Theme) => void;
};

export default function ThemeToggle({
  theme,
  size,
  variant,
  setTheme,
}: ThemeToggleProps) {
  return (
    <MenuTrigger>
      <Button aria-label="Theme Toggle" variant={variant} size={size}>
        <SunIcon
          size={14}
          weight="bold"
          className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <MoonIcon
          size={14}
          weight="bold"
          className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover className="border-border/70 p-0">
        <Menu className="p-1">
          <MenuItem
            onAction={() => setTheme("light")}
            className={cn(
              "gap-2",
              theme === "light" &&
                "font-semibold text-accent-foreground underline",
            )}
          >
            <SunIcon size={14} weight="bold" />
            Light
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("dark")}
            className={cn(
              "gap-2",
              theme === "dark" &&
                "font-semibold text-accent-foreground underline",
            )}
          >
            <MoonIcon size={14} weight="bold" />
            Dark
          </MenuItem>
          <MenuItem
            onAction={() => setTheme("system")}
            className={cn(
              "gap-2",
              theme === "system" &&
                "font-semibold text-accent-foreground underline",
            )}
          >
            <LaptopIcon size={14} weight="bold" />
            System
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
}
