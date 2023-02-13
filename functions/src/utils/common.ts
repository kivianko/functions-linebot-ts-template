import type { Message } from "@line/bot-sdk";

export function errorMessage(errorMessage: string): Message | Message[] {
  return [
    {
      type: "text",
      text: "エラーが発生しました。\n初めからやり直して管理者にお問い合わせください。",
    },
    {
      type: "text",
      text: `Error: {${errorMessage}}`,
    },
  ];
}
