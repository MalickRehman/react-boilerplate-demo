import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// This is the main entry point of our React application
// It renders the root component of the application using React's createRoot function
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
