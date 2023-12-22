import { FetchParams, HttpErrorResponse } from '../types';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const Fetch = async (params: FetchParams) => {
  const { url, method, data, headers = {} } = params;
  const result = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: { ...headers, ...defaultHeaders },
  });

  if (!result.ok) {
    const { status, statusText: message } = result;
    const err: HttpErrorResponse = {
      status,
      message,
    };
    return Promise.reject(err);
  }

  return Promise.resolve(result.json());
};
