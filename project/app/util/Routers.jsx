import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from "../src/App.jsx";
import DynamicRoutes from "../component/DynamicRoutes.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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