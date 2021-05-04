export default function mimicDownload(blob, imageTitle) {
  const a = document.createElement("a");
  a.href = blob;
  a.download = imageTitle;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
