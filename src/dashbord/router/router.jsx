import {Navigate} from "react-router-dom";
import DynamicRoutes from "../../common/util/routing/DynamicRoutes.jsx";

const dashboardRoutes = [
    {
        index: true,
        element: <Navigate to="/dashboard" replace />
    },
    {
        path: '*',
        element: <DynamicRoutes appType="dashboard" />,
    },
];

export default dashboardRoutes