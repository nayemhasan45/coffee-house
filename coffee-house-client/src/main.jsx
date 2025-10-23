import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "./layouts/HomeLayout.jsx";
import Home from "./pages/Home.jsx";
import AddCoffe from "./pages/AddCoffe.jsx";
import UpdateCoffe from "./pages/UpdateCoffe.jsx";
import CoffeDeatils from "./pages/CoffeDeatils.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=> fetch('http://localhost:3000/coffees'),
        Component:Home,
        HydrateFallback:ErrorPage,
      },
      {
        path:"/add-coffe",
        Component:AddCoffe,
      },
      {
        path:"/update-coffe/:id",
        loader:({params})=>fetch(`http://localhost:3000/coffe-details/${params.id}`),
        Component: UpdateCoffe,
      },
      {
        path:"/coffe-details/:id",
        loader:({params})=>fetch(`http://localhost:3000/coffe-details/${params.id}`),
        Component:CoffeDeatils,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
