import FileSaver from "file-saver";

export const buildAndShip = (page: Document) => {
  // Create a blob with the Page Content
  var blob = new Blob([page.documentElement.innerHTML], {
    type: "text/html;charset=utf-8",
  });

  // Save and download the file
  FileSaver.saveAs(blob, "newsletter.html");
};
