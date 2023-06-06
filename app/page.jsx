import { Converter } from "@/components/Converter";
import { getCurrencyPrice } from "@/api/getCurrencyPrice";

export default async function Home() {
  const price = await getCurrencyPrice();

  return <Converter price={price} />;
}
