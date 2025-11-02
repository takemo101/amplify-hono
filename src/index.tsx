import { serveStatic } from "@hono/node-server/serve-static";
import { Amplify } from "aws-amplify";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import outputs from "~/amplify_outputs.json";
import api from "./api";

Amplify.configure(outputs);

const Layout: FC = (props) => {
  return (
    <>
      <head>
        <title>Amplify Hono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Amplify Hono" />
        <meta name="keywords" content="Amplify, Hono, React" />
        <meta name="author" content="Amplify Hono" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
      </head>
      <html lang="ja">
        <body>{props.children}</body>
      </html>
    </>
  );
};

const app = new Hono();

app.route("/api", api);

app.use("/*", serveStatic({ root: "./public" }));

app.get("/", (c) => {
  return c.html(
    <Layout>
      <h1>Hello, World!</h1>
    </Layout>,
  );
});

// Amplify Hosting用にエクスポート
export default app;
