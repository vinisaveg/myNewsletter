import { ReactElement } from "react";

export type Element = {
  id: string;
  name: string;
  element?: ReactElement;
  imageName?: string;
};
