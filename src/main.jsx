import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/myRoutes";
import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={myRoutes} />
    </ContextProvider>
  </React.StrictMode>
);
