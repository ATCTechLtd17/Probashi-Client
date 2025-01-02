import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//import BMETLayout from '../layouts/BMETLayout';

// Page imports
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import MakeCV from '../pages/MakeCV';
import Services from '../pages/Services';
import Recruitment from '../pages/Recruitment';
import Government from '../pages/Government';
import Portals from '../pages/Portals';
import Cards from '../pages/Cards';
import EmigrationClearance from '../pages/EmigrationClearance';
import PDOBooking from '../pages/PDOBooking';
import BMETRegistration from '../pages/BMETRegistration';
//import Dashboard from '../components/BMET/Dashboard';

// BMET Dashboard components
import BMETDashboard from '../pages/BMET/Dashboard';
import BMETProfile from '../pages/BMET/Profile';
import BMETMedical from '../pages/BMET/Medical';
import BMETTraining from '../pages/BMET/Training';
import BMETManpower from '../pages/BMET/Manpower';
import BMETCertificates from '../pages/BMET/Certificates';
import BMETStatus from '../pages/BMET/Status';
import App from '../App';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public routes
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Registration />
      },
      {
        path: 'make-cv',
        element: <MakeCV />
      },
      {
        path: 'government',
        element: <Government />
      },
      {
        path: 'emigration',
        element: <EmigrationClearance />
      },
      {
        path: 'pdobooking',
        element: <PDOBooking />
      },
      {
        path: 'bmetregistration',
        element: <BMETRegistration />
      },

      // // Protected routes
      // {
      //   element: <ProtectedLayout />,
      //   children: [
      //     {
      //       path: 'services/*',
      //       element: <Services />
      //     },
      //     {
      //       path: 'recruitment/*',
      //       element: <Recruitment />
      //     },
      //     {
      //       path: 'portals/*',
      //       element: <Portals />
      //     },
      //     {
      //       path: 'cards/*',
      //       element: <Cards />
      //     }
      //   ]
      // },

      // BMET Dashboard routes
      // {
      //   path: 'bmet',
      //   element: <BMETLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <BMETDashboard />
      //     },
      //     {
      //       path: 'profile',
      //       element: <BMETProfile />
      //     },
      //     {
      //       path: 'medical',
      //       element: <BMETMedical />
      //     },
      //     {
      //       path: 'training',
      //       element: <BMETTraining />
      //     },
      //     {
      //       path: 'manpower',
      //       element: <BMETManpower />
      //     },
      //     {
      //       path: 'certificates',
      //       element: <BMETCertificates />
      //     },
      //     {
      //       path: 'status',
      //       element: <BMETStatus />
      //     }
      //   ]
      // }
    ]
  }
]);


export default AppRoutes;