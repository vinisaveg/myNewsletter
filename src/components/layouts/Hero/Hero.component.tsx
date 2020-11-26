import React, { FunctionComponent } from "react";

import "./hero.css";

interface HeroProps {
  imagePath?: string;
  link?: string;
  copy?: string;
  subCopy?: string;
  id?: string;
}

const Hero: FunctionComponent<HeroProps> = ({ link, copy, subCopy, id }) => {
  return (
    <div className="hero">
      <a href={link}>
        <img
          id={id}
          src="https://avatarfiles.alphacoders.com/228/228143.jpg"
          alt="Rick"
          className="image"
        />
      </a>

      <p>{copy}</p>

      <p>{subCopy}</p>
    </div>
  );
};

export default Hero;
