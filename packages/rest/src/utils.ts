import { ParseHeaderProps } from './types';

export const getUserTimeZone = (): string => {
  const offset = new Date().getTimezoneOffset();
  const timezone = (offset / 60) * -100;
  const timezoneStr = `${Math.abs(timezone).toString().padStart(4, '0')}`;
  return timezone < 0 ? `-${timezoneStr}` : `+${timezoneStr}`;
};

export const parseHeaders = (props: ParseHeaderProps): Headers => {
  const { customToken, token, headers: customHeaders } = props;
  const bearer = `Bearer ${token}`;
  let headers = { ...customHeaders };

  const authorization = customToken ? customToken : token ? token : '';
  headers = { ...headers, Authorization: authorization };

  return headers;
};
