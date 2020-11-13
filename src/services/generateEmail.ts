const htmlFile = "http://localhost:3000/newsletter.html";

// Function will receive a content
export const generate = async () => {
  await fetch(htmlFile)
    .then((response) => response.text())
    .then((response) => {
      let parser = new DOMParser();

      let newsletter = parser.parseFromString(response, "text/html");

      //Append content received into the documment

      console.log(newsletter);

      console.log(newsletter.getElementById("newsletter"));

      // return the document with the new content appended
    })

    .catch((error) => console.log(error));
};
