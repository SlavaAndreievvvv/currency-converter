import { Icon } from "@/components/Icon";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Icon name="logo" />
      </Link>
    </header>
  );
};
