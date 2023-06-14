import { HttpErrorResponse } from "rest";

export const errorResponseHandler = (err: HttpErrorResponse) => {
  const { status, message } = err;
  switch (status) {
    case 401:
      /**
       * @todo create function to handle 401 errors
       */
      console.log("Error 401: Unauthorized");
      return Promise.reject(err);
    default:
      return Promise.reject(err);
  }
};
