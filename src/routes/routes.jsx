import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MakeCV from "../pages/MakeCV";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";
import Recruitment from "../pages/Recruitment";
import Government from "../pages/Government";
import EmigrationClearance from "../pages/EmigrationClearance";
import PDOBooking from "../pages/PDOBooking";
import BMETRegistration from "../pages/BMETRegistration";
import Portals from "../pages/Portals";
import Cards from "../pages/Cards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "make-cv",
        element: <MakeCV />,
      },
      {
        path: "services",
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "recruitment",
        element: (
          <PrivateRoute>
            <Recruitment />
          </PrivateRoute>
        ),
      },
      {
        path: "government",
        element: <Government />,
      },
      {
        path: "emigration",
        element: <EmigrationClearance />,
      },
      {
        path: "pdobooking",
        element: <PDOBooking />,
      },
      {
        path: "bmetregistration",
        element: <BMETRegistration />,
      },
      {
        path: "portals",
        element: (
          <PrivateRoute>
            <Portals />
          </PrivateRoute>
        ),
      },
      {
        path: "cards",
        element: (
          <PrivateRoute>
            <Cards />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
