import { Fetch } from './fetch';
import { RequestParams } from '../types';
import { parseHeaders } from '../utils';

export const Rest = (token?: string) => {
  const post = <T, K>(
    url: string,
    params: { data: K } & RequestParams,
  ): Promise<T> => {
    const { data, headers: customHeaders, customToken } = params;
    const headers = parseHeaders({
      customToken,
      token,
      headers: customHeaders,
    });

    return Fetch({ url, method: 'POST', headers, data });
  };

  const get = <T>(url: string, params?: RequestParams): Promise<T> => {
    let headers: Headers = new Headers();
    if (params) {
      const { headers: customHeaders, customToken } = params;
      headers = parseHeaders({
        customToken,
        token,
        headers: customHeaders,
      });
    }

    return Fetch({ url, method: 'GET', headers });
  };

  const put = <T, K>(
    url: string,
    params: { data: K } & RequestParams,
  ): Promise<T> => {
    const { data, headers: customHeaders, customToken } = params;
    const headers = parseHeaders({
      customToken,
      token,
      headers: customHeaders,
    });

    return Fetch({ url, method: 'PUT', headers, data });
  };

  const _delete = <T>(url: string, params?: RequestParams): Promise<T> => {
    let headers: Headers = new Headers();
    if (params) {
      const { headers: customHeaders, customToken } = params;
      headers = parseHeaders({
        customToken,
        token,
        headers: customHeaders,
      });
    }

    return Fetch({ url, method: 'DELETE', headers });
  };

  return {
    get,
    post,
    put,
    delete: _delete,
  };
};
