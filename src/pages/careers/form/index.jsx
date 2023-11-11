import { Button, Form, Input } from "antd";

import "./style.override.css";

import styles from "./form.module.css";

export const FormValidation = ({ className }) => {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={`formValidation-Wrapper ${className}`}
    >
      <div className="formValidation-multigroup">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="First name" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input placeholder="Last name" />
        </Form.Item>

        <Form.Item
          name="DOB"
          rules={[
            {
              required: true,
              message: "Please enter your DOB!",
            },
          ]}
        >
          <Input placeholder="Date of Birth" />
        </Form.Item>

        <Form.Item
          name="Phone number"
          rules={[
            {
              required: true,
              message: "Please enter your Phone number!",
            },
          ]}
        >
          <Input placeholder="Phone number" />
        </Form.Item>
        <Form.Item
          name="Email Id"
          rules={[
            {
              required: true,
              message: "Please enter your Email Id!",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email Id" />
        </Form.Item>
        <Form.Item
          name="Location"
          rules={[
            {
              required: true,
              message: "Please enter your Location!",
            },
          ]}
        >
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item
          name="Industory"
          rules={[
            {
              required: true,
              message: "Please enter your Industory!",
            },
          ]}
        >
          <Input placeholder="Industory" />
        </Form.Item>
        <Form.Item
          name="Role"
          rules={[
            {
              required: true,
              message: "Please enter your Role!",
            },
          ]}
        >
          <Input placeholder="Role" />
        </Form.Item>
      </div>
      <Form.Item
        name="Message"
        rules={[
          {
            required: true,
            message: "Please enter your Message!",
          },
        ]}
      >
        <Input.TextArea placeholder="Tell us about yourself..." />
      </Form.Item>

      <Form.Item className={styles.btn}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
