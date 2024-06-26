# pickko_app_sample

이 프로젝트는 Vite를 사용한 여러 애플리케이션을 포함하는 모노레포입니다.

## 요구사항

- Node.js 버전 18.18.2 이상

## 프로젝트 구조

## pickko_app_sample_1


├── README.md<br />
├── package-lock.json<br />
├── package.json<br />
├── public<br />
│ &nbsp; ├── reset.css<br />
│ &nbsp; └── vite.svg<br />
├── src<br />
│ &nbsp; ├── app<br />
│ &nbsp; │ &nbsp; ├── index.html<br />
│ &nbsp; │ &nbsp; ├── router<br />
│ &nbsp; │ &nbsp; ├── src<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── App.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── main.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── pages<br />
│ &nbsp; │ &nbsp; │ &nbsp; &nbsp; &nbsp; ├── Main.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; &nbsp; &nbsp; ├── TestPages.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; &nbsp; &nbsp; └── test<br />
│ &nbsp; │ &nbsp; │ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── TestPages.jsx<br />
│ &nbsp; │ &nbsp; └── vite.config.js<br />
│ &nbsp; ├── common<br />
│ &nbsp; │ &nbsp; ├── api<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── exampleApi.js<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── exampleApiRequest.js<br />
│ &nbsp; │ &nbsp; ├── axios<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── index.js<br />
│ &nbsp; │ &nbsp; ├── component<br />
│ &nbsp; │ &nbsp; ├── error<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── ErrorRender.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── NotFound.jsx<br />
│ &nbsp; │ &nbsp; ├── loadingTemplate<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── Loading.jsx<br />
│ &nbsp; │ &nbsp; ├── projectConfig<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── projectConfig.js<br />
│ &nbsp; │ &nbsp; ├── store<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── actions<br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp; └── ExampleHook.jsx<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── config<br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp; └── config.js<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── stateSlice<br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp; ├── exampleSlice.js<br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp; └── systemSlice.js<br />
│ &nbsp; │ &nbsp; │ &nbsp; ├── stores<br />
│ &nbsp; │ &nbsp; │ &nbsp; │ &nbsp; └── store.js<br />
│ &nbsp; │ &nbsp; │ &nbsp; └── transforms<br />
│ &nbsp; │ &nbsp; │ &nbsp; &nbsp; &nbsp; └── transform.js<br />
│ &nbsp; │ &nbsp; └── util<br />
│ &nbsp; │ &nbsp; &nbsp; &nbsp; ├── routing<br />
│ &nbsp; │ &nbsp; &nbsp; &nbsp; │ &nbsp; ├── AsyncComponent.jsx<br />
│ &nbsp; │ &nbsp; &nbsp; &nbsp; │ &nbsp; ├── DynamicRoutes.jsx<br />
│ &nbsp; │ &nbsp; &nbsp; &nbsp; │ &nbsp; └── Routers.jsx<br />
│ &nbsp; │ &nbsp; &nbsp; &nbsp; └── util.js<br />
│ &nbsp; └── dashbord<br />
│ &nbsp; &nbsp; &nbsp; ├── index.html<br />
│ &nbsp; &nbsp; &nbsp; ├── router<br />
│ &nbsp; &nbsp; &nbsp; ├── src<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; ├── App.jsx<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; ├── main.jsx<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; └── pages<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp; &nbsp; ├── Main.jsx<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp; &nbsp; ├── TestPages.jsx<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp; &nbsp; └── test<br />
│ &nbsp; &nbsp; &nbsp; │ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── TestPages.jsx<br />
│ &nbsp; &nbsp; &nbsp; └── vite.config.js<br />
├── style<br />
│ &nbsp; ├── AppStyled.jsx<br />
│ &nbsp; ├── DashbordStyled.jsx<br />
│ &nbsp; └── LoadingStyled.jsx<br />
└── yarn.lock</p>

## 스크립트

- `dev:app`: app 개발 모드 실행
- `build:app`: app 프로덕션 빌드
- `dev:dashbord`: dashboard 개발 모드 실행
- `build:project-a`: project-a 프로덕션 빌드
- `dev:project-b`: project-b 개발 모드 실행
- `build:project-b`: project-b 프로덕션 빌드
- `lint`: JavaScript 및 JSX 파일 린트

## 주요 의존성

- React 18
- React Router 6
- Redux Toolkit
- React Query
- Axios
- Styled Components

## 개발 의존성

- Vite 5
- ESLint
- React용 TypeScript 타입


## 시작하기

1. 의존성 설치: `npm install`
2. 개발 모드에서 프로젝트 실행: `npm run dev:app`






