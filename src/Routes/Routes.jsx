import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PageHeader from "../Shared/PageHeader/pageHeader";
import ShopProducts from "../Pages/ShopPorducts/ShopProducts/ShopProducts";
import Checkout from "../Pages/Checkout/Checkout";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AboutFosholBazar from "../Pages/AboutUs/AboutUs/AboutFosholBazar";
import ContactUs from "../Pages/ContactUS/ContactUs";
import AddProducts from "../Pages/AddProducts/AddProducts";
// import Exp from "../Pages/Expriments/Exp";
import MyProducts from "../Pages/MyProducts/MyProducts";
import PrivateRotes from "./PrivateRotes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/MyCart/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <ShopProducts></ShopProducts>,
        // loader: () => fetch("https://foshol-bazar-server-site.vercel.app/products"),
      },
      // {
      //   path: "cart",
      //   element: (
      //     <PrivateRotes>
      //       <Cart></Cart>
      //     </PrivateRotes>
      //   ),
      // },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "addproduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "aboutus",
        element: <AboutFosholBazar></AboutFosholBazar>,
      },
      {
        path: "contractus",
        element: <ContactUs></ContactUs>,
      },
      // {
      //   path: "/exp",
      //   element: <Exp></Exp>,
      // },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "mycart",
        element: <Cart></Cart>
      },
      {
        path: "alluser",
        element: <AllUsers></AllUsers>
      }

    ]
  }
]);
