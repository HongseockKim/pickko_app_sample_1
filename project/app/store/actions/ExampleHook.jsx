import {useQuery} from "react-query";
import exampleApiRequest from "../../api/exampleApiRequest.js";
import {useDispatch, useSelector} from "react-redux";
import {setExampleListData} from "../stateSlice/exampleSlice.js";
import {useEffect} from "react";

const ExampleHook = () => {
    const dataTest = useSelector((state) => state.example.exampleListData);
    const dispatch = useDispatch();
    const { data, isError, error, isLoading } = useQuery('exampleApi', exampleApiRequest.exampleApiRequest);

    useEffect(() => {
        console.log("=>(ExampleHook.jsx:7) data", data);
        console.log("=>(ExampleHook.jsx:8) isError", isError);
        console.log("=>(ExampleHook.jsx:9) error", error);
        console.log("=>(ExampleHook.jsx:10) isLoading", isLoading);

        // dispatch(setLoading(isLoading));
        if (!isLoading) {
            dispatch(setExampleListData(data));
        }
    }, [data, isError, error, isLoading, dispatch]);

    return {
        dataTest,
        isLoading,
        error
    };
};

export default ExampleHook;