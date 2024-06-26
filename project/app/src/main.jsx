import ReactDOM from 'react-dom/client';
import '../../../public/reset.css';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../../app/store/stores/store.js';
import Routers from "../util/Routers.jsx";
import AppStyled from "../../../style/AppStyled.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('app')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppStyled>
                    <Routers/>
                </AppStyled>
            </PersistGate>
        </Provider>
        <ReactQueryDevtools/>
    </QueryClientProvider>
);