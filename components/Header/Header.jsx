import { Icon } from "../Icon";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link aria-label="logo" href="/">
        <Icon name="logo" />
      </Link>
    </header>
  );
};
