import { Message, FollowEvent } from "@line/bot-sdk";
import { client } from "../utils/line";
import { errorMessage } from "../utils/common";
export const followHundler = async (event: FollowEvent) => {
  let replyMessage: Message | Message[] | undefined;
  try {
    const userId = event.source.userId;
    if (!userId) throw new Error("userIdが見つかりませんでした。");
    replyMessage = {
      type: "text",
      text: "テスト",
    };
  } catch (error: any) {
    console.error(error);
    replyMessage = errorMessage(error.message);
  } finally {
    if (!replyMessage) return;
    client.replyMessage(event.replyToken, replyMessage);
  }
};
