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
