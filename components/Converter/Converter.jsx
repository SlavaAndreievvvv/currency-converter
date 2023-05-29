import clsx from "clsx";
import PropTypes from "prop-types";

import { SwapCard } from "../SwapCard";
import { Button } from "../Button";
import { RateCard } from "../RateCard";

import styles from "./Converter.module.css";

export const Converter = () => {
  return (
    <div className={styles.container}>
      <SwapCard className={styles.card} />
      <SwapCard className={styles.card} />
      <Button className={styles.button} />
      <RateCard className={styles.rate} />
    </div>
  );
};
