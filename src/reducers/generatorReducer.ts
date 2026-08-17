import type { GeneratorFormData } from "../types/form.types";

export const initialFormData: GeneratorFormData = {
  businessName: "",
  audience: "",
  offer: "",
  transformation: "",
  templateType: "coach",
  bonuses: "",
  guarantee: "",
};

export type GeneratorAction =
  | {
      type: "UPDATE_FIELD";
      payload: {
        name: keyof GeneratorFormData;
        value: string;
      };
    }
  | {
      type: "RESET_FORM";
    }
  | {
      type: "LOAD_DRAFT";
      payload: GeneratorFormData;
    };

export function generatorReducer(
  state: GeneratorFormData,
  action: GeneratorAction
): GeneratorFormData {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "RESET_FORM":
      return initialFormData;

    case "LOAD_DRAFT":
      return action.payload;

    default: {
      //const exhaustiveCheck: never = action;
      return state;
    }
  }
}