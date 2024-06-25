import {useDispatch, useSelector} from "react-redux";
import {exampleAction} from "../../../store/stateSlice/exampleSlice.js";
import {useQuery} from "react-query";
import {useEffect} from "react";
import exampleApiRequest from "../../../api/exampleApiRequest.js";

const TestPages = () => {
    const dataTest = useSelector((state) => state.example.data);
    const dispatch = useDispatch();
    const { data } = useQuery('exampleApi', exampleApiRequest.exampleApiRequest);

    const handleClick = () => {
        dispatch(exampleAction('데이터 체인지'));
    }

    useEffect(() => {
        console.log("=>(TestPages.jsx:17) data", data);
    }, [data]);

    return(
        <div >
            <div >{dataTest}</div >
            <div >
                <button type='button' onClick={handleClick} >데이터 체인지</button >
            </div >
        </div >
    )
}

export default TestPages;
