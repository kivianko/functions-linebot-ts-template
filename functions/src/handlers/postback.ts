import type { Message, PostbackEvent } from "@line/bot-sdk";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const postbackHundler = async (event: PostbackEvent) => {
  const data = JSON.parse(event.postback.data);
  const action = data.action;

  let replyMessage: Message | undefined;

  const userId = event.source.userId;
  if (!userId) {
    replyMessage = errorMessage;
    return;
  }

  if (action === "getProfile") {
    const profile = await client.getProfile(userId);
    replyMessage = {
      type: "text",
      text: JSON.stringify(profile),
    };
  }

  if (replyMessage) client.replyMessage(event.replyToken, replyMessage);
  else return;
};
