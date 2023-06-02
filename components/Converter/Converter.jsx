import { useCallback, useEffect, useRef, useState } from "react";
import numeral from "numeral";
import clsx from "clsx";

import { SwapCard } from "../SwapCard";
import { Button } from "../Button";
import { RateCard } from "../RateCard";
import { getCurrencyPrice } from "../../api/getCurrencyPrice";

import styles from "./Converter.module.css";

export const Converter = ({ price }) => {
  const [base, setBase] = useState("BTC");
  const [baseAmount, setBaseAmount] = useState("");
  const [convertTo, setConvertTo] = useState("UAH");
  const [convertToAmount, setConvertToAmount] = useState("");
  const swapCalledRef = useRef(false);
  const [rate, setRate] = useState(price);
  const [baseLoading, setBaseLoading] = useState(false);
  const [convertToLoading, setConvertToLoading] = useState(false);
  const [rateLoading, setRateLoading] = useState(false);
  const [isBuy, setIsBuy] = useState(true);

  useEffect(() => {
    if (!swapCalledRef.current) {
      calculate();
    }
    swapCalledRef.current = false;
  }, [baseAmount, convertTo, rate]);

  useEffect(() => {
    if (!swapCalledRef.current) {
      calculateReverse();
    }
    swapCalledRef.current = false;
  }, [convertToAmount, convertTo, rate]);

  const calculate = () => {
    const convertedAmount = parseFloat(baseAmount);
    if (isNaN(convertedAmount)) {
      setConvertToAmount("");
      return;
    }
    if (base === "BTC" && convertTo === "UAH") {
      setConvertToAmount(convertedAmount * price);
    } else if (base === "UAH" && convertTo === "BTC") {
      setConvertToAmount(convertedAmount / price);
    }
  };

  const calculateReverse = () => {
    const convertedAmount = parseFloat(convertToAmount);
    if (isNaN(convertedAmount)) {
      setBaseAmount("");
      return;
    }

    if (base === "BTC" && convertTo === "UAH") {
      setBaseAmount(convertedAmount / price);
    } else if (base === "UAH" && convertTo === "BTC") {
      setBaseAmount(convertedAmount * price);
    }
  };

  const handleSwap = () => {
    swapCalledRef.current = true;
    const tempBaseAmount = baseAmount;
    const tempConvertToAmount = convertToAmount;
    setBase(convertTo);
    setConvertTo(base);
    setConvertToAmount(tempBaseAmount);
    setBaseAmount(tempConvertToAmount);
    setRateLoading(true);
    setRate(1 / rate);
    setTimeout(() => {
      setRateLoading(false);
    }, 1000);
    setIsBuy(!isBuy);
  };

  const handleBaseInput = (e) => {
    const value = e.target.value;
    setBaseAmount(value);
    setConvertToLoading(true);
    setTimeout(() => {
      setConvertToLoading(false);
    }, 1000);
  };

  const handleConvertToInput = (e) => {
    const value = e.target.value;
    setConvertToAmount(value);
    setBaseLoading(true);
    setTimeout(() => {
      setBaseLoading(false);
    }, 1000);
  };

  const handleRefresh = useCallback(async () => {
    setRateLoading(true);
    try {
      const newPrice = await getCurrencyPrice();
      let newRate;

      if (base === "BTC" && convertTo === "UAH") {
        newRate = newPrice;
      } else if (base === "UAH" && convertTo === "BTC") {
        newRate = 1 / newPrice;
      }

      setRate(newRate);
      setTimeout(() => {
        setRateLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to refresh currency rate:", error);
    }
  }, [base, convertTo]);

  const rateFormat = rate >= 1 ? "0,00.0" : "0,00.0000000";

  return (
    <div className={styles.container}>
      <SwapCard
        icon={base}
        className={clsx(styles.card, styles.animation)}
        value={baseAmount}
        onChange={handleBaseInput}
        base={base}
        loader={baseLoading}
        isBuy={isBuy}
      />
      <SwapCard
        icon={convertTo}
        convertTo={convertTo}
        className={clsx(styles.card, styles.animation)}
        value={convertToAmount}
        onChange={handleConvertToInput}
        loader={convertToLoading}
        isBuy={!isBuy}
      />
      <Button
        className={clsx(styles.button, styles.animation)}
        onClick={handleSwap}
      />

      <RateCard
        className={clsx(styles.rate, styles.animation)}
        rate={numeral(rate).format(rateFormat)}
        amount={1}
        base={base}
        convertTo={convertTo}
        loader={rateLoading}
        onClick={handleRefresh}
      />
    </div>
  );
};
