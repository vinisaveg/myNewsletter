import React, { FunctionComponent } from "react";

import { ButtonPrimaryProps } from "./types";

import "./buttonPrimary.css";

const ButtonPrimary: FunctionComponent<ButtonPrimaryProps> = ({
  text,
  link,
}) => {
  return (
    <div className="button-wrapper">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="button-primary"
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonPrimary;
