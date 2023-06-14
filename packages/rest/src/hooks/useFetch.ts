import { FetchParams, HttpErrorResponse } from "../types";
import { getUserTimeZone } from "../utils";

const defaultHeaders = {
  "Content-Type": "application/json",
  "User-Timezone": getUserTimeZone(),
};

export const useFetch = async (params: FetchParams) => {
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

  return result.json();
};