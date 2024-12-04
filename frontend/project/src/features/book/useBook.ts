import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { callGetAllBook } from "../../config/api"
import { IBackendResponse, IBook } from "../../types/backend";
import { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";

export const useBook = () => {
  const [params, setSearchParams] = useSearchParams();
  let query = '';
  if(params.get('filter')) {
    query += `filter=${params.get('filter')}`;
  }

  if(params.get('sortBy')) {
    query += `&sortBy=${params.get('sortBy')}`;
  }

  const { data, isFetching, isLoading } = useQuery<IBackendResponse<IBook[]>, AxiosError<IBackendResponse<any>>>({
    queryKey: ['books', query],
    queryFn: (): Promise<any> => callGetAllBook(query),
    staleTime: Infinity,
    placeholderData: keepPreviousData
  });

  return { data, isFetching, isLoading };
}