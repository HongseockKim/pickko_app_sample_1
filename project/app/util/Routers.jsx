import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import DynamicRoutes from "./DynamicRoutes.jsx";
import App from "../src/App.jsx";
import NotFound from "../src/error/NotFound.jsx";
import ErrorRender from "../src/error/ErrorRender.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to="Main" replace />
            },
            {
                path: '*',
                element: <DynamicRoutes />,
            },
            {
                path: '/notfound',
                element: <NotFound />
            }
        ]
    },
    {
        path: '/error',
        element: <ErrorRender />,
        children:[
            {
                path: 'notfound',
                element: <NotFound />
            }
        ]
    },
]);

export default function Routers() {
    return <RouterProvider router={router} />;
}