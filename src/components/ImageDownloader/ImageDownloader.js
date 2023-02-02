import React from "react";
import PropTypes from "prop-types";
import makeBlob from "../../lib/make-blob";
import mimicDownload from "../../lib/mimic-download";
import DownloadIcon from "./download-icon.svg";
import { Bars } from "svg-loaders-react";

const ImageDownloader = ({
  imageUrl,
  imageTitle,
  iconColor,
  children,
  imageUrlOptions,
  ...restProps
}) => {
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();

  async function handleClick() {
    setLoading(true);
    setError(null);

    const response = await makeBlob(imageUrl, imageUrlOptions);

    // Handle error
    if (!response || response.error) {
      setError(
        response.error
          ? response.message
          : "There was an error creating the image"
      );
      setLoading(false);
      return;
    }

    mimicDownload(response, imageTitle);
    setLoading(false);
  }

  return (
    <>
      <button onClick={handleClick} disabled={loading} {...restProps}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <Bars fill={iconColor} height="18px" width="24px" />
          ) : (
            <DownloadIcon fill={iconColor} height="18px" width="18px" />
          )}

          <span style={{ paddingLeft: "5px" }}>{children}</span>
        </div>
      </button>
      {error && <p className="image-downloader--error-message">{error}</p>}
    </>
  );
};

ImageDownloader.propTypes = {
  /** URL of image to download */
  imageUrl: PropTypes.string.isRequired,
  /** File name for download .jpeg */
  imageTitle: PropTypes.string.isRequired,
  /** Hex color value for download and loading icons */
  iconColor: PropTypes.string,
  /** Inline CSS styling */
  style: PropTypes.object,
  /** Button content (typically this would just be label text) */
  children: PropTypes.node,
};
ImageDownloader.defaultProps = {
  iconColor: "#333",
  imageUrl: "",
  imageTitle: "download",
};

export default ImageDownloader;
