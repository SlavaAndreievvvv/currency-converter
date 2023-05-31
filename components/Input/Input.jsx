import styles from "./Input.module.css";
import { forwardRef } from "react";

import PropTypes from "prop-types";
import clsx from "clsx";

export const Input = forwardRef(
  (
    {
      disabled,
      className,
      value,
      onChange = () => {},
      placeholder = "0.00",
      onBlur,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type="text"
        className={clsx(styles.input, className)}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  ref: PropTypes.any,
  onBlur: PropTypes.func,
};
