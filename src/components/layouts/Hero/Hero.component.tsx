import React, { FunctionComponent } from "react";

import { HeroProps } from "./types";

import "./hero.css";

const Hero: FunctionComponent<HeroProps> = ({
  link,
  copy,
  subCopy,
  imageName,
}) => {
  return (
    <div className="hero img-component">
      <a rel="noreferrer" target="_blank" href={link}>
        <img
          data-real-src={imageName}
          src="https://raw.githubusercontent.com/vinisaveg/myNewsletter/main/preview/img/test.jpg"
          alt="Default"
          className="hero-image"
        />
      </a>

      <p className="hero-copy">{copy}</p>

      <p className="hero-sub-copy">{subCopy}</p>
    </div>
  );
};

export default Hero;
