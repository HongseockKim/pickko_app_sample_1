import ReactDOM from 'react-dom/client';
import '../../../public/reset.css';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../../common/store/stores/store.js';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import appRoutes from "../router/router.jsx";
import {RouterProvider} from "react-router-dom";


const originalConsoleLog = console.log;


console.log('@@@@@@@@@@@@@');
console.log('앱')
console.log('@@@@@@@@@@@@@');

console.log = function() {
    const stack = new Error().stack.split('\n');
    let caller = stack.find(line => line.includes('webpack-internal:'));
    if (!caller) {
        caller = stack[2] || '';
    }

    let match = caller.match(/webpack-internal:\/\/\/(.*?):(\d+):(\d+)/);
    if (!match) {
        match = caller.match(/\(*(.*):(\d+):(\d+)\)*$/);
    }

    const fileName = match ? match[1].split('/').pop() : 'unknown';
    const lineNumber = match ? match[2] : 'unknown';

    const prefix = `[REACT][${fileName}:${lineNumber}]`;

    // 모든 인자를 배열로 변환
    const args = Array.from(arguments);

    // 첫 번째 인자가 문자열이면 키로 사용, 아니면 'log'를 키로 사용
    if (typeof args[0] === 'string' && args.length > 1) {
        const [key, ...values] = args;
        originalConsoleLog.apply(console, [prefix, key + ':', ...values]);
    } else {
        originalConsoleLog.apply(console, [prefix, 'log:', ...args]);
    }
};

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('app')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={appRoutes} />
            </PersistGate>
        </Provider>
        <ReactQueryDevtools/>
    </QueryClientProvider>
);