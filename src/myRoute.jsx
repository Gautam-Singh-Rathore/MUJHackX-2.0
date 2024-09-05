import { createBrowserRouter } from "react-router-dom";
import ObjIdentApp from "./Object_Identification/ObjIdentApp";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/app",
        element: <ObjIdentApp />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default myRoute;
