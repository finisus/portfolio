import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useScreenStore } from "@/stores/screen-store";
import { useThemeStore } from "@/stores/theme-store";
import {
  CaretDoubleUpIcon,
  CodeIcon,
  EnvelopeIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Link, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";

const Navbar = () => {
  const { showFilledNavbar } = useScreenStore();
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
      className="absolute flex w-full items-center justify-between gap-0.5 bg-background/50 px-2 py-1 backdrop-blur-[3px]"
    >
      <div className="flex items-center gap-0">
        <Link to="/" hash="about">
          <Button variant="ghost" size="xs" className="gap-2 font-mono text-xs">
            <UserIcon size={12} weight="bold" />
            About
          </Button>
        </Link>

        <Link to="/" hash="works">
          <Button variant="ghost" size="xs" className="gap-2 font-mono text-xs">
            <CodeIcon size={12} weight="bold" />
            Works
          </Button>
        </Link>

        <Link to="/" hash="contact">
          <Button variant="ghost" size="xs" className="gap-2 font-mono text-xs">
            <EnvelopeIcon size={12} weight="bold" />
            Contact
          </Button>
        </Link>
      </div>

      <ThemeToggle
        theme={theme}
        size="icon_xs"
        weight="bold"
        font="font-mono"
        variant="ghost"
        setTheme={setTheme}
      />
    </motion.nav>
  );
};

const FilledNavbar = () => {
  const { screenX, showFilledNavbar } = useScreenStore();
  const { theme, setTheme } = useThemeStore();
  const router = useRouter();

  const scrollToTop = () => {
    router.navigate({
      to: router.state.location.pathname,
      replace: true,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {screenX < 768 ? (
        <div className="flex items-center gap-4">
          <Button
            onPress={scrollToTop}
            variant="outline"
            size="icon_sm"
            className="shadow-xs"
          >
            <CaretDoubleUpIcon size={14} weight="regular" />
          </Button>

          <Link to="/" hash="about">
            <Button variant="outline" size="icon_sm" className="shadow-xs">
              <UserIcon size={14} weight="regular" />
            </Button>
          </Link>

          <Link to="/" hash="works">
            <Button variant="outline" size="icon_sm" className="shadow-xs">
              <CodeIcon size={14} weight="regular" />
            </Button>
          </Link>

          <Link to="/" hash="contact">
            <Button variant="outline" size="icon_sm" className="shadow-xs">
              <EnvelopeIcon size={14} weight="regular" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            onPress={scrollToTop}
            variant="outline"
            size="sm"
            className="gap-2 shadow-xs"
          >
            <CaretDoubleUpIcon size={13} weight="regular" />
          </Button>

          <Link to="/" hash="about">
            <Button variant="outline" size="sm" className="gap-2 shadow-xs">
              <UserIcon size={13} weight="regular" />
              About
            </Button>
          </Link>

          <Link to="/" hash="works">
            <Button variant="outline" size="sm" className="gap-2 shadow-xs">
              <CodeIcon size={13} weight="regular" />
              Works
            </Button>
          </Link>

          <Link to="/" hash="contact">
            <Button variant="outline" size="sm" className="gap-2 shadow-xs">
              <EnvelopeIcon size={13} weight="regular" />
              Contact
            </Button>
          </Link>
        </div>
      )}

      <ThemeToggle
        theme={theme}
        size="icon_sm"
        weight="regular"
        font="font-serif"
        variant="outline"
        setTheme={setTheme}
      />
    </motion.nav>
  );
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center">
      <div className="relative w-full">
        <Navbar />
        <FilledNavbar />
      </div>
    </header>
  );
}
