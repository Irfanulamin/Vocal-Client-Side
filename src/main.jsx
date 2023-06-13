import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import Instructors from "./Components/Pages/Instructors/Instructors";
import Classes from "./Components/Pages/Classes/Classes";
import DashBoard from "./Components/Layout/DashBoard";
import MySelectedClasses from "./Components/DashboardPages/MySelectedClasses/MySelectedClasses";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllUsers from "./Components/DashboardPages/AllUsers/AllUsers";
import AddClasses from "./Components/DashboardPages/AddClasses/AddClasses";
import ManageClasses from "./Components/DashboardPages/ManageClasses/ManageClasses";
import MyClasses from "./Components/DashboardPages/My Class/MyClasses";
import Payment from "./Components/DashboardPages/CheckoutForm/Payment";
import MyEnrolledClasses from "./Components/DashboardPages/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "./Components/DashboardPages/PaymentHistory/PaymentHistory";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "selectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
