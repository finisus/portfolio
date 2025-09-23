import { create } from "zustand";

interface ScreenStore {
  screenX: number;
  scrollY: number;
  showFilledNavbar: boolean;
  showFilledExtLinks: boolean;
  setScreenX: (x: number) => void;
  setScrollY: (y: number) => void;
}

export const useScreenStore = create<ScreenStore>((set) => ({
  screenX: 768,
  scrollY: 0,
  showContentMd: false,
  showFilledNavbar: false,
  showFilledExtLinks: false,

  setScreenX: (x: number) => set({ screenX: x }),

  setScrollY: (y: number) =>
    set({
      scrollY: y,
      showFilledNavbar: y > 48,
      showFilledExtLinks: y > 48,
    }),
}));
