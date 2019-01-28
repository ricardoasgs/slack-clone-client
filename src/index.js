import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from "react-apollo";

import { API_URL } from "./config/constants";
import Routes from "./routes";
import { register as registerServiceWorker } from "./serviceWorker";

const networkInterface = createNetworkInterface({
  uri: API_URL
});

const client = new ApolloClient({
  networkInterface
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById("root"));
registerServiceWorker();
