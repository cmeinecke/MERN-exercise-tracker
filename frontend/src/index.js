import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ExercisesContextProvider } from "./context/ExercisesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExercisesContextProvider>
      <App />
    </ExercisesContextProvider>
  </React.StrictMode>
);
