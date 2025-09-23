// import { useThemeStore } from "@/stores/theme-store";
import { Button } from "@/components/ui/button";
// import ThemeToggle from "@/components/theme-toggle";
import { UserIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="flex flex-row">
      <Link to="/" hash="#about">
        <Button variant="ghost" size="sm">
          <UserIcon size={14} strokeWidth={2.5} />
          About
        </Button>
      </Link>
    </nav>
  );
};

export default function Header() {
  // const { theme, setTheme } = useThemeStore();

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-row items-center px-3 py-1 backdrop-blur-xs">
      <Navbar />
    </header>
  );
}
