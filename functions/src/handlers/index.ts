import { WebhookEvent } from "@line/bot-sdk";
import { messageHundler } from "./message";
import { postbackHundler } from "./postback";

export const lineEventHandler = async (event: WebhookEvent) => {
  // イベントタイプを判別
  switch (event.type) {
    case "message":
      await messageHundler(event);
      break;
    case "postback":
      await postbackHundler(event);
      break;
  }
};
