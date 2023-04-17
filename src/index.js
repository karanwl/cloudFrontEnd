import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/home/Home";
import Leads from "./pages/leads/Leads";
import AddLead from "./pages/addLead/AddLead";
import ViewLead from "./pages/viewLead/ViewLead";
import EditLead from "./pages/editLead/EditLead";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import SignUp from "./pages/signup/SignUp";

import { createBrowserRouter , RouterProvider } from "react-router-dom";

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
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/addlead",
    element: <AddLead />,
  },
  {
    path: "/editlead/:id",
    element: <EditLead />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/viewlead/:id",
    element: <ViewLead />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router = {router} />
    <Footer />
  </React.StrictMode>
);