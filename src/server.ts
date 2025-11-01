import console from "node:console";
import process from "node:process";
import { serve } from "@hono/node-server";
import app from "./app";

const port = Number(process.env.PORT || 3000);
serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
