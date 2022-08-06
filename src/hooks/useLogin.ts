import { login } from './../services/users';
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(login,{
    onSuccess: (data) => {queryClient.setQueryData(['users', {id: data.id}], data)}
  });
}