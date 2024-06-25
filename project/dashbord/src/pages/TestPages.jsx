import {useNavigate} from "react-router-dom";

const TestPages = () => {
    const locations = useNavigate();
    return(
        <div>
            qweqwe
            <button type='button' onClick={()=> locations('/test/TestPages')}>이동</button>
        </div>
    )
}

export default TestPages;

