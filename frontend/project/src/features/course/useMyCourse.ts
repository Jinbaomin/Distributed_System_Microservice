import { useQuery } from "@tanstack/react-query"
import { callGetMyCourse } from "../../config/api"
import { IBackendResponse, IMyCourse } from "../../types/backend"
import { AxiosError } from "axios"

export const useMyCourse = () => {
  const { data, isFetching } = useQuery<IBackendResponse<IMyCourse[]>, AxiosError<any>>({
    queryKey: ['myCourses'],
    queryFn: async (): Promise<any> => callGetMyCourse()
  })

  return { data, isFetching };
}