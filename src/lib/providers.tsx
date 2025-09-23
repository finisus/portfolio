import {
  applyTheme,
  calcResolvedTheme,
  getSystemTheme,
  useThemeStore,
} from "@/stores/theme-store";
import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentState = useThemeStore.getState();
      const systemTheme = getSystemTheme();
      const resolvedTheme = calcResolvedTheme(currentState.theme, systemTheme);

      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme !== resolvedTheme) {
        applyTheme(resolvedTheme);
      }
      useThemeStore.setState({
        systemTheme,
        resolvedTheme,
      });

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = () => {
        const newSystemTheme = mediaQuery.matches ? "dark" : "light";
        const newState = useThemeStore.getState();
        const newResolvedTheme = calcResolvedTheme(
          newState.theme,
          newSystemTheme,
        );

        if (newState.theme === "system") {
          applyTheme(newResolvedTheme);
        }

        useThemeStore.setState({
          systemTheme: newSystemTheme,
          resolvedTheme: newResolvedTheme,
        });
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }
  }, []);

  return <>{children}</>;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
