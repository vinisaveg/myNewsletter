export type Layout = {
  name: string;
  fields: {
    [key: string]: string;
  };
  element: (props: { [key: string]: string }) => JSX.Element;
};
