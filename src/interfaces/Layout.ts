export type Layout = {
  name: string;
  imagePreview?: string;
  fields: {
    [key: string]: string;
  };
  element: (props: { [key: string]: string }) => JSX.Element;
};
