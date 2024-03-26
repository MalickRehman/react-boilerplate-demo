import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PokemonsView from "./views/pokemons";
import NotFound from "./views/pokemons/NotFound";

import "./index.css";
import AppLayout from "./layouts";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// App component serves as the entry point of the application
function App() {
  return (
    // Provide the QueryClient instance to the entire application using QueryClientProvider
    <AppLayout>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/" component={PokemonsView} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </AppLayout>
  );
}

export default App;
