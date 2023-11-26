import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica",
  headerBgColor: "#00796B",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#e1ffc7",
  botFontColor: "#000",
  userBubbleColor: "#fff",
  userFontColor: "#000",
};

export const ChatBotModel = () => {
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
    message: "We got your requests and we will get back to you within 24 hours",
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
      <div>
        <ChatBot hanleEnd={hanleEnd} headerTitle="REPL Chatbot" steps={steps} />
      </div>
    </ThemeProvider>
  );
};
