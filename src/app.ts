import { Hono } from "hono";

const app = new Hono();

// HTMLテンプレート用のヘルパー関数
const html = (content: string) => {
  return `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hono on Amplify</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
      background: #f5f5f5;
    }
    .container {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h1 { color: #333; }
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
    a { color: #0070f3; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
</body>
</html>
  `;
};

// ルート定義
app.get("/", (c) => {
  return c.html(
    html(`
    <h1>🚀 Hono on Amplify Gen2</h1>
    <p>Amplify HostingでHonoアプリケーションが動作しています！</p>
    <h2>利用可能なエンドポイント</h2>
    <ul>
      <li><code>/</code> - このページ</li>
      <li><code>/about</code> - について</li>
      <li><code>/api/hello</code> - APIエンドポイント（JSON）</li>
    </ul>
  `),
  );
});

app.get("/about", (c) => {
  return c.html(
    html(`
    <h1>About</h1>
    <p>これはAmplify Gen2で動作するHonoアプリケーションです。</p>
    <p><a href="/">ホームに戻る</a></p>
  `),
  );
});

app.get("/api/hello", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.post("/api/echo", async (c) => {
  const body = await c.req.json();
  return c.json({ echo: body });
});

// 404エラーハンドリング
app.notFound((c) => {
  return c.html(
    html(`
    <h1>404 - ページが見つかりません</h1>
    <p>お探しのページは存在しません。</p>
    <p><a href="/">ホームに戻る</a></p>
  `),
    404,
  );
});

// Amplify Hosting用にエクスポート
export default app;
