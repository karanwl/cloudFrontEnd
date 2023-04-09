import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header'
import Home from "./pages/home/Home";
import Leads from "./pages/leads/Leads";
import AddLead from "./pages/addLead/AddLead";
import ViewLead from "./pages/viewLead/ViewLead";
import EditLead from "./pages/editLead/EditLead";
import Login from "./pages/login/Login";

import { redirect, createBrowserRouter , RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leads",
    element: <Leads />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addlead",
    element: <AddLead />,
  },
  {
    path: "/editlead",
    element: <EditLead />,
  },
  {
    path: "/viewlead",
    element: <ViewLead />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router = {router} />
  </React.StrictMode>
);