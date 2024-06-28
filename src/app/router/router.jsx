import {createBrowserRouter, Navigate} from "react-router-dom";
import DynamicRoutes from "../../common/util/routing/DynamicRoutes.jsx";
import App from "../src/App.jsx";
import ErrorRender from "../../common/error/ErrorRender.jsx";
import NotFound from "../../common/error/NotFound.jsx";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/main" replace />
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

export default appRoutes;