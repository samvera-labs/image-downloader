export default async function makeBlob(imageUrl) {
  if (!imageUrl) {
    return Promise.resolve({ error: true, message: "No image URL provided" });
  }

  return fetch(imageUrl)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.blob();
      } else {
        throw Error(response.statusText);
      }
    })
    .then((blobResponse) => {
      return URL.createObjectURL(blobResponse);
    })
    .catch((e) => {
      return Promise.resolve({
        error: true,
        message: `Error creating image from url: ${e}`,
      });
    });
}
