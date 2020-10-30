import React from "react";

import { Login, Register } from "components";

import styles from "./auth.module.scss";

const Auth = ({ match }) => {
	return (
		<section className={styles.wrappAuth}>
			{match.path === "/login" || match.path === "/" ? <Login /> : <Register />}
		</section>
	);
};

export default Auth;
