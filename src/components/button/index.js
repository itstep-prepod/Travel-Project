import React from "react";
import styles from "./index.module.css";

export const Button = ({ onClick }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}>
      Записаться
    </button>
  );
};
