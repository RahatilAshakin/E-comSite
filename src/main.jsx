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
      { index: true, element: <Home /> },
      { path: "new-arrivals", element: <NewArrivals /> },
      { path: "women", element: <Women /> },
      { path: "kids", element: <Kids /> },
      { path: "dresses", element: <Dresses /> },
      { path: "tops", element: <Tops /> },
      { path: "bottoms", element: <Bottoms /> },
      { path: "accessories", element: <Accessories /> },
      { path: "sale", element: <Sale /> },
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
