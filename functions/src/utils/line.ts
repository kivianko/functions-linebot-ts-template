import * as functions from "firebase-functions";
import { Client, ClientConfig } from "@line/bot-sdk";

export const config: ClientConfig = {
  channelAccessToken: functions.config().line.channel_access_token,
  channelSecret: functions.config().line.channel_secret,
};

export const client = new Client(config);
