import {Navigate} from "react-router-dom";
import DynamicRoutes from "../../common/util/routing/DynamicRoutes.jsx";

const dashboardRoutes = [
    {
        index: true,
        element: <Navigate to="/dashbordMain" replace />
    },
    {
        path: '*',
        element: <DynamicRoutes />,
    },
];

export default dashboardRoutes