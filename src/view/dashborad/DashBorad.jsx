import {Route, Routes} from "react-router-dom";

const DashBorad = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
      </Routes>
    )
}

export default DashBorad