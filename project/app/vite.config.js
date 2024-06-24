import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
    // 현재 작업 디렉토리를 project/app으로 설정
    const env = loadEnv(mode, process.cwd() + '/project/app');

    // 환경 변수 출력
    console.log('##############');
    console.log("=>(vite.config.js:8) env.VITE_TITLE", env.VITE_TITLE);
    console.log("=>(vite.config.js:10) env.VITE_MODE", env.VITE_MODE);
    console.log('##############');

    return {
        plugins: [
            react(),
            createHtmlPlugin({
                inject: {
                    data: {
                        VITE_APP_TITLE: env.VITE_TITLE,
                    }
                }
            })
        ],
        root: 'project/app',
        define: {
            'process.env': env
        },
        server: {
            port: 3000,
            open: true,
        }
    };
});