import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./RateCard.module.css";
import { Button } from "../Button";

export const RateCard = ({ className, onClick }) => {
  return (
    <div className={clsx(styles.card, className)}>
      <span className={styles.text}>1 BTC</span>
      <span className={styles.equals}>=</span>
      <span className={clsx(styles.text, styles.grow)}>973,091.42 UAH</span>
      <Button
        variant="subtle"
        icon="refresh"
        className={styles.button}
        onClick={onClick}
      />
    </div>
  );
};

RateCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
