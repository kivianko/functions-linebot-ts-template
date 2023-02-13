import type { Message, MessageEvent } from "@line/bot-sdk";
import { createPostbackTest } from "../helpers/useCreateMessage";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const messageHundler = async (event: MessageEvent) => {
  let replyMessage: Message | Message[] | undefined;

  try {
    const userId = event.source.userId;
    if (!userId) throw new Error("userIdが見つかりませんでした。");
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
      case "image":
        break;
    }
  } catch (error: any) {
    console.error(error);
    replyMessage = errorMessage(error.message);
  } finally {
    if (!replyMessage) return;
    client.replyMessage(event.replyToken, replyMessage);
  }
};
