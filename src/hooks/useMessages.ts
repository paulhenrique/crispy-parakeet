import { useQuery } from "@tanstack/react-query"
import { getMessages } from "../services/messages"

export const useMessages = () => {
  return useQuery(['messages'], getMessages);
}