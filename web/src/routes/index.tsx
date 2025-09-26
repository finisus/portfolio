import AsciiArt from "@/components/ascii-art";
import ContactForm from "@/components/contact-form";
import NubcatFourAscii from "@/components/nubcat-four-ascii";
import { Button } from "@/components/ui/button";
import Works from "@/components/works";
import { useScreenStore } from "@/stores/screen-store";
import { useTimeStore } from "@/stores/time-store";
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
  const { currentTimeEST, currentTimeJST, currentTimeUTC } = useTimeStore();
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

        <h1 className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-serif text-8xl italic max-md:text-7xl dark:text-primary">
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
        className="container mx-auto space-y-3 overflow-hidden pt-16"
      >
        <h2 className="px-4 font-serif text-5xl text-muted-foreground max-md:text-4xl">
          Who&apos;s <span className="italic">Finisus?</span>
        </h2>

        <div className="flex h-full flex-col items-start justify-start space-y-3 overflow-hidden px-4">
          <span className="font-serif text-2xl font-medium max-md:text-xl">
            <span className="italic">Finisus</span> refers to the other half of
            my split personality.
          </span>
          <span className="font-serif text-2xl font-medium max-md:text-xl">
            I try my best to uphold the four tenets of&nbsp;
            <span className="italic">Finisus,</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp;Always be aping.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;Always be building.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;Maximize shareholder value.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;Never disclose.
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
        className="space-y-6 overflow-hidden pt-16"
      >
        <div className="container mx-auto space-y-3 px-4">
          <h2 className="font-serif text-5xl text-muted-foreground max-md:text-4xl">
            Previous Works
          </h2>

          <span className="font-serif text-2xl font-medium max-md:text-xl">
            Here are some of my works,
            <br />
            click on preview&apos;s image to open it in a new tab.
          </span>
        </div>

        <div className="mx-auto px-4">
          <div className="overflow-hidden rounded-lg border border-border/35 bg-card/50 p-4 backdrop-blur-[3px]">
            <Works />
          </div>
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
        className="container mx-auto space-y-3 overflow-hidden pt-16"
      >
        <h2 className="px-4 font-serif text-5xl text-muted-foreground max-md:text-4xl">
          Wanna work together?
        </h2>

        <div className="flex h-full flex-col items-start justify-start space-y-3 overflow-hidden px-4">
          <div className="flex w-fit flex-col items-start justify-start gap-1.5">
            <span className="font-serif text-2xl font-medium max-md:text-xl">
              If you live around these parts...
            </span>

            <div className="rounded-lg border border-border/35 bg-card/50 px-4 py-3 backdrop-blur-[3px]">
              <span className="flex w-80 justify-between gap-2 font-serif text-xl font-semibold text-primary max-md:ml-0 max-md:w-20 max-md:flex-col max-md:gap-1 max-md:text-base">
                <span className="w-full text-center">{currentTimeEST}</span>
                <span className="w-full text-center">{currentTimeJST}</span>
                <span className="w-full text-center">{currentTimeUTC}</span>
              </span>
            </div>

            <span className="font-serif text-2xl font-medium max-md:text-xl">
              ...expect a reply ASAP.
              <br />
              If not I&apos;m probably <s>gooning</s>
              &nbsp;sleeping, please bear with me.
            </span>
          </div>
        </div>

        <div className="w-full px-4">
          <ContactForm />
        </div>
      </motion.section>

      <section
        id="colophon"
        aria-label="Colophon"
        ref={colophonSectRef}
        className="container mx-auto overflow-hidden px-4 pt-16"
      >
        <div className="relative z-20 flex flex-col items-center justify-start gap-2 rounded-lg border border-border/35 bg-card/50 px-4 py-6 backdrop-blur-[3px]">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-serif text-2xl font-medium text-foreground max-md:text-xl">
              You can also find me at
            </h1>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://github.com/finisus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <GithubLogoIcon size={16} weight="regular" />
                </Button>
              </a>
              <a
                href="https://x.com/finisuss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <XLogoIcon size={16} weight="regular" />
                </Button>
              </a>
              <a
                href="https://telegram.me/finisus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon_sm">
                  <TelegramLogoIcon size={16} weight="regular" />
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

          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 z-0 container h-2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-90 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 z-0 container h-4/5 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-90 blur-3xl"
          />
        </div>
      </section>

      <div className="z-50 ml-auto overflow-hidden px-4 py-1">
        <span className="font-mono text-xs font-medium text-muted-foreground/50">
          ©2024-2025
        </span>
      </div>
    </div>
  );
}
