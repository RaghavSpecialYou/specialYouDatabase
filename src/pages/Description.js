import React from "react";
import styles from "./description.module.css";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productDescriptionContainer}>
        <label htmlFor="productDescription">Product Description</label>
        <textarea id={styles.productDescription}></textarea>
      </div>
      <div className={styles.bulletPointContainer}>
        <label htmlFor="bulletPoint">Bullet Point</label>
        <input type="text" id={styles.bulletPoint} />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};

export default Description;
