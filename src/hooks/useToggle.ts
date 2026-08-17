import { useState } from "react";

export function useToggle(
  initialValue = false
) {
  const [value, setValue] =
    useState(initialValue);

  function toggle() {
    setValue(
      previousValue =>
        !previousValue
    );
  }

  return {
    value,
    toggle,
  };
}