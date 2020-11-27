import { Element } from "../interfaces/Element";

export const handleImagePaths = (
  page: Document,
  imageFolderPath: string,
  elements: Array<Element>
): Document => {
  //Update all images with the Image Folder Path
  // Need to change if there is a layou w/ multiple images :thinking:
  page.querySelectorAll(".hero").forEach((child) => {
    let elementFound = elements.find(
      (element) => element.id === child.getElementsByTagName("img")[0].id
    );

    // update the img src
    child.getElementsByTagName(
      "img"
    )[0].src = `./${imageFolderPath}/${elementFound?.imageName}`;
  });

  return page;
};
