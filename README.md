# @samvera/image-downloader

JavaScript modules and a convenience React component which will force a jpeg download of an image URL. Built for the use case of needing to offer JPG downloads for images hosted via a IIIF image server.

## Getting Started

Install the package:

```bash
npm install @samvera/image-downloader

```

## Usage

Import JavaScript modules into your project to use directly:

```jsx
import { makeBlob, mimicDownload } from "@samvera/image-downloader";

var url =
  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/8f7bf326-e71d-4b6f-abb8-f6a40f412883/full/3000,/0/default.jpg";

// HTML or JSX file
<button
  onClick={async () => {
    let response = await makeBlob(url);

    // Handle any errors
    if (!response || response.error) {
      // Customize this for your app
      alert("Error fetching the image");

      return;
    }

    mimicDownload(response, "your-jpg-title");
  }}
>
  Download me
</button>;
```

### Customizing makeBlob() requests

The `makeBlob()` function utilizes [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) for requests. You can chose to customize the `options` object.

```js
makeBlob(url, { credentials: "include" });
```

### React

If importing into a React project, you can import the component directly:

```jsx
import { ImageDownloader } from "@samvera/image-downloader";

<ImageDownloader
  imageUrl={`https://your-image-url`}
  imageTitle={`Beautiful image`}
>
  Download JPEG
</ImageDownloader>;
```

For complete `props` and usage examples, [view the docs](https://samvera-labs.github.io/image-downloader/)

## Customizing

You can customize the look and feel of the button. [View the docs](https://samvera-labs.github.io/image-downloader/)

## Authors

- **Adam J. Arling** - _UI Developer_ - [Northwestern Univeristy Libraries](https://github.com/nulib) [Github](https://github.com/adamjarling)

## Built With

- [React](https://reactjs.org/) - JavaScript component library
- [Rollup](https://rollupjs.org/) - Rollup JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Styleguidist](https://react-styleguidist.js.org/) - Local dev environment &amp; documentation

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
