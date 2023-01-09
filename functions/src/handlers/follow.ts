import { Message, FollowEvent } from "@line/bot-sdk";
import { client } from "../utils/line";
import { errorMessage } from "../utils/common";
export const followHundler = async (event: FollowEvent) => {
  let replyMessage: Message | Message[] | undefined;

  const userId = event.source.userId;

  if (!userId) {
    replyMessage = errorMessage;
    return;
  }

  replyMessage = {
    type: "text",
    text: "テスト",
  };

  if (replyMessage) client.replyMessage(event.replyToken, replyMessage);
  else return;
};
