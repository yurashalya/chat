import React from 'react';

import PropTypes from "prop-types";

import checkedSvg from "../../assets/img/readed.svg";
import noCheckedSvg from "../../assets/img/noreaded.svg";

const IconReaded = ({ isMe, isReaded, }) => {
	return (
		<>
			{isMe &&
				(isReaded ? (
					<img src={checkedSvg} alt="Readed" />
				) : (
						<img src={noCheckedSvg} alt="No readed" />
					))}
		</>
	)
}

IconReaded.propTypes = {
	isMe: PropTypes.bool,
	Readed: PropTypes.bool,
};

export default IconReaded;
