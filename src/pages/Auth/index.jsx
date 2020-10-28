import React from "react";

import { SignBlock } from "components";

import styles from "./auth.module.scss";

const Auth = () => {
  return (
    <section className={styles.wrappAuth}>
      <SignBlock />
    </section>
  );
};

export default Auth;
