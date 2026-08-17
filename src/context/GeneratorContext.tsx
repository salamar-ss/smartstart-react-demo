import { createContext, useReducer, type ReactNode } from "react";

import { generatorReducer, initialFormData } from "../reducers/generatorReducer";

import type { GeneratorFormData } from "../types/form.types";

type GeneratorContextType = {
  formData: GeneratorFormData;

  updateField: (
    name: keyof GeneratorFormData,
    value: string
  ) => void;

  resetForm: () => void;
};

export const GeneratorContext =
  createContext<GeneratorContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function GeneratorProvider({ children }: Props) {
  const [formData, dispatch] = useReducer(
    generatorReducer,
    initialFormData
  );

  function updateField(
    name: keyof GeneratorFormData,
    value: string
  ) {
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        name,
        value,
      },
    });
  }

  function resetForm() {
    dispatch({
      type: "RESET_FORM",
    });
  }

  return (
    <GeneratorContext.Provider
      value={{
        formData,
        updateField,
        resetForm,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
}