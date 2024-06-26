import {useDispatch} from "react-redux";
import {exampleAction} from "../../../store/stateSlice/exampleSlice.js";
import {useEffect} from "react";
import ExampleHook from "../../../store/actions/ExampleHook.jsx";
import Loading from "../../loadingTemplate/Loading.jsx";

const TestPages = () => {
    const dispatch = useDispatch();
    const { dataTest, isLoading, error } = ExampleHook();

    const handleClick = () => {
        dispatch(exampleAction('데이터 체인지'));
    };

    useEffect(() => {
        console.log("=>(TestPages.jsx:17) data", dataTest);
    }, [dataTest]);

    if (isLoading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div>{dataTest.length}</div>
            <div>
                <button type='button' onClick={handleClick}>데이터 체인지</button>
            </div>
        </div>
    );
};

export default TestPages;