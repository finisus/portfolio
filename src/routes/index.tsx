import AsciiArt from "@/components/ascii-art";
import { Button } from "@/components/ui/button";
import { useScreenStore } from "@/stores/screen-store";
import {
  GithubLogoIcon,
  TelegramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const {
    setIsAboutSectInView,
    setIsContactSectInView,
    setIsWorksSectInView,
    setIsColophonSectInView,
  } = useScreenStore();
  const aboutSectRef = useRef<HTMLElement>(null);
  const contactSectRef = useRef<HTMLElement>(null);
  const worksSectRef = useRef<HTMLElement>(null);
  const colophonSectRef = useRef<HTMLElement>(null);
  const isAboutSectInView = useInView(aboutSectRef);
  const isContactSectInView = useInView(contactSectRef);
  const isWorksSectInView = useInView(worksSectRef);
  const isColophonSectInView = useInView(colophonSectRef);

  useEffect(() => {
    setIsAboutSectInView(isAboutSectInView);
    setIsContactSectInView(isContactSectInView);
    setIsWorksSectInView(isWorksSectInView);
    setIsColophonSectInView(isColophonSectInView);
  }, [
    isAboutSectInView,
    isContactSectInView,
    isWorksSectInView,
    isColophonSectInView,
    setIsAboutSectInView,
    setIsContactSectInView,
    setIsWorksSectInView,
    setIsColophonSectInView,
  ]);

  return (
    <div className="flex flex-col items-stretch gap-[10svh]">
      <motion.section
        id="hero"
        aria-label="Hero Section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative h-svh overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
          <AsciiArt />
        </div>

        <h1 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-serif text-8xl italic max-md:text-7xl">
          Finisus
        </h1>
      </motion.section>

      <motion.section
        id="about"
        aria-label="About Section"
        ref={aboutSectRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isAboutSectInView ? 1 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="h-svh space-y-2 overflow-hidden px-4 pt-16 pb-33"
      >
        <h2 className="font-serif text-6xl max-md:text-5xl">
          Who&apos;s Finisus?
        </h2>

        <div className="flex h-full items-center justify-center rounded-lg border border-border/35 bg-card/50 shadow-md backdrop-blur-[3px]"></div>
      </motion.section>

      <motion.section
        id="contact"
        aria-label="Contact Section"
        ref={contactSectRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isContactSectInView ? 1 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="h-svh space-y-2 overflow-hidden px-4 pt-16 pb-33"
      >
        <h2 className="font-serif text-6xl max-md:text-5xl">Contact Finisus</h2>

        <div className="flex h-full items-center justify-center rounded-lg border border-border/35 bg-card/50 shadow-md backdrop-blur-[3px]"></div>
      </motion.section>

      <motion.section
        id="works"
        aria-label="Works Section"
        ref={worksSectRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isWorksSectInView ? 1 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="h-svh space-y-2 overflow-hidden px-4 pt-16 pb-33"
      >
        <h2 className="font-serif text-6xl max-md:text-5xl">Previous Works</h2>

        <div className="flex h-full items-center justify-center rounded-lg border border-border/35 bg-card/50 shadow-md backdrop-blur-[3px]"></div>
      </motion.section>

      <motion.section
        id="colophon"
        aria-label="Colophon"
        ref={colophonSectRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isColophonSectInView ? 1 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4 overflow-hidden px-4 pt-16 pb-4"
      >
        <div className="flex flex-col items-center justify-start gap-2 rounded-lg border border-border/35 bg-card/50 px-4 py-6 shadow-md backdrop-blur-[3px]">
          <p className="font-serif text-xl font-medium text-muted-foreground max-md:text-lg">
            ::Colophon::
          </p>

          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-serif text-4xl font-medium text-primary max-md:text-3xl">
              Get in touch
            </h1>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://github.com/finisus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <GithubLogoIcon size={14} weight="bold" />
                </Button>
              </a>
              <a
                href="https://x.com/finisuss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <XLogoIcon size={14} weight="bold" />
                </Button>
              </a>
              <a
                href="https://telegram.me/finisus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <TelegramLogoIcon size={14} weight="bold" />
                </Button>
              </a>
            </div>
          </div>

          <p className="text-center font-serif text-xl font-medium max-md:text-lg">
            With love by Finisus 💛
          </p>
        </div>

        <span className="ml-auto font-mono text-xs text-muted-foreground">
          ©Sep ’25
        </span>
      </motion.section>
    </div>
  );
}
