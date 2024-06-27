import {Outlet} from "react-router-dom";
import AppStyled from "../../../style/AppStyled.jsx";

function App() {
  return (
      <AppStyled>
        <p>여기에 네브바 가 올수도 있음</p>
        <Outlet/>
      </AppStyled>
  )
}

export default App
