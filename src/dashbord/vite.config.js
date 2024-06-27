import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {createHtmlPlugin} from 'vite-plugin-html';
import * as path from "node:path";
import {fileURLToPath} from 'url'
import {dirname} from 'path'

export default defineConfig(({ mode }) => {
    // 현재 작업 디렉토리를 project/app으로 설정
    const env = loadEnv(mode, process.cwd() + '/src/dashbord');
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);


    // 환경 변수 출력
    console.log('#######################');
    console.log("=>(vite.config.js:8) env.VITE_TITLE", env.VITE_TITLE);
    console.log("=>(vite.config.js:10) env.VITE_MODE", env.VITE_MODE);
    console.log("=>(vite.config.js:18) env.VITE_PROJECT_ROOT", env.VITE_PROJECT_ROOT);
    console.log("=>(vite.config.js:18) __filename", __filename);
    console.log("=>(vite.config.js:19) __dirname", __dirname);
    console.log('#######################');

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
        root: env.VITE_PROJECT_ROOT,
        define: {
            'process.env': env
        },
        resolve:{
          alias:{
              '@style': path.resolve(__dirname,'../../style')
          }
        },
        server: {
            port: 3001,
            open: true,
        }
    };
});