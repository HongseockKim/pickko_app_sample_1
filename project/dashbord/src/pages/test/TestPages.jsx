import {useDispatch, useSelector} from "react-redux";
import {exampleAction} from "../../../store/stateSlice/exampleSlice.js";

const TestPages = () => {
    const data = useSelector((state) => state.example.data);
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(exampleAction('데이터 체인지'));
    }

    return(
        <div >
            <div >{data}</div >
            <div >
                <button type='button' onClick={handleClick} >데이터 체인지</button >
            </div >
        </div >
    )
}

export default TestPages;
