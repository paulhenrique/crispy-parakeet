import { createUser } from './../services/users';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateUsers = () => {
  const queryClient = useQueryClient();
  return useMutation(createUser,{
    onSuccess: (data) => {queryClient.setQueryData(['users', {id: data.id}], data)},
    retry: 5
  });
}