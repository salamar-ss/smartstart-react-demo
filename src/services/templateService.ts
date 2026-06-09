import type { Template } from "../types/template.types";

export async function getTemplates(): Promise<Template[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to load templates");
  }

  const data: Template[] = await response.json();

  return data;
}

export async function getTemplateById(id: string): Promise<Template> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("Template not found");
  }

  const data: Template = await response.json();

  return data;
}