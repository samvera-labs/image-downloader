import React from "react";
import PropTypes from "prop-types";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Button = ({
  children,
  isText,
  isDanger,
  isPrimary,
  ...passThruProps
}) => {
  let backgroundColor = "#ccc";
  let btnColor = "black";

  if (isPrimary) {
    backgroundColor = "teal";
    btnColor = "#fff";
  } else if (isDanger) {
    backgroundColor = "red";
    btnColor = "#fff";
  } else if (isText) {
    backgroundColor = "transparent";
  }

  return (
    <button
      css={css`
        background: ${backgroundColor};
        border-color: ${backgroundColor};
        color: ${btnColor};
      `}
      {...passThruProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Cancel button */
  isText: PropTypes.bool,
  /** Indicates destructive action to follow */
  isDanger: PropTypes.bool,
  /** Primary call to action button */
  isPrimary: PropTypes.bool,
};
Button.defaultProps = {
  isText: false,
  isDanger: false,
  isPrimary: false,
};

export default Button;
