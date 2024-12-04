import { QueryClientContext, useMutation, useQueryClient } from "@tanstack/react-query"
import { callCreateBook, callUpdateBook } from "../../config/api";
import { IBackendResponse, IBook } from "../../types/backend";
import { Axios, AxiosError } from "axios";
import { nofitication } from "../../helper/notificationHelper";

export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  const id = window.location.pathname.split('/')[3];
  const { mutate: updateBook, isPending, isSuccess } = useMutation<IBackendResponse<IBook>, AxiosError<any>, IBook>({
    mutationFn: ({ title, author, company, manufacturer, published_year, pages, rating, imageUrl, description }): Promise<any> => callUpdateBook(id, title, author, company, manufacturer, published_year, pages, rating, imageUrl, description),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['books']
      });
      nofitication(data.message, 'success');
    }
  });

  return { updateBook, isPending, isSuccess };
}