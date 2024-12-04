import { useMutation, useQueryClient } from "@tanstack/react-query"
import { callEnrollCourse } from "../../config/api"
import { IBackendResponse } from "../../types/backend"
import { AxiosError } from "axios"
import { nofitication } from "../../helper/notificationHelper";
import { useNavigate } from "react-router";

interface IEnrollCourse {
  courseId: string;
}

export const useEnrollCourse = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: enroll, isPending } = useMutation<IBackendResponse<any>, AxiosError<any>, IEnrollCourse>({
    mutationFn: async ({ courseId }): Promise<any> => callEnrollCourse(courseId),
    onSuccess: (data) => {
      nofitication(data.message, 'success');
      queryClient.invalidateQueries({
        queryKey: ['subject']
      });
      queryClient.invalidateQueries({
        queryKey: ['myCourses']
      });
      navigate(-1);
    },
    onError: (error) => {
      nofitication(error.response?.data.message, 'error');
    }
  })

  return { enroll, isPending };
}