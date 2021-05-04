import React from "react";
import { render } from "@testing-library/react";
import ImageDownloader from "./ImageDownloader";

const buttonTestId = "standard-button";

describe("ImageDownloader component", () => {
  it("renders a download button with pass through content", () => {
    const { getByTestId, getByText } = render(
      <ImageDownloader data-testid={buttonTestId}>Download me</ImageDownloader>
    );

    expect(getByTestId(buttonTestId));
    expect(getByText(/download me/i));
  });
});
