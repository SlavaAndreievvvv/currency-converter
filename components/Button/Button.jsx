import clsx from "clsx";
import PropTypes from "prop-types";

import { ICON_TYPES, Icon } from "../Icon";
import styles from "./Button.module.css";

export const Button = ({
  className,
  variant = "primary",
  icon = "swap",
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className, styles[`variant-${variant}`])}
      disabled={disabled}
    >
      <Icon name={icon} className={clsx(styles.icon, styles[`icon-${icon}`])} />
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "subtle"]),
  icon: PropTypes.oneOf(ICON_TYPES),
};
