if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === "lineWebhook") {
  exports.lineWebhook = require("./api/http/lineWebhook");
}
