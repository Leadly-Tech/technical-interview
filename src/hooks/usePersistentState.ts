import { useEffect, useState } from "react";

export function usePersistentState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hasHydrated, setHasHydrated] = useState(false); // You may disregard this - it prevents the app from rendering before the state is hydrated

  useEffect(() => {
    try {
    } catch {}
    setHasHydrated(true);
  }, [key]);

  useEffect(() => {
    if (hasHydrated) {
      try {
      } catch {}
    }
  }, [key, value, hasHydrated]);

  return [value, setValue, hasHydrated] as const;
}
