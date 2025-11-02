import type { FC } from "hono/jsx";

export const EmptyState: FC = () => {
  return (
    <div class="empty-state" x-show="messages.length === 0">
      <p>📭 まだメッセージがありません</p>
      <p>メッセージを入力して送信してください</p>
    </div>
  );
};
