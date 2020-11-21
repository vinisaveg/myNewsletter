import { createContext } from "react";

import { Newsletter } from "../interfaces/Newsletter";

export const InitialAppContext: Newsletter = {
  title: "",
  snippet: "",
  imagesFolderPath: "",
  content: "",
  elements: [],
  currentElement: "",
};

export const AppContext = createContext<
  [Newsletter, React.Dispatch<React.SetStateAction<Newsletter>>]
>([InitialAppContext, () => {}]);
