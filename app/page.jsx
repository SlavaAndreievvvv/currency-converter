import styles from "./page.module.css";

import { Converter } from "@/components/Converter";
import { getCurrencyPrice } from "@/api/getCurrencyPrice";
import { Loader } from "@/components/Loader";

export default async function Home() {
  const price = await getCurrencyPrice();

  return (
    <>
      <Converter price={price} />
    </>
  );
}
