import {useNavigate} from "react-router-dom";

const Main = () =>{
    const navigatorImpl = useNavigate();
    return(
        <div>
            <button type='button' onClick={()=> navigatorImpl('TestPages')}>이동</button>
        </div>
    )
}

export default Main