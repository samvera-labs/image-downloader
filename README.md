# @samvera/image-downloader

JavaScript modules and a convenience React component which will force a jpeg download of an image URL. Built for the use case of needing to offer JPG downloads for images hosted via a IIIF image server.

## Using the package

First install the package:

```
npm install @samvera/image-downloader
```

And import the modules into your project:

```
import { makeBlob, mimicDownload } from "@samvera/image-downloader";
```

### React

If importing into a React project, you can import the component directly:

```
import { ImageDownloader } from "@samvera/image-downloader";

<ImageDownloader
  imageUrl={`https://your-image-url`}
  imageTitle={`Beautiful image`}
>
  Download JPEG
</ImageDownloader>
```

For all `props` and usage examples, view the documentation

## Customizing

You can customize the look and feel of the button. View documentation for examples.

## Thanks to

SVG Icons: https://codepen.io/aurer/pen/jEGbA

## Authors

- **Adam J. Arling** - _UI Developer_ - [Northwestern Univeristy Libraries](https://github.com/nulib) [Github](https://github.com/adamjarling)

## Built With

- [React](https://reactjs.org/) - JavaScript component library
- [Rollup](https://rollupjs.org/) - Rollup JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Styleguidist](https://react-styleguidist.js.org/) - Local dev environment &amp; documentation

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
