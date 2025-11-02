import type { FC } from "hono/jsx";

export const MessageItem: FC = () => {
  return (
    <li class="message-item">
      <span class="message-text" x-text="message.message"></span>
      <button
        type="button"
        x-on:click="removeMessage(message.id)"
        class="btn btn-danger"
      >
        削除
      </button>
    </li>
  );
};
