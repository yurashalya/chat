import React from 'react';
import PropTypes from "prop-types";
import { format, isToday } from 'date-fns';

import { IconReaded, TypingMessage } from "./../";

import styles from './dialogItem.module.scss';

const DialogItem = ({ isMe, isReaded, user, message, unreaded, isTyping, id, date }) => {
	const isAvatar = avatar => {
		if (avatar) {
			return <img src={avatar} alt="" className={styles.avatar} />
		} else {
			// make avatar
		}
	}

	const getMessageTime = time => {
		if (isToday(time)) {
			return format(Date.parse(time), 'HH:mm')
		} else {
			return format(Date.parse(time), 'd.M.yyyy')
		}
	}

	return (
		<div className={styles.wrappDialogItem}>
			<div className={styles.dialogAvatar}>
				{/* <img src={user.avatar} alt={`${user.fullName} avatar`} /> */}
				{isAvatar(user.avatar)}
				{user?.isOnline && (<p className={styles.status}></p>)}
			</div>
			{isTyping ? (<TypingMessage />) : (
				<div className={styles.dialogsContent}>
					<div className={styles.infoTop}>
						<b className={styles.fullName}>{user.fullname}</b>
						<div className={styles.info}>
							<IconReaded isMe={true} isReaded={isReaded} />
							<span className={styles.date}>
								{getMessageTime(date)}
							</span>
						</div>
					</div>
					<div className={styles.infoFooter}>
						<p className={styles.text}>{message}</p>
						{unreaded > 0 && <p className={styles.count}>{unreaded > 100 ? '+100' : unreaded}</p>}
					</div>
				</div>
			)}
		</div>
	)
}

DialogItem.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.any,
	isMe: PropTypes.bool,
	Readed: PropTypes.bool,
};

export default DialogItem;
