import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AdminHome from "../Dashboard/AdimnHome/AdminHome";
import Dashboard from "../Dashboard/AdimnHome/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allusers from "../Dashboard/AdimnHome/Allusers";
import AddNewClass from "../Dashboard/Instractor/AddNewClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "users",
        element: <Allusers></Allusers>,
      },
      {
        path: "addnewclass",
        element: <AddNewClass></AddNewClass>,
      },
    ],
  },
]);

export default router;
