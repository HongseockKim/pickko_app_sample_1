import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// 요청 인터셉터
apiClient.interceptors.request.use(
    config => {
        // 요청이 전송되기 전에 작업 수행
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 요청 에러가 발생한 경우 작업 수행
        return Promise.reject(error);
    }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
    response => {
        // 응답 데이터가 있는 경우 작업 수행
        return response;
    },
    error => {
        // 응답 에러가 발생한 경우 작업 수행
        if (error.response && error.response.status === 401) {
            // 401 Unauthorized 에러 처리
            console.error('Unauthorized access - maybe redirect to login');
        }
        return Promise.reject(error);
    }
);

export default apiClient;