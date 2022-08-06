import { Message } from "../types";

export const getMessages = async () : Promise<Message[]> => {
  const data = await fetch('/api/messages');
  const jsonData = await data.json();
  return jsonData;
};

export const createMessage = async (message: Message) : Promise<Message> => {
  const data = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message)
  });
  if(!data.ok) throw new Error();
  return data.json();
};