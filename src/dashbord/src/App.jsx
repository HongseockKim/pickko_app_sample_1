import {Outlet} from "react-router-dom";

function App() {
  return (
      <div>
        <p>여기에 네브바 가 올수도 있음</p>
        <Outlet/>
      </div>
  )
}

export default App
