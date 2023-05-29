import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./SwapCard.module.css";
import { Icon } from "../Icon";
import { Input } from "../Input";

export const SwapCard = ({ className, value, onChange }) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.head}>
        <span className={styles.text}>You sell</span>
      </div>
      <div className={styles.body}>
        <Icon name="bitcoin" className={styles.icon} />
        <span className={styles.value}>BTC</span>
        <Input className={styles.input} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

SwapCard.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
