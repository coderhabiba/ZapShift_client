import { createBrowserRouter } from "react-router";
import RootLayouts from '../RootLayouts/RootLayouts';
import Home from '../pages/Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
    ]
  },
]);