import React from "react";

import { Button, Form, Input } from "antd";

import { FOOTER_MENU_LINKS, SOCIAL_MEDIA_LINKS } from "./constant";

import styles from "./footer.module.css";

import Logo from "./images/Logo.svg";

export const Footer = () => {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.mailEnquiryWrapper}>
        <div className={styles.mailEnquiryContainer}>
          <div className={styles.leftInfo}>
            <div className={styles.textInfo1}>Like to know more ?</div>
            <div className={styles.textInfo2}>info@revathiengineering.com</div>
          </div>
          <div className={styles.rightInfo}>
            <div className={styles.textInfo}>
              Sign up for Rocket Lab updates
            </div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="Email Id"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Email Id !",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email Id" />
              </Form.Item>

              <Form.Item className={styles.btn}>
                <Button type="link" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.topInfo}>
          <div className={styles.logoContainerInfo}>
            <img src={Logo} alt="footerLogo" className={styles.logo} />
            <div className={styles.companyName}>
              Revathi Engineering Pvt. Ltd
            </div>
            <div className={styles.slogan}>We make, so world can fly</div>
            <div className={styles.mediaIconContainer}>
              {SOCIAL_MEDIA_LINKS.map((item) => {
                return (
                  <a href={item.link} key="social">
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_MENU_LINKS.map((item) => {
            return (
              <div className={styles.menuLinksContainer} key="links">
                <div className={styles.title}>{item.title}</div>
                {item["links"].map((data) => {
                  return (
                    <a
                      className={styles.linkInfo}
                      href={data?.isUrl && data?.url}
                      key="link"
                    >
                      {data.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.copyRightsContainer}>
          <div className={styles.leftInfo}>
            All Rights Reserved Revathi Engineering
          </div>
          <div className={styles.rightInfo}>
            <span>Designed by</span>
            <a href="https://skynoveau.in/"> Skynoveau Technology</a>
          </div>
        </div>
      </div>
    </div>
  );
};
