import type { Schema } from "../../../data/resource";

type MessageEntity = Schema["Message"]["type"];

let MESSAGESES: MessageEntity[] = [];

const getList = async () => {
  return MESSAGESES;
};

const create = async (message: Omit<MessageEntity, "id">) => {
  const messages = await getList();

  const maxId = messages.reduce((max, m) => (m.id > max ? m.id : max), 0);

  const createdMessage = {
    id: maxId + 1,
    ...message,
  };

  MESSAGESES.push(createdMessage);

  return createdMessage;
};

const remove = async (id: number) => {
  const removedMessage = MESSAGESES.find((m) => m.id === id);

  if (!removedMessage) {
    throw new Error("Message not found");
  }

  MESSAGESES = MESSAGESES.filter((m) => m.id !== id);

  return removedMessage;
};

export { getList, create, remove };
