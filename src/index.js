import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { MainPage } from "./components";
import ErrorPage from "./error-page";
import Birth from "./components/pages/birth/Birth";
import Reg from "./components/pages/birth/Reg";
import State from "./components/pages/birth/State";
import Lga from "./components/pages/birth/Lga";
import Registration from "./components/pages/birth/Registration";
import Login from "./components/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "birth", element: <Birth /> },
      { path: "birth/registration", element: <Reg /> },
      { path: "birth/state/:id", element: <State /> },
      { path: "birth/lga/:lgaid", element: <Lga /> },
      {
        path: "birth/list/:zonalid/:stateid/:lgaid",
        element: <Registration />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
c;
