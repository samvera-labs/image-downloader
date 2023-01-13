You can import and use `ImageDownloader` vanilla JavaScript functions directly (ie. in vanilla JavaScript, jQuery, Vue, etc.).

```js static
import { makeBlob, mimicDownload } from "@samvera/image-downloader";

var myButton = document.getElementById("my-button");

myButton.addEventListener("click", async (e) => {
  const response = makeBlob("https://your-image-url");
  if (!response || response.error) {
    // Handle errors getting image
    return;
  }
  mimicDownload(response, "your-jpg-title");
});
```

```jsx padded
import makeBlob from "../../lib/make-blob";
import mimicDownload from "../../lib/mimic-download";

// Sample image url
var url =
  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/8f7bf326-e71d-4b6f-abb8-f6a40f412883/full/3000,/0/default.jpg";

<PlainJavaScript>
  <button
    // In a vanilla JS implementation, you'd replace "onClick" below
    onClick={async () => {
      let response = await makeBlob(url);
      if (!response || response.error) {
        alert("Error fetching the image");
        return;
      }
      mimicDownload(response, "your-jpg-title");
    }}
  >
    Download using vanilla JS exports only
  </button>
</PlainJavaScript>;
```
