import {Outlet} from "react-router-dom";
import Navigator from "../../common/component/Navigator.jsx";
import DashbordStyled from "../../../style/DashbordStyled.jsx";

function DashborApp() {
  return (
      <DashbordStyled>
        <Navigator className='navigator'/>
          <div className='outlet_con'>
              <Outlet/>
          </div>
      </DashbordStyled>
  )
}

export default DashborApp
