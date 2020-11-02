import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import checkedSvg from "../../assets/img/readed.svg";
import noCheckedSvg from "../../assets/img/noreaded.svg";

import styles from "./message.module.scss";

const Message = ({
  avatar,
  user = {},
  text,
  date,
  isMe,
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
        {(text || isTyping) && (
          <div className={clsx(styles.bubble, isTypingStyle)}>
            {text && <p className={styles.text}>{text}</p>}
            <div className={styles.typing}>
              <div className={styles.typing__dot}></div>
              <div className={styles.typing__dot}></div>
              <div className={styles.typing__dot}></div>
            </div>
          </div>
        )}
        <div className={styles.attachments}>
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
        </div>
        <div className={styles.descMessage}>
          {date && (
            <span className={styles.date}>
              {formatDistanceToNow(Date.parse(date), {
                addSuffix: true,
              })}
            </span>
          )}
          {!isTyping && (
            <p>
              {isMe &&
                (isReaded ? (
                  <img src={checkedSvg} alt="Readed" />
                ) : (
                  <img src={noCheckedSvg} alt="No readed" />
                ))}
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
};

export default Message;
