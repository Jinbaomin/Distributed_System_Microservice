import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IBackendResponse } from "../../types/backend";
import { AxiosError } from "axios";
import { callDeleteBook } from "../../config/api";
import { nofitication } from '../../helper/notificationHelper';

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBook, isPending } = useMutation<IBackendResponse<any>, AxiosError<any>, { bookId: string }>({
    mutationFn: ({ bookId }): Promise<any> => callDeleteBook(bookId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['books']
      });
      nofitication(data.message, 'success');
    }
  });

  return { deleteBook, isPending };
}