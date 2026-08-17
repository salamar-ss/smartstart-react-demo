import type { GeneratorFormData } from "../types/form.types";

type SaveDraftResponse = {
  success: boolean;
  message: string;
};

export async function saveGeneratorDraft(formData: GeneratorFormData): Promise<SaveDraftResponse> {
  console.log("Saving generator draft:", formData);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Draft saved successfully.",
      });
    }, 800);
  });
}