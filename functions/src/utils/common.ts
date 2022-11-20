import type { Message } from "@line/bot-sdk";

export const errorMessage: Message = {
  type: "text",
  text: "エラーが発生しました。初めからやり直してください。",
};
