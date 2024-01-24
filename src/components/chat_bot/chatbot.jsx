import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import "./chatbot.override.css";

import botIcon from "./icons/botIcon.png";
import botIcon1 from "./icons/botIcon1.png";
import userIcon from "./icons/userIcon.png";

const theme = {
  background: "#f5f8fb",
  fontFamily: "var(--sui-font-family-s600)",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "white",
  botFontColor: "#3b3b3b",
  userBubbleColor: "#fff",
  userFontColor: "#646464",
};

export const SimpleChatBot = () => {
  function hanleEnd(props) {
    console.log("data", props);
  }

  const steps = [
    {
      id: "1",
      message: "Hi What's your name?",
      trigger: "getName",
    },
    {
      id: "getName",
      user: true,
      trigger: "triggerPhoneNumber",
    },
    {
      id: "triggerPhoneNumber",
      message: "Hi {previousValue}! Enter your Phone number",
      trigger: "getPhoneNumber",
    },
    {
      id: "getPhoneNumber",
      user: true,
      trigger: "triggerEmailId",
    },
    {
      id: "triggerEmailId",
      message: "Enter your Email Id",
      trigger: "getEmailId",
    },
    {
      id: "getEmailId",
      user: true,
      trigger: "triggerEnquiry",
    },
    {
      id: "triggerEnquiry",
      message: "What's your Enquiry?",
      trigger: "getQuiry",
    },
    {
      id: "getQuiry",
      user: true,
      trigger: "triggerMessage",
    },
    {
      id: "triggerMessage",
      message:
        "We got your requests and we will get back to you within 24 hours",
      trigger: "triggerEnd",
    },
    {
      id: "triggerEnd",
      message: "Thank you for your visiting",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="chatbotWrapper">
        <ChatBot
          botAvatar={botIcon1}
          userAvatar={userIcon}
          hanleEnd={hanleEnd}
          headerTitle="Chat with us now"
          steps={steps}
        />
      </div>
    </ThemeProvider>
  );
};
