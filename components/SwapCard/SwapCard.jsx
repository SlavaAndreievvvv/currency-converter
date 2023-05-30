import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./SwapCard.module.css";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { Loader } from "../Loader";

export const SwapCard = ({
  className,
  icon,
  value,
  onChange,
  base,
  convertTo,
  loader,
  isBuy,
}) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.head}>
        <span className={styles.text}>{isBuy ? "You buy" : "You sell"}</span>
      </div>
      <div className={styles.body}>
        <Icon name={icon} className={styles.icon} />
        <span className={styles.value}>{base ?? convertTo}</span>
        <div className={styles.inputWrapper}>
          {loader ? (
            <Loader />
          ) : (
            <Input className={styles.input} value={value} onChange={onChange} />
          )}
        </div>
      </div>
    </div>
  );
};

SwapCard.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  base: PropTypes.string,
  icon: PropTypes.string,
  isBuy: PropTypes.bool,
};
