import {Outlet} from "react-router-dom";
import Navigator from "../../common/component/Navigator.jsx";
import DashbordStyled from "../../../style/DashbordStyled.jsx";
import ErrorRender from "../../common/error/ErrorRender.jsx";
import {ErrorBoundary} from "@suspensive/react";
import {Suspense} from "react";
import Loading from "../../common/loadingTemplate/Loading.jsx";

function DashborApp() {
  return (
      <ErrorBoundary FallbackComponent={ErrorRender}>
          <Suspense fallback={<Loading />}>
              <DashbordStyled>
                <Navigator className='navigator'/>
                  <div className='outlet_con'>
                      <Outlet/>
                  </div>
              </DashbordStyled>
          </Suspense>
      </ErrorBoundary>
  )
}

export default DashborApp
