import type { FC } from "hono/jsx";

export const MessageForm: FC = () => {
  return (
    <div class="form-container">
      <div class="form-group">
        <input
          type="text"
          name="message"
          x-model="message"
          x-on:keydown="if (event.key === 'Enter') { createMessage(); }"
          placeholder="メッセージを入力..."
          class="input-field"
          x-bind:disabled="loading"
        />
        <button
          type="button"
          x-on:click="createMessage()"
          class="btn btn-primary"
          x-bind:disabled="loading || !message.trim()"
        >
          <span x-show="!loading">送信</span>
          <span x-show="loading">送信中...</span>
        </button>
      </div>
    </div>
  );
};
