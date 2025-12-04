import { createBrowserRouter } from 'react-router';
import RootLayouts from '../RootLayouts/RootLayouts';
import Home from '../pages/Home/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import AuthLayout from '../RootLayouts/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';

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
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenter.json').then(res => res.json()),
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);
