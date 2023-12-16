import React from "react";
import { Button, Form, Input } from "antd";

import { FOOTER_MENU_LINKS, SOCIAL_MEDIA_LINKS } from "./constant";
import { AOS_ANIMATION } from "../../constant";

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
            <div
              className={styles.textInfo1}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Like to know more ?
            </div>
            <div
              className={styles.textInfo2}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              info@revathiengineering.com
            </div>
          </div>
          <div className={styles.rightInfo}>
            <div
              className={styles.textInfo}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Sign up for more updates
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
                data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
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

              <Form.Item
                className={styles.btn}
                data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
              >
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
            <img
              src={Logo}
              alt="footerLogo"
              className={styles.logo}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            />
            <div
              className={styles.companyName}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Revathi Engineering Pvt. Ltd
            </div>
            <div
              className={styles.slogan}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We make, so world can fly
            </div>
            <div className={styles.mediaIconContainer}>
              {SOCIAL_MEDIA_LINKS.map((item, index) => {
                return (
                  <a
                    href={item.link}
                    key={index}
                    data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
            ƒ
          </div>

          {FOOTER_MENU_LINKS.map((item, index) => {
            return (
              <div className={styles.menuLinksContainer} key={index}>
                <div
                  className={styles.title}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  {item.title}
                </div>
                {item["links"].map((data, index) => {
                  return (
                    <a
                      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                      className={styles.linkInfo}
                      href={data?.isUrl && data?.url}
                      key={index}
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
          <div
            className={styles.leftInfo}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            All Rights Reserved Revathi Engineering
          </div>
          <div
            className={styles.rightInfo}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            <span>Designed by</span>
            <a href="https://skynoveau.in/"> Skynoveau Technology</a>
          </div>
        </div>
      </div>
    </div>
  );
};
