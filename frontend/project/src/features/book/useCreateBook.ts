import { QueryClientContext, useMutation, useQueryClient } from "@tanstack/react-query"
import { callCreateBook } from "../../config/api";
import { IBackendResponse, IBook } from "../../types/backend";
import { Axios, AxiosError } from "axios";
import { nofitication } from "../../helper/notificationHelper";

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewBook, isPending, isSuccess } = useMutation<IBackendResponse<IBook>, AxiosError<any>, IBook>({
    mutationFn: ({ title, author, company, manufacturer, published_year, pages, rating, imageUrl, description }): Promise<any> => callCreateBook(title, author, company, manufacturer, published_year, pages, rating, imageUrl, description),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['books']
      });
      nofitication(data.message, 'success');
    }
  });

  return { createNewBook, isPending, isSuccess };
}