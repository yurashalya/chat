import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "components";

import styles from "./signBlock.module.scss";

const SignBlock = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrappSignBlock}>
      <div className={styles.authTitle}>
        <h1>Login</h1>
      </div>
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

        <a href="#" className={styles.registerLink}>
          Sing up
        </a>
      </Form>
    </div>
  );
};

export default SignBlock;
