import { ReactElement } from "react";

export type Element = {
  id: string;
  name: string;
  component?: ReactElement;
  imageName?: string;
};
