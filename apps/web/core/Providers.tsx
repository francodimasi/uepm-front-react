"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const defaultStaleTime = 1000 * 60 * 60 * 1;
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      staleTime: defaultStaleTime,
    },
  },
});

export const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
