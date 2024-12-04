import { useQuery } from "@tanstack/react-query"
import { callGetMyCourse, callMyCourseBySubject } from "../../config/api"
import { IBackendResponse, IMyCourse } from "../../types/backend"
import { AxiosError } from "axios"

export const useMyCourseBySubject = () => {
  const { data, isFetching } = useQuery<IBackendResponse<IMyCourse[]>, AxiosError<any>>({
    queryKey: ['myCoursesBySubject'],
    queryFn: async (): Promise<any> => callMyCourseBySubject()
  })

  return { data, isFetching };
}