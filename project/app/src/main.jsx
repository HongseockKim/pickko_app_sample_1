import ReactDOM from 'react-dom/client';
import '../../../public/reset.css';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../../app/store/stores/store.js'
import Routers from "../util/Routers.jsx";


ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/*<RouterProvider router={router} />*/}
            {/*<AppRoutes/>*/}
            <Routers/>
        </PersistGate>
    </Provider>
);