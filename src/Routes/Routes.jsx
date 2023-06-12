import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AdminHome from "../Dashboard/AdimnHome/AdminHome";
import Dashboard from "../Dashboard/AdimnHome/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allusers from "../Dashboard/AdimnHome/Allusers";
import AddNewClass from "../Dashboard/Instractor/AddNewClass";
import MyClasses from "../Dashboard/Instractor/MyClasses";
import ManageAllClass from "../Dashboard/AdimnHome/ManageAllClass";
import MySelectedClass from "../Dashboard/Student/MySelectedClass";
import MyEnroledClass from "../Dashboard/Student/MyEnroledClass";
import Classes from "../Pages/Classes/Classes";
import AdminRoute from "./AdminRoute";
import InstractorRoute from "./InstractorRoute";
import InstratorPage from "../Pages/InstratorPage/InstratorPage";
import Payment from "../Dashboard/Payment/Payment";

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
        path: "instractors",
        element: <InstratorPage></InstratorPage>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
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
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclases",
        element: <ManageAllClass></ManageAllClass>,
      },
      {
        path: "addnewclass",
        element: <AddNewClass></AddNewClass>,
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myslectedclasses",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "mynroledclasses",
        element: <MyEnroledClass></MyEnroledClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
