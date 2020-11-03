import React from 'react';
import PropTypes from "prop-types";
import { orderBy } from 'lodash';

import { DialogItem } from './../';

import styles from './dialogs.module.scss';

const Dialogs = ({ items, userId }) => {
	return (
		<div className={styles.wrappDialogs}>
			{orderBy(items, ["createdAt"], ["desc"]).map((item, key) => {
				return (
					<div key={key}>
						<DialogItem
							key={item.user._id}
							user={item.user}
							date={item.createdAt}
							message={item.text}
							unreaded={item.unreaded}
							isTyping={item.isTyping}
							isReaded={item.isReaded}
							isMe={item.user._id === userId}
						/>
					</div>
				)
			})}
		</div>
	)
}

Dialogs.propTypes = {
	user: PropTypes.object,
	text: PropTypes.string,
	date: PropTypes.any,
	isMe: PropTypes.bool,
	Readed: PropTypes.bool,
};

export default Dialogs;
