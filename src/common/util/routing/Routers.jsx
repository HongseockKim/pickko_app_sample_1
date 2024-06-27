import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import NotFound from "../../error/NotFound.jsx";
import ErrorRender from "../../error/ErrorRender.jsx";
import appRoutes from "../../../app/router/router.jsx";
import dashboardRoutes from "../../../dashbord/router/router.jsx";
import DashborApp from "../../../dashbord/src/DashborApp.jsx";


const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <DashborApp />,
        children: dashboardRoutes
    },
    {
        path: '/',
        element: <DashborApp />,
        children: appRoutes
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