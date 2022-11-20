import type { Message, MessageEvent } from "@line/bot-sdk";
import { createPostbackTest } from "../helpers/useCreateMessage";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const messageHundler = async (event: MessageEvent) => {
  let messageData: Message | undefined;

  const userId = event.source.userId;

  if (!userId) {
    messageData = errorMessage;
    return;
  }

  switch (event.message.type) {
    case "text":
      const userMessage = event.message.text;
      if (userMessage === "テスト") {
        messageData = {
          type: "text",
          text: "テスト",
        };
      }
      if (userMessage === "ポストバックテスト") {
        const postbackTest = createPostbackTest();
        messageData = postbackTest;
      }
      break;
  }

  if (messageData) client.replyMessage(event.replyToken, messageData);
  else return;
};
