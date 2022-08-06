import { getUsers } from './../services/users';
import { useQuery } from "@tanstack/react-query"

export const useUsers = () => {
  return useQuery(['users'], getUsers);
}