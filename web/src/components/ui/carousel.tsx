import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { Children, type ReactNode } from "react";

type PropType = {
  children: ReactNode;
  dir: "ltr" | "rtl";
  scrollPixelsPerSec?: number;
  opts?: EmblaOptionsType;
};

export default function Carousel({
  children,
  dir = "rtl",
  scrollPixelsPerSec = 2,
  opts,
}: PropType) {
  const [emblaRef] = useEmblaCarousel(opts, [
    Autoplay({
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      speed: scrollPixelsPerSec,
    }),
  ]);

  return (
    <div className="embla" dir={dir}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Children.map(children, (child, index) => (
            <div className="embla__slide" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
