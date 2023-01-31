import React from "react";
import styles from "./Input.module.css";

const Input = ({ type }) => {
  return <input type={type} className={styles.inputText} />;
};

export default Input;
