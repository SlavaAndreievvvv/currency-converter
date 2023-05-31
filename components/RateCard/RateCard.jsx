import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./RateCard.module.css";
import { Button } from "../Button";
import { Loader } from "../Loader";

export const RateCard = ({
  className,
  onClick,
  rate,
  amount,
  base,
  convertTo,
  loader,
}) => {
  return (
    <div className={clsx(styles.card, className)}>
      {!loader ? (
        <>
          <span className={styles.text}>
            {amount} {base}
          </span>
          <span className={styles.equals}>=</span>
          <span className={clsx(styles.text, styles.rate)}>{rate}</span>
          <span className={clsx(styles.text, styles.grow)}>{convertTo}</span>
        </>
      ) : (
        <Loader className={styles.growLoad} />
      )}
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
  // rate: PropTypes.string,
  // amount: PropTypes.string,
  base: PropTypes.string,
  convertTo: PropTypes.string,
};
