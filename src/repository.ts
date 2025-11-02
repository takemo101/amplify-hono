import type { Schema } from "@amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

const getMessages = async () => {
  const messages = (await client.queries.getMessages()).data?.messages ?? [];
  return messages;
};

const createMessage = async (message: string) => {
  const createdMessage = await client.mutations.createMessage({ message });
  return createdMessage.data;
};

const removeMessage = async (id: number) => {
  const removedMessage = await client.mutations.removeMessage({ id });
  return removedMessage.data;
};

export { getMessages, createMessage, removeMessage };
