import type { Message, MessageEvent } from "@line/bot-sdk";
import { createPostbackTest } from "../helpers/useCreateMessage";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const messageHundler = async (event: MessageEvent) => {
  let replyMessage: Message | undefined;

  const userId = event.source.userId;

  if (!userId) {
    replyMessage = errorMessage;
    return;
  }

  switch (event.message.type) {
    case "text":
      const userMessage = event.message.text;
      if (userMessage === "テスト") {
        replyMessage = {
          type: "text",
          text: "テスト",
        };
      }
      if (userMessage === "ポストバックテスト") {
        const postbackTest = createPostbackTest();
        replyMessage = postbackTest;
      }
      break;
  }

  if (replyMessage) client.replyMessage(event.replyToken, replyMessage);
  else return;
};
