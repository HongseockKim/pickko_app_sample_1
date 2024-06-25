import React, {useEffect, useState} from 'react';

const AsyncComponent = ({ path }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        let cleanedUp = false;

        console.log("=>(AsyncComponent.jsx:10) path", path);
        console.log('1@@@@@@@@@@@@@@');

        import(/* @vite-ignore */ "../src/pages" + path).then((module) => {
            if (cleanedUp) {
                return;
            }
            setComponent(() => module.default);
        });

        return () => {
            cleanedUp = true;
        };
    }, [path]);

    return Component ? <Component /> : null;
};

export default AsyncComponent;