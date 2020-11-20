import React, { FunctionComponent } from "react";

import "./hero.css";

interface HeroProps {
  imagePath?: string;
  link?: string;
  copy?: string;
  subCopy?: string;
}

const Hero: FunctionComponent<HeroProps> = ({ link, copy, subCopy }) => {
  return (
    <div className="hero">
      <a href={link}>
        <img
          src="https://avatarfiles.alphacoders.com/228/228143.jpg"
          alt="Rick"
        />
      </a>

      <p>{copy}</p>

      <p>{subCopy}</p>
    </div>
  );
};

export default Hero;
