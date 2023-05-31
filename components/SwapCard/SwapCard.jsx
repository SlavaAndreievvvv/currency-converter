import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

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
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleCardClick = () => {
    inputRef.current.focus();
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div
      className={clsx(styles.card, className, { [styles.focused]: focused })}
      onClick={handleCardClick}
    >
      <div className={styles.head}>
        <span className={styles.text}>{isBuy ? "You buy" : "You sell"}</span>
      </div>
      <div className={styles.body}>
        <Icon name={icon} className={styles.icon} />
        <span className={styles.value}>{base ?? convertTo}</span>
        {loader ? (
          <Loader />
        ) : (
          <Input
            ref={inputRef}
            className={styles.input}
            value={value}
            onChange={onChange}
            onBlur={handleInputBlur}
          />
        )}
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
