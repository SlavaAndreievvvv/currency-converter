import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import numeral from "numeral";

import { SwapCard } from "../SwapCard";
import { Button } from "../Button";
import { RateCard } from "../RateCard";
import { formattedCurrencyConverter } from "@/utils/CurrencyConverter";

import styles from "./Converter.module.css";
import { getCurrencyPrice } from "@/api/getCurrencyPrice";

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
  }, [baseAmount, convertTo]);

  useEffect(() => {
    if (!swapCalledRef.current) {
      calculateReverse();
    }
    swapCalledRef.current = false;
  }, [convertToAmount, convertTo]);

  const calculate = () => {
    const convertedAmount = parseFloat(baseAmount);
    if (isNaN(convertedAmount)) {
      setConvertToAmount("");
      return;
    }
    if (base === "BTC" && convertTo === "UAH") {
      setConvertToAmount((convertedAmount * price).toString());
    } else if (base === "UAH" && convertTo === "BTC") {
      setConvertToAmount((convertedAmount / price).toString());
    }
  };

  const calculateReverse = () => {
    const convertedAmount = parseFloat(convertToAmount);
    if (isNaN(convertedAmount)) {
      setBaseAmount("");
      return;
    }

    if (base === "BTC" && convertTo === "UAH") {
      setBaseAmount((convertedAmount / price).toString());
    } else if (base === "UAH" && convertTo === "BTC") {
      setBaseAmount((convertedAmount * price).toString());
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
    setTimeout(() => {
      setRate(1 / rate);
      setRateLoading(false);
      setIsBuy(!isBuy);
    }, 1000);
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
      setRate(newPrice);
      setTimeout(() => {
        setRateLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to refresh currency rate:", error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <SwapCard
        icon={base}
        className={styles.card}
        value={baseAmount}
        onChange={handleBaseInput}
        base={base}
        loader={baseLoading}
        isBuy={isBuy}
      />
      <SwapCard
        icon={convertTo}
        convertTo={convertTo}
        className={styles.card}
        value={convertToAmount}
        onChange={handleConvertToInput}
        loader={convertToLoading}
        isBuy={!isBuy}
      />
      <Button className={styles.button} onClick={handleSwap} />

      <RateCard
        className={styles.rate}
        rate={formattedCurrencyConverter(rate)}
        amount={1}
        base={base}
        convertTo={convertTo}
        loader={rateLoading}
        onClick={handleRefresh}
      />
    </div>
  );
};
