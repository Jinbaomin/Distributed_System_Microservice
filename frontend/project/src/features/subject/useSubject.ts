import { AxiosError } from "axios"
import { IBackendResponse, ISubject } from "../../types/backend"
import { useQuery } from "@tanstack/react-query"
import { callGetAllSubject } from "../../config/api"

export const useSubject = () => {
  const { data, isFetching } = useQuery<IBackendResponse<ISubject[]>, AxiosError<any>>({
    queryKey: ['subjects'],
    queryFn: async (): Promise<any> => callGetAllSubject()
  });

  return { data, isFetching }
}