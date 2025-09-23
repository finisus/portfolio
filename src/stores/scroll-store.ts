import { create } from "zustand";

interface ScrollStore {
  scrollY: number;
  showFilledNavbar: boolean;
  setScrollY: (y: number) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollY: 0,
  showFilledNavbar: false,

  setScrollY: (y: number) =>
    set({
      scrollY: y,
      showFilledNavbar: y > 48,
    }),
}));
