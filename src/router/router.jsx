import { createBrowserRouter } from 'react-router';
import RootLayouts from '../RootLayouts/RootLayouts';
import Home from '../pages/Home/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import AuthLayout from '../RootLayouts/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import PrivateRoute from './PrivateRoute';
import Rider from '../pages/Rider/Rider';
import SendParcel from '../pages/SendParcel/SendParcel';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'rider',
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: 'send-parcel',
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch('/serviceCenter.json').then(res => res.json()),
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenter.json').then(res => res.json()),
      },
    ],
  },
  // auth layout
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);
