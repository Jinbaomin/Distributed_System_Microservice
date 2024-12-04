import { useQuery } from "@tanstack/react-query"
import { callGetBookByID } from "../../config/api"
import { IBackendResponse, IBook } from "../../types/backend";
import { AxiosError } from "axios";

export const useBookById = () => {
  const bookId = window.location.pathname.split('/')[3];
  const { data, isFetching, isLoading } = useQuery<IBackendResponse<IBook>, AxiosError<IBackendResponse<any>>>({
    queryKey: ['books', bookId],
    queryFn: (): Promise<any> => callGetBookByID(bookId),
    staleTime: Infinity
  });

  return { data, isFetching, isLoading };
}