import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IAccount, IBackendResponse, IUser } from "../../types/backend";
import { AxiosError } from "axios";
import { IFormInput } from "../../pages/client/Profile/Profile_Info";
import { callUpdateUser } from "../../config/api";
import { Flip, toast } from "react-toastify";
import { nofitication } from "../../helper/notificationHelper";

interface IUpdateUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  classroom: string;
  faculty: string;
  university: string;
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending, isSuccess } = useMutation<IBackendResponse<IAccount>, AxiosError<IBackendResponse<string>>, IUpdateUser>({
    mutationFn: async ({ id, name, email, phone, address, classroom, faculty, university }): Promise<any> => callUpdateUser(id, name, email, phone, address, classroom, faculty, university),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ['account']
      });
      nofitication(data.message, 'success');
    },
    onError: (error) => {
      console.log(error);
      nofitication(error.response?.data.message, 'error');
    }
  });

  return { updateUser, isPending, isSuccess };
}
