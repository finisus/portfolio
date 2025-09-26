import {
  getTimeStringEST,
  getTimeStringJST,
  getTimeStringUTC,
} from "@/utils/time";
import { create } from "zustand";

interface TimeState {
  currentTimeEST: string;
  currentTimeJST: string;
  currentTimeUTC: string;
  updateTime: () => void;
}

export const useTimeStore = create<TimeState>((set) => ({
  currentTimeEST: getTimeStringEST(),
  currentTimeJST: getTimeStringJST(),
  currentTimeUTC: getTimeStringUTC(),
  updateTime: () =>
    set({
      currentTimeEST: getTimeStringEST(),
      currentTimeJST: getTimeStringJST(),
      currentTimeUTC: getTimeStringUTC(),
    }),
}));
