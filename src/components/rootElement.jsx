"use client";
import React from "react";
import fetch from "cross-fetch";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { AppProvider } from "@/context/AppContext";

const client = new ApolloClient({
  link: createUploadLink({
    uri: process.env.WORDPRESS_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});

const RootElement = ({ children }) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AppProvider>
  );
};

export default RootElement;
