import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";

const messages = new Hono();

messages.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});
messages.post("/", async (c) => {
  return c.json({ message: "Hello, World!" });
});
messages.delete("/:id", (c) => {
  return c.json({ message: "Hello, World!" });
});

const api = new Hono();
api.use("*", cors(), csrf());
api.route("/messages", messages);

export default api;
