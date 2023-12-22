import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/myRoutes";
import ContextProvider from "./context/ContextProvider";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <RouterProvider router={myRoutes} />
      </ContextProvider>
    </DndProvider>
  </React.StrictMode>
);
