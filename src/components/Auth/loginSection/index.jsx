import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "components";

import { validatePassword, validateMessages } from "validators/validation";

import styles from "../auth.module.scss";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrappAuthBlock}>
      <div className={styles.authTitle}>
        <h1>Login</h1>
        <p>Please, login to your account</p>
      </div>
      <Form
        name="loginForm"
        validateMessages={validateMessages}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.authForm}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true },
            { min: 3, message: "Username must be minimum 3 characters." },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true }, { validator: validatePassword }]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter Password"
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
        <Link to="/register" className={styles.link}>
          Sing up
        </Link>
      </Form>
    </div>
  );
};

export default Login;
