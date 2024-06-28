import {Outlet} from "react-router-dom";
import AppStyled from "../../../style/AppStyled.jsx";
import {ErrorBoundary} from "@suspensive/react";
import {Suspense} from "react";
import Loading from "../../common/loadingTemplate/Loading.jsx";
import ErrorRender from "../../common/error/ErrorRender.jsx";

function App() {
  return (
      <ErrorBoundary FallbackComponent={ErrorRender}>
          <Suspense fallback={<Loading />}>
              <AppStyled>
                <p>여기에 네브바 가 올수도 있음</p>
                <Outlet/>
              </AppStyled>
          </Suspense>
      </ErrorBoundary>
  )
}

export default App
