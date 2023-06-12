import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AdminHome from "../Dashboard/AdimnHome/AdminHome";
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
import Dashboard from "../Dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";
import PaymentHistory from "../Dashboard/Student/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
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
        element: (
          <AdminRoute>
            <ManageAllClass></ManageAllClass>
          </AdminRoute>
        ),
      },
      {
        path: "addnewclass",
        element: (
          <InstractorRoute>
            <AddNewClass></AddNewClass>
          </InstractorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstractorRoute>
            {" "}
            <MyClasses></MyClasses>
          </InstractorRoute>
        ),
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
      {
        path: "succespayment",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
