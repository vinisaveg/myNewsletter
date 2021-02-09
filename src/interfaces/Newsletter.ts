import { Element } from "./Element";

export type Newsletter = {
  title: string;
  snippet: string;
  imagesFolderPath: string;
  elements: Array<Element>;
  content?: string;
  currentElement: string;
  currentElementOptions?: any; // set a better type
  isUpdating: boolean;
};
