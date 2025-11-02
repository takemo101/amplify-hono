import { defineBackend } from "@aws-amplify/backend";
import { data } from "./data/resource.js";
import { message } from "./functions/message";

export const backend = defineBackend({
  data,
  message,
});
