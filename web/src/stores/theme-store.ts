import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light" | "system";

interface ThemeState {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  systemTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
}

export const getSystemTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const applyTheme = (theme: "dark" | "light") => {
  if (typeof window === "undefined") return;

  const root = window.document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
};

export const calcResolvedTheme = (
  theme: Theme,
  systemTheme: "dark" | "light",
): "dark" | "light" => {
  return theme === "system" ? systemTheme : theme;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "system",
      systemTheme: getSystemTheme(),
      resolvedTheme: getSystemTheme(),

      setTheme: (newTheme: Theme) => {
        const currentState = get();
        const newResolvedTheme = calcResolvedTheme(
          newTheme,
          currentState.systemTheme,
        );

        applyTheme(newResolvedTheme);
        set({
          theme: newTheme,
          resolvedTheme: newResolvedTheme,
        });
      },
    }),
    {
      name: "theme-store",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
