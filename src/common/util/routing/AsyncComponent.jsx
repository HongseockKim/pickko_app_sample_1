import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loading from "../../loadingTemplate/Loading.jsx";
import {useSelector} from "react-redux";

const AsyncComponent = ({ path }) => {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const isLoadings = useSelector((state) => state.system.isLoading);

    useEffect(() => {
        let cleanedUp = false;
        console.log("path", path);
        console.log("appType", import.meta.env.VITE_APP_TYPE);

        const importComponent = async () => {
            try {
                let module;
                module = await import(/* @vite-ignore */ `../../../${import.meta.env.VITE_APP_TYPE}/src/pages${path}.jsx`);
                console.log(module)
                if (!cleanedUp) {
                    setComponent(() => module.default);
                }
            } catch (err) {
                console.log("Import error:", err);
                if (!cleanedUp) {
                    setError(true);
                }
            }
        };

        importComponent();

        return () => {
            cleanedUp = true;
        };
    }, [path]);

    useEffect(() => {
        if (error) {
            navigate('/error/notfound');
        }
    }, [error, navigate]);

    useEffect(() => {
        console.log("isLoadings", isLoadings);
    }, [isLoadings]);

    return Component ? <Component /> : <Loading />;
};

export default AsyncComponent;