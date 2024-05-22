import { AxiosError } from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

// type APIErrorResponse = { errorMsg: string }
type CustomErrorMsg = {
  zod?: string;
  error?: string;
  axios_400?: string;
  axios_401?: string;
  axios_404?: string;
  axios_500?: string;
  axios_409?: string;
};

const GenericErrorMsg = 'OOPS! something went wrong.';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleErrors = (
  navigate: NavigateFunction,
  error: unknown,
  customErrMsg?: CustomErrorMsg
) => {
  if (error instanceof z.ZodError) {
    toast.error('Invalid input(s)');
    return;
  }
  if (error instanceof AxiosError && error.response?.status === 400) {
    toast.error(customErrMsg?.axios_400 ?? error.response?.data?.errorMsg ?? GenericErrorMsg);
    return;
  }
  if (error instanceof AxiosError && error.response?.status === 401) {
    toast.error(customErrMsg?.axios_401 ?? error.response.data?.errorMsg ?? GenericErrorMsg);
    navigate('/login');
    return;
  }
  if (error instanceof AxiosError && error.response?.status === 404) {
    toast.error(customErrMsg?.axios_404 ?? error.response?.data?.errorMsg ?? GenericErrorMsg);
    return;
  }
  if (error instanceof AxiosError && error.response?.status === 500) {
    toast.error(customErrMsg?.axios_500 ?? error.response?.data?.errorMsg ?? GenericErrorMsg);
    return;
  }
  if (error instanceof AxiosError && error.response?.status === 409) {
    toast.error(customErrMsg?.axios_409 ?? error.response?.data?.errorMsg ?? GenericErrorMsg);
    return;
  }
  if (error instanceof Error) {
    toast.error(customErrMsg?.error ?? error?.message ?? GenericErrorMsg);
    return;
  }
  toast.error(GenericErrorMsg);
};

export const getFallback = (name: string) => {
  const nameArr = name.split(' ');

  const firstName = nameArr?.[0];
  const lastName = nameArr?.[1];

  const fallback = firstName?.[0] + lastName?.[0];

  return { firstName, lastName, fallback };
};
