import React, { FunctionComponent } from "react";

import { HeroProps } from "./types";

import "./hero.css";

const Hero: FunctionComponent<HeroProps> = ({ link, copy, subCopy, id }) => {
  return (
    <div className="hero img-component">
      <a rel="noreferrer" target="_blank" href={link}>
        <img
          id={id}
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=427&w=640"
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
