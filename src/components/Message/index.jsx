import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import checkedSvg from "../../assets/img/readed.svg";
import noCheckedSvg from "../../assets/img/noreaded.svg";

import styles from "./message.module.scss";

const Message = ({ avatar, user = {}, text, date, isMe, isReaded, attachments }) => {
	const isMeStyle = isMe ? styles.wrappIsMeMessage : styles.wrappMessage;

	console.log(attachments)

	return (
		<div className={isMeStyle}>
			{!isMe ? (
				<div className={styles.avatar}>
					<img src={avatar} alt={`Avatar ${user.fullName}`} />
				</div>
			) : null}

			<div className={styles.content}>
				<div className={styles.bubble}>
					<p className={styles.text}>{text}</p>
				</div>
				<div className={styles.attachments}>
					{attachments?.map((item, key) => {
						return (
							<div className={styles.attachmentsItem} key={key}>
								<img src={item.url} alt={item.filename} />
							</div>
						)
					})}
				</div>
				<div className={styles.descMessage}>
					<span className={styles.date}>
						{formatDistanceToNow(Date.parse(date), {
							addSuffix: true,
						})}
					</span>
					<p>
						{isReaded && isMe ? (
							<img src={checkedSvg} alt="Readed" />
						) : (
								<img src={noCheckedSvg} alt="No readed" />
							)}
					</p>
				</div>
			</div>
			{
				isMe ? (
					<div className={styles.avatar}>
						<img src={avatar} alt={`Avatar ${user.fullName}`} />
					</div>
				) : null
			}
		</div >
	);
};

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	user: PropTypes.object,
	attachments: PropTypes.array
};

export default Message;
