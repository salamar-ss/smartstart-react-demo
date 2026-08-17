import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] =
    useState<T>(() => {
      const item = localStorage.getItem(key);

      if (item) {
        return JSON.parse(item);
      }

      return initialValue;
    });

  function setStoredValue(newValue: T) {
    setValue(newValue);

    localStorage.setItem(key,JSON.stringify(newValue));
  }

  return [value, setStoredValue] as const;
}