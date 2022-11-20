import type { Message } from "@line/bot-sdk";

export function createPostbackTest() {
  const messageData: Message = {
    type: "flex",
    altText: "ポストバックのテスト",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "ポストバックのテスト",
                size: "md",
                weight: "bold",
              },
            ],
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "プロフィール取得",
                color: "#FFFFFF",
              },
            ],
            backgroundColor: "#06C755",
            cornerRadius: "sm",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            margin: "lg",
            action: {
              type: "postback",
              label: "action",
              data: JSON.stringify({
                action: "getProfile",
              }),
            },
          },
        ],
      },
    },
  };

  return messageData;
}
