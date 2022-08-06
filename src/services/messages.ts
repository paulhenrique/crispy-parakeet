import { Message } from "../types";

export const getMessages = async () : Promise<Message[]> => {
  const data = await fetch('/api/messages');
  const jsonData = await data.json();
  return jsonData;
};