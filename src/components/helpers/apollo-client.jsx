import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
const client = new ApolloClient({
    link: createUploadLink({
        uri: "https://liamwebwright.co.uk/24hrrpg/graphql",
    }),
    cache: new InMemoryCache(),
});

const FormSubmissionWrapper = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default FormSubmissionWrapper;
