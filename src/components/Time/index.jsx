import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes from "prop-types";

const Time = ({ date }) => formatDistanceToNow(Date.parse(date), {
	addSuffix: true,
})

Time.propTypes = {
	date: PropTypes.string,
};

export default Time;
