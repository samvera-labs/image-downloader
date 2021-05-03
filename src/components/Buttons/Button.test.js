import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const mockClickMe = jest.fn();
const buttonTestId = "standard-button";

describe("Button component", () => {
  it("renders a regular button with pass through content", () => {
    const { getByTestId, getByText } = render(
      <Button data-testid={buttonTestId}>Plain old button</Button>
    );
    const el = getByTestId(buttonTestId);

    expect(el);
    expect(getByText(/plain old button/i));
  });

  it("handles a callback function prop", () => {
    const { getByTestId, getByText } = render(
      <Button onClick={mockClickMe} isPrimary data-testid={buttonTestId}>
        Click Me
      </Button>
    );
    const el = getByTestId(buttonTestId);

    expect(el);
    fireEvent.click(el);
    expect(mockClickMe).toHaveBeenCalled();
  });
});
