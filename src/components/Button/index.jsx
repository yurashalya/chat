import React from "react";
import PropTypes from "prop-types";
import { Button as BaseButton } from "antd";

let Button = ({ title, type, className, htmlType }) => {
  return (
    <BaseButton className={className} type={type} htmlType={htmlType}>
      {title}
    </BaseButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
