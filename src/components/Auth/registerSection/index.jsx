import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import {
	UserOutlined,
	LockOutlined,
	MailOutlined,
	ExclamationCircleTwoTone,
} from "@ant-design/icons";
import { Button } from "components";

import styles from "../auth.module.scss";

import { validatePassword, required } from '../../../validators/validation'

const RegisterForm = ({ values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit, }) => {
	console.log(values)


	const isSuccess = true;
	return (
		<div className={styles.wrappAuthBlock}>
			{isSuccess ? (
				<>
					<div className={styles.authTitle}>
						<h1>Registration</h1>
						<p>To enter the chat, you need to register</p>
					</div>
					<Form
						initialValues={{ remember: true, ...values }}
						onFinish={handleSubmit}
						className={styles.authForm}
					>
						<Form.Item
							name="email"
							id="email"
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{ validator: required }
							]}
						>
							<Input
								placeholder="Email"
								size="large"
								prefix={<MailOutlined className="site-form-item-icon" />}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>
						<Form.Item
							name="username"
							id="username"
							rules={[{ required: true, message: "Field is required!" }]}
						>
							<Input
								size="large"
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Username"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>
						<Form.Item
							name="password"
							id="password"
							rules={[
								{ validator: required },
								{ validator: validatePassword }
							]}
						>
							<Input.Password
								size="large"
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Enter Password"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>
						<Form.Item
							name="confirm"
							id="confirm"
							dependencies={["password"]}
							rules={[
								{ validator: required },
								({ getFieldValue }) => ({
									validator(rule, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}
										return Promise.reject(
											"The two passwords that you entered do not match!"
										);
									},
								}),
							]}
						>
							<Input.Password
								size="large"
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Comfirm Password"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>

						<Form.Item>
							<Button
								className={styles.customBtn}
								htmlType="submit"
								title="Sign In"
								type="primary"
							/>
						</Form.Item>
						<Link to="/login" className={styles.link}>
							Login
            </Link>
					</Form>
				</>
			) : (
					<div className={styles.success}>
						<div className={styles.infoIcon}>
							<ExclamationCircleTwoTone />
						</div>
						<h3>Confirm your account</h3>
						<p>
							An email has been sent to your mail with a link to confirm your
							account
          </p>
					</div>
				)}
		</div>
	);
};

export default RegisterForm;
