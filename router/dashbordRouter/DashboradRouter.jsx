import AsyncComponent from "../../project/app/component/AsyncComponent.jsx";

export const dashBordRouter = [
    {
        path: "/dashbord",
        element: <AsyncComponent path='/Dashboard' onNotFound={() => console.log('Not Found')} />,
    },
];