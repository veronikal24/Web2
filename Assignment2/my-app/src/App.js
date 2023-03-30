
import './App.css';
/* existing imports */
import Root from "./routes/root.jsx";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
  },
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
