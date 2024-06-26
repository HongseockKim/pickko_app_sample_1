# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Redux
#### 장점:
1. **예측 가능한 상태 관리**: 상태가 언제나 예측 가능하게 관리되므로 디버깅이 용이합니다.
2. **확장성**: 대규모 애플리케이션에서도 안정적으로 상태를 관리할 수 있습니다.
3. **미들웨어**: Redux Saga, Redux Thunk 등 다양한 미들웨어를 통해 비동기 작업을 쉽게 처리할 수 있습니다.
4. **커뮤니티와 생태계**: 큰 커뮤니티와 많은 도구들이 있어 자료를 찾기가 쉽습니다.

#### 단점:
1. **보일러플레이트 코드**: 초기 설정과 코드 작성이 비교적 복잡하고 많은 보일러플레이트 코드가 필요합니다.
2. **러닝 커브**: 처음 배우기에 다소 복잡할 수 있습니다.
3. **성능**: 상태 업데이트가 빈번한 경우 성능 이슈가 발생할 수 있습니다.

### Redux Toolkit
#### 장점:
1. **보일러플레이트 감소**: Redux의 보일러플레이트 코드를 크게 줄여줍니다.
2. **간단한 설정**: 기본 설정이 포함되어 있어 시작하기 쉽습니다.
3. **내장된 미들웨어**: Redux Thunk가 기본으로 포함되어 있어 비동기 작업 처리가 용이합니다.
4. **강력한 개발자 도구**: Redux DevTools와의 통합이 용이합니다.

#### 단점:
1. **추가 학습 필요**: 기존 Redux 사용자라면 새로운 API와 패턴을 학습해야 합니다.
2. **의존성**: Redux Toolkit에 의존하게 되어 특정 기능을 커스터마이징하기 어려울 수 있습니다.

### Recoil
#### 장점:
1. **간단한 API**: 사용하기 쉬운 API로 빠르게 상태 관리를 시작할 수 있습니다.
2. **리액트 친화적**: 리액트의 상태 관리 방식과 자연스럽게 통합됩니다.
3. **성능**: 상태가 변경될 때 필요한 컴포넌트만 리렌더링하므로 성능이 좋습니다.
4. **비동기 상태 관리**: 비동기 상태 관리가 내장되어 있어 간편하게 사용할 수 있습니다.

#### 단점:
1. **성숙도**: 아직 상대적으로 새로운 라이브러리라서 커뮤니티와 생태계가 작습니다.
2. **호환성**: 일부 기존 리액트 라이브러리와 호환성 문제가 있을 수 있습니다.
3. **도구 부족**: Redux에 비해 개발자 도구와 미들웨어가 부족할 수 있습니다.

각 라이브러리는 각기 다른 장단점을 가지고 있으므로, 프로젝트의 요구 사항과 팀의 역량에 따라 적합한 라이브러리를 선택하는 것이 중요합니다.




### MobX
#### 장점:
1. **간단한 사용법**: 상태 관리를 매우 간단하게 할 수 있으며, 보일러플레이트 코드가 거의 없습니다.
2. **자동화된 상태 관리**: 상태 변경 시 자동으로 관련된 컴포넌트가 업데이트되므로, 상태 관리가 직관적입니다.
3. **리액티브 프로그래밍**: 리액티브 프로그래밍을 지원하여 상태와 뷰 간의 동기화를 쉽게 할 수 있습니다.
4. **성능**: 필요한 부분만 업데이트하므로 성능이 뛰어납니다.
5. **유연성**: 다양한 상태 관리 패턴을 지원하며, 다른 라이브러리와 쉽게 통합할 수 있습니다.

#### 단점:
1. **러닝 커브**: 리액티브 프로그래밍 개념에 익숙하지 않은 경우 처음 배우기 어려울 수 있습니다.
2. **디버깅**: 자동화된 상태 관리로 인해 상태 추적이 어려울 수 있습니다.
3. **커뮤니티와 생태계**: Redux에 비해 커뮤니티와 생태계가 작고, 관련 도구와 자료가 적을 수 있습니다.
4. **의존성 관리**: MobX의 마법 같은 상태 관리로 인해 상태 흐름이 명확하지 않을 수 있습니다.

MobX는 상태 관리가 직관적이고 간단하다는 점에서 많은 개발자들에게 사랑받고 있습니다. 하지만 프로젝트의 복잡도와 팀의 경험에 따라 선택하는 것이 좋습니다.


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





