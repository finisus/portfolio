import AsciiArt from "@/components/ascii-art";
import NubcatFourAscii from "@/components/nubcat-four-ascii";
import { Button } from "@/components/ui/button";
import Works from "@/components/works";
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
  const aboutSectRef = useRef<HTMLDivElement>(null);
  const worksSectRef = useRef<HTMLDivElement>(null);
  const contactSectRef = useRef<HTMLDivElement>(null);
  const colophonSectRef = useRef<HTMLElement>(null);
  const isAboutSectInView = useInView(aboutSectRef);
  const isWorksSectInView = useInView(worksSectRef);
  const isContactSectInView = useInView(contactSectRef);
  const isColophonSectInView = useInView(colophonSectRef);

  useEffect(() => {
    setIsAboutSectInView(isAboutSectInView);
    setIsWorksSectInView(isWorksSectInView);
    setIsContactSectInView(isContactSectInView);
    setIsColophonSectInView(isColophonSectInView);
  }, [
    isAboutSectInView,
    isWorksSectInView,
    isContactSectInView,
    isColophonSectInView,
    setIsAboutSectInView,
    setIsWorksSectInView,
    setIsContactSectInView,
    setIsColophonSectInView,
  ]);

  return (
    <div className="flex flex-col items-stretch gap-[0svh]">
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
        className="space-y-4 overflow-hidden px-4 pt-16"
      >
        <h2 className="mx-2 font-serif text-5xl max-md:text-4xl">
          Who&apos;s <span className="italic">Finisus?</span>
        </h2>

        <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-lg border border-border/35 bg-card/50 px-4 py-6 shadow-md backdrop-blur-[3px]">
          <span className="font-serif text-2xl font-medium max-md:text-xl">
            <span className="italic">Finisus</span> refers to the other half of
            my split personality.
            <br />
            <br />I try my best to uphold the four tenets of&nbsp;
            <span className="italic">Finisus,</span>
            <br />
            &nbsp;1. Always be aping.
            <br />
            2. Always be building.
            <br />
            3. Maximize shareholder value.
            <br />
            4. Never disclose.
            <br />
          </span>

          <div className="mx-auto py-4 opacity-75">
            <NubcatFourAscii />
          </div>
        </div>
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
        className="space-y-4 overflow-hidden px-4 pt-16"
      >
        <h2 className="mx-2 font-serif text-5xl max-md:text-4xl">
          Previous Works
        </h2>

        <div className="flex h-full flex-col items-start justify-start gap-6 overflow-hidden rounded-lg border border-border/35 bg-card/50 px-4 py-6 shadow-md backdrop-blur-[3px]">
          <span className="font-serif text-2xl font-medium max-md:text-xl">
            Here are some of my works,
            <br />
            click on preview&apos;s image to open it in a new tab.
          </span>

          <Works />
        </div>
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
        className="relative space-y-4 overflow-hidden px-4 pt-16"
      >
        <h2 className="mx-2 font-serif text-5xl max-md:text-4xl">
          Wanna work together?
        </h2>

        <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-lg border border-border/35 bg-card/50 px-4 py-6 shadow-md backdrop-blur-[3px]"></div>
      </motion.section>

      <section
        id="colophon"
        aria-label="Colophon"
        ref={colophonSectRef}
        className="relative flex flex-col gap-4 overflow-hidden px-4 pt-16 pb-4"
      >
        <div className="z-20 flex flex-col items-center justify-start gap-2 rounded-lg border border-border/35 bg-card/50 px-4 py-6 shadow-md backdrop-blur-[3px]">
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

          <p className="font-serif text-xl font-medium text-muted-foreground max-md:text-lg">
            ::Colophon::
          </p>

          <p className="text-center font-serif text-xl font-medium max-md:text-lg">
            With love by Finisus 💛
          </p>
        </div>

        <span className="z-10 ml-auto font-mono text-xs text-muted-foreground">
          ©Sep ’25
        </span>

        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 z-0 h-1/12 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-primary blur-3xl"
        />
      </section>
    </div>
  );
}
