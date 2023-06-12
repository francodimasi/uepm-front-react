import {
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";

export type HttpErrorResponse = {
  status: number;
  message: string;
  token?: string;
};

export type AxiosProviderProps = {
  baseUrl: string;
  onUnauthorized: () => void;
  config?: InternalAxiosRequestConfig;
};

export type AxiosProviderValue = {
  axios: AxiosInstance;
};

export type RequestParams = {
  customToken?: string;
  headers?: AxiosRequestHeaders;
  options?: RequestParamsOptions;
};

export type RequestParamsOptions = {
  skipBaseUrl?: boolean;
};

export type ParseHeaderProps = {
  customToken?: string;
  token?: string;
  headers?: AxiosRequestHeaders;
};
