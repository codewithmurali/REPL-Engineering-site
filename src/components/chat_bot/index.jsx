import React, { useState } from "react";
import { Modal } from "antd";
import { IoIosArrowDown } from "react-icons/io";

import { SimpleChatBot } from "./chatbot";
import styles from "./style.module.css";
import "./modal.override.css";

import chatIcon from "./icons/chatIcon.svg";
import chatIcon3 from "./icons/chatIcon3.png";

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const buttonClicked = () => {
    setOpen(!open);
    setIsShow(!isShow);
  };

  const ChatBotModel = () => {
    return (
      <div className="chatBotContainer">
        <Modal open={open} footer={null} header={null} maskclosable={true}>
          <div className={styles.closeIconWrapper} onClick={buttonClicked}>
            <div className={styles.closeIcon}>
              <IoIosArrowDown />
            </div>
          </div>
          <SimpleChatBot />
        </Modal>
      </div>
    );
  };

  return (
    <>
      <ChatBotModel />
      <div className={`${isShow ? "" : styles.buttonHide}`}>
        <div className={`${styles.buttonWrapper} `} onClick={buttonClicked}>
          <img src={chatIcon} alt="chat with us" />
        </div>
        <div className={styles.circleContainer}>
          <div className={`${styles.cricle} ${styles.circle1}`}></div>
          {/* <div className={`${styles.cricle} ${styles.circle2}`}></div> */}
          <div className={`${styles.cricle} ${styles.circle3}`}></div>
        </div>
      </div>
    </>
  );
};
