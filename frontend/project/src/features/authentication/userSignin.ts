import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login as loginApi } from "../../services/apiAuth"
import { IAccount, IBackendResponse, ILoginResponse } from "../../types/backend";
import { Flip, toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { Button, notification, Space } from 'antd';
import { callLogin } from "../../config/api";

interface loginVairable {
  email: string;
  password: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const clientQuery = useQueryClient();

  const { mutate: login, isPending } = useMutation<IBackendResponse<ILoginResponse>, AxiosError<IBackendResponse<any>>, loginVairable>({
    mutationFn: ({ email, password }): Promise<any> => callLogin(email, password),
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.data.token);
      clientQuery.removeQueries({
        queryKey: ['account']
      });
      toast.success(data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: 'light',
        transition: Flip
      });
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.response?.data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: 'light',
        transition: Flip
      });
    }
  })

  return { login, isPending };
}

export default useLogin;