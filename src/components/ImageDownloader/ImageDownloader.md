A React component which will force a jpeg download of an image URL.

Built for the use case of downloading JPG images hosted via a IIIF image server.

Note the component renders as an HTML `button` element. You can customize the style by passing in additional `props` to the component such as `className` or maybe `data-testid="my-button"`. These `restProps` are spread onto the `button` element.

```js static
import { ImageDownloader } from "@samvera/image-downloader";
```

```jsx padded
<>
  <ImageDownloader
    imageUrl={`https://iiif.stack.rdc.library.northwestern.edu/iiif/2/8f7bf326-e71d-4b6f-abb8-f6a40f412883/full/3000,/0/default.jpg`}
    imageTitle={`Ima Title`}
    className="my-beautiful-button-class"
    style={{ padding: "10px" }}
  >
    Download JPEG
  </ImageDownloader>
</>
```
