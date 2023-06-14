import { AxiosHeaders, AxiosRequestHeaders } from "axios";
import { ParseHeaderProps } from "./types";

export const getUserTimeZone = (): string => {
  const offset = new Date().getTimezoneOffset();
  const timezone = (offset / 60) * -100;
  const timezoneStr = `${Math.abs(timezone).toString().padStart(4, "0")}`;
  return timezone < 0 ? `-${timezoneStr}` : `+${timezoneStr}`;
};

export const parseHeaders = (props: ParseHeaderProps): Headers => {
  const { customToken, token, headers: customHeaders } = props;
  const bearer = `Bearer ${token}`;
  let headers: Headers = { ...customHeaders };

  if (customToken) headers.set("Authorization", customToken);
  else if (token) headers.set("Authorization", bearer);

  return headers;
};
