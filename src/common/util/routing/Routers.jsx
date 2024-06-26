import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

import App from "../../../app/src/App.jsx";
import Dashboard from "../../../dashbord/src/App.jsx";
import NotFound from "../../error/NotFound.jsx";
import ErrorRender from "../../error/ErrorRender.jsx";
import appRoutes from "../../../app/router/router.jsx";
import dashboardRoutes from "../../../dashbord/router/router.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: appRoutes
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: dashboardRoutes
    },
    {
        path: '/error',
        element: <ErrorRender />,
        children: [
            {
                path: 'notfound',
                element: <NotFound />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/error/notfound" replace />
    }
]);

export default function Routers() {
    return <RouterProvider router={router} />;
}