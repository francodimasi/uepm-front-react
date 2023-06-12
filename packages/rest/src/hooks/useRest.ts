import { AxiosHeaders, AxiosRequestHeaders } from "axios";
import { useContext } from "react";
import { AxiosContext } from "../context/context";
import { ParseHeaderProps, RequestParams } from "../types";

const parseHeaders = (
  props: ParseHeaderProps
): AxiosRequestHeaders | undefined => {
  const { customToken, token, headers: customHeaders } = props;
  const bearer = `Bearer ${token}`;
  let headers: AxiosRequestHeaders | undefined = new AxiosHeaders(
    customHeaders
  );

  if (customToken) headers.setAuthorization(customToken);
  else if (token) headers.setAuthorization(bearer);

  return headers;
};

export const useRest = (token?: string) => {
  const { axios } = useContext(AxiosContext);
  
  const post = <T, K>(
    url: string,
    params: { data: K } & RequestParams
  ): Promise<T> => {
    const { data, headers: customHeaders, customToken } = params;
    const headers = parseHeaders({
      customToken,
      token,
      headers: customHeaders,
    });

    return axios.post(url, data, { headers });
  };

  const get = <T>(url: string, params?: RequestParams): Promise<T> => {
    let headers: AxiosRequestHeaders | undefined;
    if (params) {
      const { headers: customHeaders, customToken } = params;
      headers = parseHeaders({
        customToken,
        token,
        headers: customHeaders,
      });
    }

    return axios.get(url, { headers });
  };

  const put = <T, K>(
    url: string,
    params: { data: K } & RequestParams
  ): Promise<T> => {
    const { data, headers: customHeaders, customToken } = params;
    const headers = parseHeaders({
      customToken,
      token,
      headers: customHeaders,
    });

    return axios.put(url, data, { headers });
  };

  const _delete = <T>(url: string, params?: RequestParams): Promise<T> => {
    let headers: AxiosRequestHeaders | undefined;
    if (params) {
      const { headers: customHeaders, customToken } = params;
      headers = parseHeaders({
        customToken,
        token,
        headers: customHeaders,
      });
    }

    return axios.delete(url, { headers });
  };

  return {
    post,
    get,
    put,
    delete: _delete,
  };
};
