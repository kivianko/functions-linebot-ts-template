import * as functions from "firebase-functions";
import { SignatureValidationFailed, validateSignature, WebhookEvent } from "@line/bot-sdk";
import { config } from "../../utils/line";
import { lineEventHandler } from "../../handlers/index";
import type { RuntimeOptions } from "firebase-functions";

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: "1GB",
};

const timezone = "Asia/Tokyo";
process.env.TZ = timezone;

const functionOptions = functions.region("asia-northeast1").runWith(runtimeOpts);

export = functionOptions.https.onRequest((request, response) => {
  const signature = request.get("x-line-signature");
  if (config.channelSecret) {
    if (!signature || !validateSignature(request.rawBody, config.channelSecret, signature)) {
      throw new SignatureValidationFailed("signature validation failed", signature);
    }
  }
  const events: WebhookEvent[] = request.body.events;
  Promise.all(events.map(lineEventHandler))
    .then((result) => {
      response.status(200).end();
    })
    .catch((err) => {
      console.error(err);
      response.status(500).end();
    });
});
