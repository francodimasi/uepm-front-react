export type HttpErrorResponse = {
  status: number;
  message: string;
};

export type RequestParams = {
  customToken?: string;
  headers?: Headers;
};

export type ParseHeaderProps = {
  customToken?: string;
  token?: string;
  headers?: any;
};

export type FetchParams = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Headers;
  data?: any;
};
