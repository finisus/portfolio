import { Button } from "@/components/ui/button";
import { useScreenStore } from "@/stores/screen-store";
import {
  GithubLogoIcon,
  TelegramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const ExtLinks = () => {
  const { showFilledExtLinks } = useScreenStore();

  return (
    <motion.nav
      initial={{ y: -36 }}
      animate={{
        y: showFilledExtLinks ? 0 : -36,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="absolute flex w-full items-center justify-between bg-background/50 px-2 py-1 backdrop-blur-[3px]"
    >
      <div className="flex items-center gap-0">
        <a
          href="https://github.com/finisus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link" size="xs">
            Github
          </Button>
        </a>
        <a
          href="https://x.com/finisuss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link" size="xs">
            Twitter/X
          </Button>
        </a>
        <a
          href="https://telegram.me/finisus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link" size="xs">
            Telegram
          </Button>
        </a>
      </div>
    </motion.nav>
  );
};

const FilledExtLinks = () => {
  const { screenX, showFilledExtLinks, isColophonSectInView } =
    useScreenStore();

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isColophonSectInView ? 0 : 1,
        y: isColophonSectInView ? 0 : showFilledExtLinks ? -64 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: "backInOut",
      }}
      className="absolute flex w-full items-center justify-between gap-4 px-4 py-4"
    >
      {screenX < 768 ? (
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/finisus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon_sm">
              <GithubLogoIcon size={14} weight="bold" />
            </Button>
          </a>
          <a
            href="https://x.com/finisuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon_sm">
              <XLogoIcon size={14} weight="bold" />
            </Button>
          </a>
          <a
            href="https://telegram.me/finisus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon_sm">
              <TelegramLogoIcon size={14} weight="bold" />
            </Button>
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/finisus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <GithubLogoIcon size={13} weight="bold" />
              Github
            </Button>
          </a>
          <a
            href="https://x.com/finisuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <XLogoIcon size={13} weight="bold" />
              Twitter/X
            </Button>
          </a>
          <a
            href="https://telegram.me/finisus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <TelegramLogoIcon size={13} weight="bold" />
              Telegram
            </Button>
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full items-center">
      <div className="relative w-full">
        <ExtLinks />
        <FilledExtLinks />
      </div>
    </footer>
  );
}
