import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
const client = new ApolloClient({
    link: createUploadLink({
        uri: "https://liamwebwright.co.uk/24hrrpg/graphql",
    }),
    cache: new InMemoryCache(),
});

export default client;
