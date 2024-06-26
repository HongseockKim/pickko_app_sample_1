import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loading from "../../loadingTemplate/Loading.jsx";
import {useSelector} from "react-redux";

const AsyncComponent = ({ path, appType }) => {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const isLoadings = useSelector((state) => state.system.isLoading);

    useEffect(() => {
        let cleanedUp = false;
        console.log("path", path);        console.log("appType", appType);

        const importComponent = async () => {
            try {
                let module;
                if (appType === 'dashboard') {
                    module = await import(/* @vite-ignore */ `../../../dashbord/src/pages${path}.jsx`);
                } else {
                    module = await import(/* @vite-ignore */ `../../../app/src/pages${path}.jsx`);
                }

                if (!cleanedUp) {
                    console.log("=>(AsyncComponent.jsx:24) module", module);
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
    }, [path, appType]);

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