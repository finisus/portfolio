import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useScrollStore } from "@/stores/scroll-store";
import { useThemeStore } from "@/stores/theme-store";
import { CodeIcon, EnvelopeIcon, UserIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

const Navbar = () => {
  const { showFilledNavbar } = useScrollStore();
  const { theme, setTheme } = useThemeStore();

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: showFilledNavbar ? -48 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="absolute flex w-full items-center justify-between gap-0.5 bg-card/80 px-1 py-1 backdrop-blur-[3px]"
    >
      <div className="flex items-center gap-0.5">
        <Link to="/" hash="about">
          <Button variant="ghost" size="xs" className="gap-2">
            <UserIcon size={12} weight="bold" />
            About
          </Button>
        </Link>

        <Link to="/" hash="contact">
          <Button variant="ghost" size="xs" className="gap-2">
            <EnvelopeIcon size={12} weight="bold" />
            Contact
          </Button>
        </Link>

        <Link to="/" hash="works">
          <Button variant="ghost" size="xs" className="gap-2">
            <CodeIcon size={12} weight="bold" />
            Works
          </Button>
        </Link>
      </div>

      <ThemeToggle
        theme={theme}
        size="icon_xs"
        variant="ghost"
        setTheme={setTheme}
      />
    </motion.nav>
  );
};

const FilledNavbar = () => {
  const { showFilledNavbar } = useScrollStore();
  const { theme, setTheme } = useThemeStore();

  return (
    <motion.nav
      initial={{ y: -48 }}
      animate={{
        y: showFilledNavbar ? 0 : -48,
      }}
      transition={{
        duration: 0.4,
        ease: "backInOut",
      }}
      className="absolute flex w-full items-center justify-between gap-4 px-4 py-4"
    >
      <div className="flex items-center gap-4">
        <Link to="/" hash="about">
          <Button variant="outline" size="sm" className="w-26 gap-2">
            <UserIcon size={14} weight="bold" />
            About
          </Button>
        </Link>

        <Link to="/" hash="contact">
          <Button variant="outline" size="sm" className="w-26 gap-2">
            <EnvelopeIcon size={14} weight="bold" />
            Contact
          </Button>
        </Link>

        <Link to="/" hash="works">
          <Button variant="outline" size="sm" className="w-26 gap-2">
            <CodeIcon size={14} weight="bold" />
            Works
          </Button>
        </Link>
      </div>

      <ThemeToggle
        theme={theme}
        size="icon_sm"
        variant="outline"
        setTheme={setTheme}
      />
    </motion.nav>
  );
};

export default function Header() {
  const { setScrollY } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center">
      <div className="relative w-full">
        <Navbar />
        <FilledNavbar />
      </div>
    </header>
  );
}
