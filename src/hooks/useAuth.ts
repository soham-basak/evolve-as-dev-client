import { Session } from '@/context/SessionContext';
import { handleErrors } from '@/lib/utils';
import { LoginProvider } from '@/types/auth-types';
import {
  LoginWithProviderResponse,
  loginWithProviderResponseSchema,
} from '@/validations/auth.validation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogin = () => {
  const navigate = useNavigate();

  const mutationResult = useMutation({
    mutationKey: ['login'],
    mutationFn: async (provider: LoginProvider) => {
      const { data } = await axios.post<LoginWithProviderResponse>(
        `/auth-service/auth/login/${provider}`
      );

      const { url } = loginWithProviderResponseSchema.parse(data);

      return url;
    },

    onSuccess: (url) => (window.location.href = url),

    onError: (err, provider) => {
      console.error('login error: ', provider, err);

      return handleErrors(navigate, err);
    },
  });

  return mutationResult;
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationResult = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      await axios.post('auth-service/auth/logout');
    },
    onSuccess: () => {
      toast.success('Logged out successfully.');
      queryClient.invalidateQueries({ queryKey: ['session'], exact: true });
      queryClient.clear();

      navigate('/');
      return;
    },

    onError: (err) => {
      console.error('logout error: ', err);

      return handleErrors(navigate, err);
    },
  });

  return mutationResult;
};

export const useGetUser = () => {
  const queryResult = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data } = await axios.get<Session | null>('/auth-service/auth/user');

      return data;
    },
    refetchOnMount: false,
    retryOnMount: false,
    retry: false,
    staleTime: 10 * 60 * 1000, // Session will be valid for 10 mins.
    gcTime: 15 * 60 * 1000, // Session will be cached for 15 mins.
  });

  return { queryResult, user: queryResult.data ?? null };
};
