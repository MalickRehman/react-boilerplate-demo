import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PokemonsView from "./views/pokemons";
import NotFound from "./views/pokemons/NotFound";

import "./index.css";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// App component serves as the entry point of the application
function App() {
  return (
    // Provide the QueryClient instance to the entire application using QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonsView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
