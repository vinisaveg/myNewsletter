import { Element } from "../interfaces/Element";

/**
 * Updates all images with the correct img src path
 *
 * @param {Document} page The Newsletter Page Document
 * @param {string} imageFolderPath The folder where the images sits
 * @param {Array<Element>} elements The newsletters elements array
 * @return {Document} The page Document
 */
export const handleImagePaths = (
  page: Document,
  imageFolderPath: string,
  elements: Array<Element>
): Document => {
  //Update all images with the Image Folder Path and name
  page.querySelectorAll(".img-component").forEach((child) => {
    // Get all images inside the component
    child.querySelectorAll("img").forEach((img) => {
      let imgRealSrc = img.getAttribute("data-real-src");

      // Update the img src
      if (imgRealSrc) {
        img.src = `./${imageFolderPath}/${imgRealSrc}`;
      }
    });
  });

  return page;
};
