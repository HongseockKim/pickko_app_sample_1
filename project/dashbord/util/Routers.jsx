import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import DynamicRoutes from "./DynamicRoutes.jsx";
import App from "../src/App.jsx";


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
                element: <DynamicRoutes />
            }
        ]
    }
]);

export default function Routers() {
    return <RouterProvider router={router} />;
}