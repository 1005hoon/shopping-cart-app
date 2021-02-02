import React from "react";
import { MessageItem, MessageText, MessageRate } from "./styles/Message";

export default function Message({ text, rate }) {
  return (
    <MessageItem>
      <MessageText>{text}</MessageText>
      <MessageRate>{rate}%</MessageRate>
    </MessageItem>
  );
}
