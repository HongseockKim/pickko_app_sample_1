import {Navigate} from "react-router-dom";
import DynamicRoutes from "../../common/util/routing/DynamicRoutes.jsx";

const appRoutes = [
    {
        index: true,
        element: <Navigate to="/main" replace />
    },
    {
        path: '*',
        element: <DynamicRoutes appType="app" />,
    },
];

export default appRoutes