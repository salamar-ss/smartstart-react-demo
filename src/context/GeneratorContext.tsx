import { createContext, useState } from "react";

type GeneratorFormData = {
  businessName: string;
  audience: string;
  offer: string;
  transformation: string;
  templateType: string;
  bonuses: string;
  guarantee: string;
};

type GeneratorContextType = {
  formData: GeneratorFormData;

  setFormData: React.Dispatch<React.SetStateAction<GeneratorFormData>>;
};

const initialFormData: GeneratorFormData = {
  businessName: "",
  audience: "",
  offer: "",
  transformation: "",
  templateType: "coach",
  bonuses: "",
  guarantee: "",
};

export const GeneratorContext = createContext<GeneratorContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export function GeneratorProvider({ children }: Props) {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <GeneratorContext.Provider value={{ formData, setFormData }}>
      {children}
    </GeneratorContext.Provider>
  );
}