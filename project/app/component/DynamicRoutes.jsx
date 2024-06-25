import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import AsyncComponent from "./AsyncComponent.jsx";

const DynamicRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Routes>
      <Route
          path="*"
          element={
              <AsyncComponent
                  path={location.pathname}
                  onNotFound={() => navigate('/404')}
              />
          }
      />
    </Routes>
    );
};

export default DynamicRoutes;