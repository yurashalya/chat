import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "components";

import styles from "./loginForm.module.scss";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles.authForm}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Field is required!" }]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Field is required!" }]}
      >
        <Input
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          className={styles.customBtn}
          htmlType="submit"
          title="Login"
          type="primary"
        />
      </Form.Item>

      <Link to="/register" className={styles.registerLink}>
        Sing up
      </Link>
    </Form>
  );
};

export default LoginForm;
