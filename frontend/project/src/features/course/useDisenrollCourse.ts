import { useMutation, useQueryClient } from "@tanstack/react-query"
import { callDisenrollCourse, callEnrollCourse } from "../../config/api"
import { IBackendResponse } from "../../types/backend"
import { AxiosError } from "axios"
import { nofitication } from "../../helper/notificationHelper";
import { useNavigate } from "react-router";

interface IDisenrollCourse {
  courseId: string;
}

export const useDisenrollCourse = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: disenroll, isPending } = useMutation<IBackendResponse<any>, AxiosError<any>, IDisenrollCourse>({
    mutationFn: async ({ courseId }): Promise<any> => callDisenrollCourse(courseId),
    onSuccess: (data) => {
      nofitication(data.message, 'success');
      queryClient.invalidateQueries({
        queryKey: ['myCourses']
      });
    },
    onError: (error) => {
      nofitication(error.response?.data.message, 'error');
    }
  })

  return { disenroll, isPending };
}