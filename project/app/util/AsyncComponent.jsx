import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loading from "../src/loadingTemplate/Loading.jsx";
import {useSelector} from "react-redux";

const AsyncComponent = ({ path }) => {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const isLoadings = useSelector((state) => state.system.isLoading);

    useEffect(() => {
        let cleanedUp = false;
        console.log("=>(AsyncComponent.jsx:10) path", path);

        import(/* @vite-ignore */ "../src/pages" + path).then((module) => {
            if (cleanedUp) {
                return;
            }
            console.log("=>(AsyncComponent.jsx:17) module", module);
            setComponent(() => module.default);
        }).catch(err => {
            console.log("=>(AsyncComponent.jsx:20) err", err);
            if (!cleanedUp) {
                setError(true);
            }
        });

        return () => {
            cleanedUp = true;
        };
    }, [path]);

    useEffect(() => {
        if (error) {
            navigate('error/notfound');
        }
    }, [error, navigate]);

    useEffect(() => {
        console.log("=>(AsyncComponent.jsx:40) isLoadings", isLoadings);
    }, [isLoadings]);

    return Component ? <Component /> : <Loading/>
};

export default AsyncComponent;