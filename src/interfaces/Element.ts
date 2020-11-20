import { ReactElement } from "react";

export type Element = {
  id: number;
  name: string;
  element: ReactElement | undefined;
  path?: string;
};
