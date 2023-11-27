import React, { useState } from "react";
import { Modal, Button } from "antd";

import styles from "./style.module.css";
import "./modal.override.css";

import chatIcon from "./icons/chatIcon.png";
import { SimpleChatBot } from "./chatbot";

export const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const buttonClicked = () => {
    setOpen(!open);
  };

  const ChatBotModel = () => {
    return (
      <div className="chatBotContainer">
        <Modal
          open={open}
          footer={null}
          header={null}
          maskclosable={true}
        >
          <SimpleChatBot />
        </Modal>
      </div>
    );
  };

  return (
    <>
      <ChatBotModel />
      <div className={`${styles.buttonWrapper} `} onClick={buttonClicked}>
        <img src={chatIcon} alt="chat with us" />
      </div>
      <div className={styles.circleContainer}>
        <div className={`${styles.cricle} ${styles.circle1}`}></div>
        {/* <div className={`${styles.cricle} ${styles.circle2}`}></div> */}
        <div className={`${styles.cricle} ${styles.circle3}`}></div>
      </div>
    </>
  );
};
