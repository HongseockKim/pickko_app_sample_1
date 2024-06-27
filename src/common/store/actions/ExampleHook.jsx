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
        console.log("data", data);
        console.log("isError", isError);
        console.log("error", error);
        console.log("isLoading", isLoading);

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