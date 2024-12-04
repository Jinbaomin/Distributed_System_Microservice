import { useMutation } from "@tanstack/react-query"
import { IBackendResponse, IUser } from "../../types/backend";
import { register as registerApi } from "../../services/apiAuth";
import { AxiosError } from "axios";
import { error } from "console";
import { callRegister } from "../../config/api";
import { nofitication } from "../../helper/notificationHelper";
import { useNavigate } from "react-router";

interface RegisterValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  classroom: string;
  faculty: string;
  university: string;
  password: string;
}

const useRegister = () => {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation<IBackendResponse<IUser>, AxiosError<IBackendResponse<any>>, RegisterValues>({
    mutationFn: async ({ name, email, phone, address, classroom, faculty, university, password }): Promise<any> => callRegister(name, email, phone, address, classroom, faculty, university, password ),
    onSuccess: (data) => {
      console.log(data);
      nofitication(data.message, 'success');
      navigate('/login');
    },
    onError: (error) => {
      console.log(error.response?.data.message);
      nofitication(error.response?.data.message, 'error');
    }
  });

  return { signup, isPending };
}

export default useRegister;