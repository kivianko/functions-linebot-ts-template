import { Message, PostbackEvent } from "@line/bot-sdk";
import { errorMessage } from "../utils/common";
import { client } from "../utils/line";

export const postbackHundler = async (event: PostbackEvent) => {
  let messageData: Message | undefined;

  const data = JSON.parse(event.postback.data);
  const action = data.action;
  const userId = event.source.userId;

  if (!userId) {
    messageData = errorMessage;
    return;
  }

  if (action === "getProfile") {
    const profile = await client.getProfile(userId);
    messageData = {
      type: "text",
      text: JSON.stringify(profile),
    };
  }

  if (messageData) client.replyMessage(event.replyToken, messageData);
  else return;
};
