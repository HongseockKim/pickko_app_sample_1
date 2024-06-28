import {createBrowserRouter, Navigate} from "react-router-dom";
import DynamicRoutes from "../../common/util/routing/DynamicRoutes.jsx";
import DashboardApp from "../src/DashborApp.jsx";
import ErrorRender from "../../common/error/ErrorRender.jsx";
import NotFound from "../../common/error/NotFound.jsx";

const dashboardRoutes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardApp />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashbordMain" replace />
            },
            {
                path: '*',
                element: <DynamicRoutes />,
            },
        ]
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

export default dashboardRoutes;