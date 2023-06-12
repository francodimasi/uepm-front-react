import axios, { InternalAxiosRequestConfig } from "axios";
import { PropsWithChildren } from "react";
import { AxiosContext } from "./context";

import {
  AxiosProviderProps,
  AxiosProviderValue,
  HttpErrorResponse,
} from "./types";

const getTimeZone = (): string => {
  const offset = new Date().getTimezoneOffset();
  const timezone = (offset / 60) * -100;
  const timezoneStr = `${Math.abs(timezone).toString().padStart(4, "0")}`;
  return timezone < 0 ? `-${timezoneStr}` : `+${timezoneStr}`;
};

export const AxiosProvider = ({
  children,
  baseUrl,
  config,
  onUnauthorized,
}: PropsWithChildren<AxiosProviderProps>) => {
  /**
   * Set default config to axios requests
   */
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
      "User-Timezone": getTimeZone(),
    },
    ...config,
    baseURL: baseUrl,
  };

  const axiosInstance = axios.create(defaultConfig);

  const initAxios = () => {
    axiosInstance.interceptors.request.use(
      (config) => {
        return { ...config, ...defaultConfig } as InternalAxiosRequestConfig;
      },
      (error) => {
        /**
         * @todo handle request errors
         */
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use((res) => {
      /**
       * @todo parse response data?
       */
      return res;
    }, errorResponseHandler);
  };

  const errorResponseHandler = (error: any) => {
    if (!error) return Promise.reject();
    const { response } = error;
    const err: HttpErrorResponse = {
      status: response?.status,
      message: response?.data?.error,
      token: response?.data?.token,
    };

    switch (response?.status) {
      case 401:
        onUnauthorized();
        return Promise.reject(err);
      default:
        return Promise.reject(err);
    }
  };

  initAxios();

  const value: AxiosProviderValue = { axios: axiosInstance };

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
