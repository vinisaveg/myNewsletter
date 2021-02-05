import { cleanHTML } from "./cleanHTML";

const htmlFile = "http://localhost:3000/newsletter.html";

// Function will receive a content (string)
export const generateNewsletter = (
  title: string,
  snippet: string,
  content: string
): Promise<Document> => {
  return new Promise((resolve, reject) => {
    // Fetch the newsletter Document
    fetch(htmlFile)
      .then((response) => response.text())
      .then((response) => {
        let parser = new DOMParser();

        //parse text response to Document DOM Object
        let newsletter = parser.parseFromString(response, "text/html");

        //inset the Newsletter title
        newsletter.title = title;

        // create a span with the Newsletter Snippet and add it to the Document
        let snippetSpan = document.createElement("span");
        snippetSpan.innerHTML = snippet;

        newsletter.querySelector("#snippet")?.appendChild(snippetSpan);

        //create a div to insert the content passed, which was grabbed from ui
        let body = document.createElement("div");

        //insert the content from ui inside the new div (body)
        body.innerHTML = content;

        // Cleaning the HTML content
        cleanHTML(body);

        // I'll need to insert the minified css in here :thinking:

        //checks content and append into the documment inside #newsletter div
        if (content) {
          newsletter.getElementById("newsletter")?.appendChild(body);

          // return the document with the new content appended
          resolve(newsletter);
        } else {
          reject();
        }
      })
      .catch((error) => console.log(error));
  });
};
