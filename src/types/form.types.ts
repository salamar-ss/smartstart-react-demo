export type GeneratorFormData = {
  businessName: string;
  audience: string;
  offer: string;
  transformation: string;
  templateType: string;
  bonuses: string;
  guarantee: string;
};

export type FormFieldEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;