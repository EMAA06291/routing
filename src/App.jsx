import { useState } from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./componants/Nav/Nav";
import About from "./Pages/About/About";
import Footer from "./componants/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./componants/Layout/Layout";
import { content } from "flowbite-react/tailwind";
export default function App() {
 const x= createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Portfolio", element: <Portfolio /> },
        {path:'/Contact',element:<Contact/>}
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={x} />
    </>
  );
}


