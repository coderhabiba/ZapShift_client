import { createBrowserRouter } from 'react-router';
import RootLayouts from '../RootLayouts/RootLayouts';
import Home from '../pages/Home/Home/Home';
import Coverage from '../pages/Coverage/Coverage';

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
]);
