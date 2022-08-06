import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createMessage } from '../services/messages';

export const useCreateMessage = () => {
  const queryClient = useQueryClient();
  return useMutation(createMessage,{
    onSuccess: (data) => { 
      if(!data) return;
      queryClient.setQueryData(['messages'], (d) => {
        if(data && d) return [data, ...d]
        return d
      })
    },
    retry: 5
  });
}