import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../project/dashbord/src/App.jsx";
import {dashBordRouter} from "./dashbordRouter/DashboradRouter.jsx";
import {AppRouter} from "./appRouter/AppRouter.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Navigate to="/dashbord" replace />,
            },
            ...dashBordRouter,
            ...AppRouter
        ]
    },
]);