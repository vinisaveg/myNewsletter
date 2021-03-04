import { Element } from "./Element";

export type Newsletter = {
  title: string;
  snippet: string;
  imagesFolderPath: string;
  elements: Array<Element>;
  content?: string;
  currentElement: string;
  currentElementOptions?: { [key: string]: string };
  isUpdating: boolean;
  updatingId: string;
  updatingLayoutFields: Array<string>;
  updatingLayoutFieldsValues?: [{ [key: string]: string }];
};
