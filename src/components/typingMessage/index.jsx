import React from 'react';
import styles from './typing.module.scss';

const TypingMessage = () => {
	return (
		<div className={styles.wrappIsTyping}>
			<div className={styles.typing}>
				<div className={styles.typing__dot}></div>
				<div className={styles.typing__dot}></div>
				<div className={styles.typing__dot}></div>
			</div>
		</div>
	)
}

export default TypingMessage;
