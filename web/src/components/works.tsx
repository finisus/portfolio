import Carousel from "@/components/ui/carousel";
import { useEffect } from "react";
import billyPreview from "../assets/work-previews/billy-preview[1918x1076].webp";
import catwifgoldPreview from "../assets/work-previews/catwifgold-preview[1918x1076].webp";
import ceicatPfpGenPreview from "../assets/work-previews/ceicat-pfpgen-preview[1918x1076].webp";
import ceicatPreview from "../assets/work-previews/ceicat-preview[1918x1076].webp";
import chomikPreview from "../assets/work-previews/chomik-preview[1918x1076].webp";
import failanaPreview from "../assets/work-previews/failana-preview[1918x1076].webp";
import lethimcookPreview from "../assets/work-previews/lethimcook-preview[1918x1076].webp";
import lickcatPreview from "../assets/work-previews/lickcat-preview[1918x1076].webp";
import mochadogPreview from "../assets/work-previews/mocha-dog-preview[1918x1076].webp";
import mythicalpullPreview from "../assets/work-previews/mythicalpull-preview[1918x1076].webp";
import nyanpopPreview from "../assets/work-previews/nyanpop-preview[1918x1076].webp";
import reetardsPreview from "../assets/work-previews/reetards-preview[1918x1076].webp";
import ricardomemePreview from "../assets/work-previews/ricardo-meme-preview[1918x1076].webp";
import skbdiPreview from "../assets/work-previews/skbdi-preview[1918x1076].webp";
import solanacartelPreview from "../assets/work-previews/solana-cartel-preview[1918x1076].webp";
import torocatPreview from "../assets/work-previews/torocat-preview[1918x1076].webp";
import wechoosewealthPreview from "../assets/work-previews/we-choose-wealth-preview[1918x1076].webp";
import y2kPreview from "../assets/work-previews/y2k-preview[1918x1076].webp";

const imgPreviews = [
  ceicatPreview,
  ceicatPfpGenPreview,
  billyPreview,
  y2kPreview,
  chomikPreview,
  wechoosewealthPreview,
  skbdiPreview,
  solanacartelPreview,
  lethimcookPreview,
  failanaPreview,
  catwifgoldPreview,
  torocatPreview,
  mochadogPreview,
  reetardsPreview,
  ricardomemePreview,
  nyanpopPreview,
  mythicalpullPreview,
  lickcatPreview,
];

const imgLinks = [
  "https://finisus-ceicat.vercel.app",
  "https://finisus-ceicat-pfpgen.vercel.app",
  "https://finisus-billy.vercel.app",
  "https://finisus-y2k.vercel.app",
  "https://finisus-chomik.vercel.app",
  "https://finisus-wechosewealth.vercel.app",
  "https://finisus-skbdi.vercel.app",
  "https://finisus-solanacartel.vercel.app",
  "https://finisus-lethimcook.vercel.app",
  "https://finisus-failana.vercel.app",
  "https://finisus-catwifgold.vercel.app",
  "https://finisus-toroinoue.vercel.app",
  "https://finisus-mochadog.vercel.app",
  "https://finisus-reetards.vercel.app",
  "https://finisus-ricardo.vercel.app",
  "https://finisus-nyanpop.vercel.app",
  "https://finisus-mythicalpull.vercel.app",
  "https://finisus-lickcat.vercel.app",
];

export default function Works() {
  useEffect(() => {
    const imgPreviewsLength = imgPreviews.length;
    const links: Array<HTMLLinkElement> = new Array(imgPreviewsLength);

    for (let i = 0; i < imgPreviewsLength; i++) {
      const imgSrc = imgPreviews[i];
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = imgSrc;
      link.as = "image";
      document.head.appendChild(link);
      links[i] = link;
    }

    return () => {
      for (let j = 0; j < imgPreviewsLength; j++) {
        const link = links[j];
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <Carousel
      dir="ltr"
      scrollPixelsPerSec={1.5}
      opts={{ direction: "ltr", loop: true }}
    >
      {imgPreviews.map((imgSrc, idx) => (
        <div
          key={`${idx}-${imgSrc}`}
          className="relative rounded-2xl border border-border/70 bg-transparent max-md:rounded-xl"
        >
          <div className="group h-[60svh] w-full rounded-2xl p-2">
            <img
              src={imgSrc}
              alt=""
              height={1918}
              width={1076}
              className="h-full w-full rounded-lg object-cover"
            />

            <a
              href={imgLinks[idx]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-2 z-10 flex cursor-default items-center justify-center rounded-lg bg-background/50 opacity-0 backdrop-blur-[3px] transition-opacity group-hover:cursor-pointer group-hover:opacity-100"
            >
              <span className="text-sm font-medium text-foreground">
                View Project
              </span>
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
