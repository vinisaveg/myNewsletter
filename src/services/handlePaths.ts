// import path from "path";

export const handlePaths = (src: string) => {
  let newSrc = src.split("/");

  let imageName = newSrc[newSrc.length - 1];

  let imageNewSrc = `./src/${imageName}`;

  // console.log(newSrc);
  // console.log(imageName);
  // console.log(imageNewSrc);
  // console.log(path.dirname("https://images.pexels.com/photos/"));
};
