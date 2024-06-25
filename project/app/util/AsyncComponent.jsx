import {useEffect, useState} from "react";


const AsyncComponent = ({ path, onNotFound, loading, ...props }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        let cleanedUp = false;
        console.log('1@@@@@@@@@@@@@@');
        console.log("=>(AsyncComponent.jsx:10) path", path);
        console.log('1@@@@@@@@@@@@@@');
        import("../src/pages" + path)
            .then((module) => {
                if (cleanedUp) {
                    return;
                }
                setComponent(() => module.default);
            })
            .catch((e) => {
                if (cleanedUp) {
                    return;
                }
                setComponent(null);
                if (e.message.startsWith("Cannot find module")) {
                    if (typeof onNotFound === "function") {
                        onNotFound();
                    }
                }
            });

        return () => {
            setComponent(null);
            cleanedUp = true;
        };
    }, [path, onNotFound]);

    return Component ? <Component {...props} /> : loading || "Loading...";
};


export default AsyncComponent;