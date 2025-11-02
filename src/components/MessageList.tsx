import type { FC } from "hono/jsx";
import { MessageItem } from "./MessageItem";
import { EmptyState } from "./EmptyState";

export const MessageList: FC = () => {
  return (
    <div id="messages">
      <ul class="messages-list" x-show="messages.length > 0">
        <template
          x-for="message in sortedMessages"
          x-bind:key="message.id"
        >
          <MessageItem />
        </template>
      </ul>
      <EmptyState />
    </div>
  );
};
