import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { IconReaded, Time, AudioMessage } from "./../";

import styles from "./message.module.scss";

const Message = ({
	avatar,
	user = {},
	text,
	date,
	isMe,
	audio,
	isReaded,
	attachments,
	isTyping,
}) => {
	const isMeStyle = isMe ? styles.wrappIsMeMessage : styles.wrappMessage;
	const isTypingStyle = isTyping ? styles.wrappIsTyping : null;
	const isAttachmentsOneImg =
		attachments?.length === 1 ? styles.attachOneImg : null;

	return (
		<div className={clsx(isMeStyle)}>
			{!isMe && (
				<div className={styles.avatar}>
					<img src={avatar} alt={`Avatar ${user.fullName}`} />
				</div>
			)}
			<div className={styles.content}>
				{(audio || text || isTyping) && (
					<div className={clsx(styles.bubble, isTypingStyle)}>
						{text && <p className={styles.text}>{text}</p>}
						{isTyping && (
							<div className={styles.typing}>
								<div className={styles.typing__dot}></div>
								<div className={styles.typing__dot}></div>
								<div className={styles.typing__dot}></div>
							</div>
						)}
						{audio && <AudioMessage audio={audio} />}
					</div>
				)}
				{attachments && (<div className={styles.attachments}>
					{attachments?.map((item, key) => {
						return (
							<div className={styles.attachmentsItem} key={key}>
								<img
									src={item.url}
									alt={item.filename}
									className={clsx(styles.attachImg, isAttachmentsOneImg)}
								/>
							</div>
						);
					})}
				</div>)}
				<div className={styles.descMessage}>
					{date && (
						<span className={styles.date}>
							<Time date={date} />
						</span>
					)}
					{!isTyping && (
						<p>
							<IconReaded isMe={isMe} isReaded={isReaded} />
						</p>
					)}
				</div>
			</div>
			{isMe && (
				<div className={styles.avatar}>
					<img src={avatar} alt={`Avatar ${user.fullName}`} />
				</div>
			)}
		</div>
	);
};

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	user: PropTypes.object,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isReaded: PropTypes.bool,
	audio: PropTypes.string
};

export default Message;
