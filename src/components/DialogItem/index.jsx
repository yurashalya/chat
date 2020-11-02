import React from 'react';
import PropTypes from "prop-types";

import { Time, IconReaded } from "./../";

import styles from './dialogItem.module.scss';


const DialogItem = ({ isMe, isReaded, user, message, unreaded }) => {
	const isAvatar = avatar => {
		if (avatar) {
			return <img src={avatar} alt="" className={styles.avatar} />
		} else {
			// make avatar
		}
	}

	console.log(user)

	return (
		<div className={styles.wrappDialogItem}>
			<div className={styles.dialogAvatar}>
				{/* <img src={user.avatar} alt={`${user.fullName} avatar`} /> */}
				{isAvatar("https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png")}
				{user?.isOnline && (<p className={styles.status}></p>)}
			</div>
			<div className={styles.dialogsContent}>
				<div className={styles.infoTop}>
					<b className={styles.fullName}>Kirk Hammet</b>
					<div className={styles.info}>
						<IconReaded isMe={true} isReaded={isReaded} />
						<span className={styles.date}>
							{/* <Time date={"Mon Nov 02 2020 14:44:34"} /> */}
						13:04
					</span>
					</div>
				</div>
				<div className={styles.infoFooter}>
					<p className={styles.text}>Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝</p>

					{unreaded > 0 && <p className={styles.count}>{unreaded > 100 ? '+100' : unreaded}</p>}
				</div>
			</div>
		</div>
	)
}

DialogItem.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	isMe: PropTypes.bool,
	Readed: PropTypes.bool,
};

export default DialogItem;
