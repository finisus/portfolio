import { create } from "zustand";

interface ScreenStore {
  screenX: number;
  screenY: number;
  scrollY: number;
  showFilledNavbar: boolean;
  showFilledExtLinks: boolean;
  isAboutSectInView: boolean;
  isContactSectInView: boolean;
  isWorksSectInView: boolean;
  isColophonSectInView: boolean;

  setScreenX: (x: number) => void;
  setScreenY: (y: number) => void;
  setScrollY: (y: number) => void;
  setIsAboutSectInView: (value: boolean) => void;
  setIsContactSectInView: (value: boolean) => void;
  setIsWorksSectInView: (value: boolean) => void;
  setIsColophonSectInView: (value: boolean) => void;
}

export const useScreenStore = create<ScreenStore>((set) => ({
  screenX: 768,
  screenY: 0,
  scrollY: 0,
  showFilledNavbar: false,
  showFilledExtLinks: false,
  isAboutSectInView: false,
  isContactSectInView: false,
  isWorksSectInView: false,
  isColophonSectInView: false,

  setScreenX: (x: number) => set({ screenX: x }),
  setScreenY: (y: number) => set({ screenY: y }),
  setScrollY: (y: number) =>
    set({
      scrollY: y,
      showFilledNavbar: y > 48,
      showFilledExtLinks: y > 48,
    }),
  setIsAboutSectInView: (value: boolean) => set({ isAboutSectInView: value }),
  setIsContactSectInView: (value: boolean) =>
    set({ isContactSectInView: value }),
  setIsWorksSectInView: (value: boolean) => set({ isWorksSectInView: value }),
  setIsColophonSectInView: (value: boolean) =>
    set({ isColophonSectInView: value }),
}));
