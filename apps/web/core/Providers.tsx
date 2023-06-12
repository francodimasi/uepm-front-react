"use client";

import { AxiosProvider } from "rest";
import { BASE_URL } from "./constants";

export const Providers = ({children}) => {
    return (
        <AxiosProvider baseUrl={BASE_URL} onUnauthorized={() => console.error("Eror 401 - Unauthorized")}>{children}</AxiosProvider>
    )
}