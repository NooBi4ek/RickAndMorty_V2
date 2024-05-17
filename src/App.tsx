import { Box } from "@mui/material";
import Routes from "./router/Routes";
import { FC } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Box>
        <Routes />
      </Box>
    </ApolloProvider>
  );
};

export default App;
