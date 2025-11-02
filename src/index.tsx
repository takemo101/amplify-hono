import { Amplify } from "aws-amplify";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import outputs from "~/amplify_outputs.json";
import api from "./api";
import { MessageBoard } from "./components/MessageBoard";

Amplify.configure(outputs, { ssr: true });

const Layout: FC = (props) => {
  return (
    <>
      <head>
        <title>Amplify Hono</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Amplify Hono" />
        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="/public/styles.css" />
        <script src="//unpkg.com/alpinejs" defer></script>
      </head>
      <html lang="ja">
        <body>{props.children}</body>
      </html>
    </>
  );
};

const app = new Hono();

app.route("/api", api);

app.get("/", (c) => {
  return c.html(
    <Layout>
      <main>
        <MessageBoard />
      </main>
    </Layout>,
  );
});

// Amplify Hosting用にエクスポート
export default app;
