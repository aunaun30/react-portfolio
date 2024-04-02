import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gade</h1>
        <p className={styles.description}>
          I'm a Front-End Developer , Back-End Developer and UX/UI Designer
        </p>
        <a href="https://drive.google.com/file/d/1jI14J7cnSeXXuhjoFxGnLcSRw1uOG0di/view?usp=sharing" className={styles.contactBtn}>
          Downloads CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
