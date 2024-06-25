import AsyncComponent from "../../project/app/component/AsyncComponent.jsx";

export const AppRouter = [
    {
        path: "/app",
        element: <AsyncComponent path='/TestPages' onNotFound={() => console.log('Not Found')} />,
    },
];