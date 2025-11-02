import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import * as z from "zod";
import { createMessage, getMessages, removeMessage } from "./repository";

const messageSchema = z.object({
  message: z.string().min(1),
});

const messages = new Hono();

// メッセージの取得
messages.get("/", async (c) => {
  const messages = await getMessages();

  return c.json({ items: messages });
});

// メッセージの作成
messages.post("/", zValidator("json", messageSchema), async (c) => {
  const validated = c.req.valid("json");
  const message = await createMessage(validated.message);

  if (!message) {
    return c.json({ error: "Failed to create message" }, 500);
  }

  return c.json({ ...message });
});

// メッセージの削除
messages.delete("/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const message = await removeMessage(id);

  if (!message) {
    return c.json({ error: "Failed to remove message" }, 500);
  }

  return c.json({ ...message });
});

const api = new Hono();
api.use("*", cors(), csrf());
api.route("/messages", messages);

export default api;
