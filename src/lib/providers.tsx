import { useScreenStore } from "@/stores/screen-store";
import {
  applyTheme,
  calcResolvedTheme,
  getSystemTheme,
  useThemeStore,
} from "@/stores/theme-store";
import { ReactLenis } from "lenis/react";
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
  const { setScreenX, setScreenY, setScrollY } = useScreenStore();

  useEffect(() => {
    const handleScreen = () => {
      setScreenX(window.innerWidth);
      setScreenY(window.innerHeight);
    };
    window.addEventListener("resize", handleScreen, { passive: true });
    handleScreen();
    return () => window.removeEventListener("resize", handleScreen);
  }, [setScreenX, setScreenY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return (
    <>
      <ReactLenis root options={{ smoothWheel: true }} />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
