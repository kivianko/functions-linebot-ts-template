import type { Message, PostbackEvent } from "@line/bot-sdk";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const postbackHundler = async (event: PostbackEvent) => {
  const data = JSON.parse(event.postback.data);
  const action = data.action;

  let replyMessage: Message | Message[] | undefined;

  try {
    const userId = event.source.userId;
    if (!userId) throw new Error("userIdが見つかりませんでした。");
    if (action === "getProfile") {
      const profile = await client.getProfile(userId);
      replyMessage = {
        type: "text",
        text: JSON.stringify(profile),
      };
    }
  } catch (error: any) {
    console.error(error);
    replyMessage = errorMessage(error.message);
  } finally {
    if (!replyMessage) return;
    client.replyMessage(event.replyToken, replyMessage);
  }
};
