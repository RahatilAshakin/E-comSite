import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage.jsx";
import NewArrivals from "./Components/Pages/NewArrivals/NewArrivals.jsx";
import Root from "./Root.jsx";
import Women from "./Components/Pages/Women/Women.jsx";
import Kids from "./Components/Pages/Kids/Kids.jsx";
import Dresses from "./Components/Pages/Dresses/Dresses.jsx";
import Tops from "./Components/Pages/Tops/Tops.jsx";
import Bottoms from "./Components/Pages/Bottoms/Bottoms.jsx";
import Accessories from "./Components/Pages/Accessories/Accessories.jsx";
import Sale from "./Components/Pages/Sale/Sale.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";
import ViewCard from "./Components/ViewCcard/ViewCard.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Setting from "./Components/Setting/Setting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />,
          loader: async () => {
          const response = await fetch("/public/new_arrivals.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
       },
      {
        path: "new-arrivals",
        element: <NewArrivals />,
        loader: async () => {
          const response = await fetch("/public/new_arrivals.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
      },
      {
        path: "women",
        element: <Women />,
        loader: async () => {
          const response = await fetch("/public/women.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
      },
      {
        path: "kids",
        element: <Kids />,
        loader: async () => {
          const response = await fetch("/public/kids.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
      },
      { path: "dresses", element: <Dresses />,
          loader: async () => {
          const response = await fetch("/public/dresses.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
       },
      { path: "tops", element: <Tops />,
           loader: async () => {
          const response = await fetch("/public/tops.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
       },
      { path: "bottoms", element: <Bottoms />,
           loader: async () => {
          const response = await fetch("/public/bottoms.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
       },
      { path: "accessories", element: <Accessories />,
           loader: async () => {
          const response = await fetch("/public/accessories.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
       },
      {
        path: "sale",
        element: <Sale />,
        loader: async () => {
          const response = await fetch("/public/cleaned_products.json");
          if (!response.ok) throw new Error("Failed to load sale products");
          return response.json();
        },
      },
      { path: "contact", element: <ContactUs /> },
      { path: "view-cart", element: <ViewCard /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Setting /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
