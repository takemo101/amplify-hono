import type { FC } from "hono/jsx";
import { Header } from "./Header";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const MessageBoard: FC = () => {
  return (
    <div class="container">
      <Header />
      <div class="content">
        <div
          x-data="{
            messages: [],
            message: '',
            loading: false,
            get sortedMessages() {
              return this.messages.sort((a, b) => b.id - a.id);
            },
            /**
             * メッセージの作成
             * @param message 作成するメッセージ
             */
            async createMessage() {
              if (!this.message.trim()) return;
              this.loading = true;
              try {
                const response = await fetch('/api/messages', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ message: this.message }),
                });
                const data = await response.json();
                this.messages.push(data);
                this.message = '';
              } catch (error) {
                console.error('Error creating message:', error);
              } finally {
                this.loading = false;
              }
            },
            /**
             * メッセージの削除
             * @param id 削除するメッセージのID
             */
            async removeMessage(id) {
              try {
                const response = await fetch(`/api/messages/${id}`, {
                  method: 'DELETE',
                });
                const data = await response.json();
                this.messages = this.messages.filter((message) => message.id !== data.id);
              } catch (error) {
                console.error('Error removing message:', error);
              }
            },
          }"
          x-init="fetch('/api/messages').then(response => response.json()).then(data => {
            messages = data.items || [];
          });"
        >
          <MessageForm />
          <MessageList />
        </div>
      </div>
    </div>
  );
};
