import { useTimeStore } from "@/stores/time-store";
import { useEffect } from "react";

/** Keeps the current time state fresh */
export function useUpdateCurrentTime() {
  const { updateTime } = useTimeStore();

  useEffect(() => {
    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateTime]);
}
