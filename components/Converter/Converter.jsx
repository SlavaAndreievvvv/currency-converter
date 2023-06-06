import { useCallback, useEffect, useRef, useState } from "react";
import numeral from "numeral";
import clsx from "clsx";

import { SwapCard } from "../SwapCard";
import { Button } from "../Button";
import { RateCard } from "../RateCard";
import { getCurrencyPrice } from "../../api/getCurrencyPrice";
import { useLoading } from "../../utils/hooks/useLoading";

import styles from "./Converter.module.css";

export const Converter = ({ price }) => {
  const [base, setBase] = useState("BTC");
  const [baseAmount, setBaseAmount] = useState("");
  const [convertTo, setConvertTo] = useState("UAH");
  const [convertToAmount, setConvertToAmount] = useState("");
  const [rate, setRate] = useState(price);

  const [baseLoading, startBaseLoading, stopBaseLoading] = useLoading(false);
  const [convertToLoading, startConvertToLoading, stopConvertToLoading] =
    useLoading(false);
  const [rateLoading, startRateLoading, stopRateLoading] = useLoading(false);

  const swapCalledRef = useRef(false);

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
    if (base === "BTC") {
      setConvertToAmount(convertedAmount * price);
    } else {
      setConvertToAmount(convertedAmount / price);
    }
  };

  const calculateReverse = () => {
    const convertedAmount = parseFloat(convertToAmount);
    if (isNaN(convertedAmount)) {
      setBaseAmount("");
      return;
    }

    if (base !== "BTC") {
      setBaseAmount(convertedAmount * price);
    } else {
      setBaseAmount(convertedAmount / price);
    }
  };

  const handleSwap = () => {
    swapCalledRef.current = true;
    setBase(convertTo);
    setConvertTo(base);
    setConvertToAmount(baseAmount);
    setBaseAmount(convertToAmount);
    setRate(1 / rate);
  };

  const handleBaseInput = (e) => {
    const value = e.target.value;
    setBaseAmount(value);
    startConvertToLoading();
    setTimeout(() => {
      stopConvertToLoading();
    }, 1000);
  };

  const handleConvertToInput = (e) => {
    const value = e.target.value;
    setConvertToAmount(value);
    startBaseLoading();
    setTimeout(() => {
      stopBaseLoading();
    }, 1000);
  };

  const handleRefresh = useCallback(async () => {
    try {
      const newPrice = await getCurrencyPrice();
      let newRate;

      if (base === "BTC") {
        newRate = newPrice;
      } else {
        newRate = 1 / newPrice;
      }

      setRate(newRate);
    } catch (error) {
      console.error("Failed to refresh currency rate:", error);
    }
  }, [base, convertTo]);

  const rateFormat = numeral(rate).format("0,0.[00000000]");

  return (
    <div className={styles.container}>
      <SwapCard
        icon={base}
        className={clsx(styles.card, styles.animation)}
        value={baseAmount}
        onChange={handleBaseInput}
        base={base}
        loader={baseLoading}
        label="You bay"
      />
      <SwapCard
        icon={convertTo}
        convertTo={convertTo}
        className={clsx(styles.card, styles.animation)}
        value={convertToAmount}
        onChange={handleConvertToInput}
        loader={convertToLoading}
        label="You sell"
      />
      <Button
        className={clsx(styles.button, styles.animation)}
        onClick={handleSwap}
      />

      <RateCard
        className={clsx(styles.rate, styles.animation)}
        rate={rateFormat}
        amount={1}
        base={base}
        convertTo={convertTo}
        loader={rateLoading}
        onClick={handleRefresh}
      />
    </div>
  );
};
