import { Element } from "./Element";

export type Newsletter = {
  title: string;
  snippet: string;
  imagesFolderPath: string;
  content?: string;
  elements: Array<Element>;
  currentElement: string;
  currentElementOptions?: any;
};
