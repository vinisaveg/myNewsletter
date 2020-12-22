export type Layout = {
  name: string;
  fields: {
    [key: string]: string;
  };
  element: (props: any) => JSX.Element;
};
