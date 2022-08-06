import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../store";
import { Provider } from "react-redux";
import Template from "../template";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Template>{children}</Template>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
