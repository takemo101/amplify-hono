import type { FC } from "hono/jsx";

export const Header: FC = () => {
  return (
    <div class="header">
      <h1>💬 Message Board</h1>
      <p>メッセージを作成・管理できます</p>
    </div>
  );
};
