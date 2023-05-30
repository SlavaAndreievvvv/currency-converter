import styles from "./Input.module.css";

import PropTypes from "prop-types";
import clsx from "clsx";

export const Input = ({
  disabled,
  className,
  value,
  onChange = () => {},
  placeholder = "0.00",
}) => {
  return (
    <input
      inputMode="numeric"
      className={clsx(styles.input, className)}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
