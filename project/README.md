## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

[프로젝트 진행 관련 참조사항]

- [tsconfig.json의 checkJs(allowJS) 속성 설명](https://www.typescriptlang.org/tsconfig#checkJs)
- [VSCode 마크다운 프리뷰 플러그인](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- tsconfig.json의 include 디폴트 값 : [“**/*”]
- tsconfig.json의 exclude 디폴트 값 : [“node_modules”, “bower_components”, “jspm_packages”]
- NPM 과 NPM 커스텀 명령어

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성 (타입스크립트 프로젝트 생성)

- [x] NPM 초기화
- [x] 타입스크립트 라이브러리 설치
- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
- [x] 자바스크립트 파일을 타입스크립트 파일로 변환하기
- [x] `tsc` 명령어로 타입스크립트 컴파일 해보기

2. 명시적인 `any` 선언하기

- `tsconfig.json` 파일에 `noImplicitAny` 값을 `true` 로 추가.
- 가능한한 구체적인 타입으로 타입 정의

3. 프로젝트 환경 구성

- babel, eslint, prettier 등의 환경 설정

4. 외부 라이브러리 모듈화

- `node_modules` 하위에 `@types/` 밑에 있는 `index.d.ts` 를 찾아간다.
  - declaration 파일
  - [이와 관련한 공식문서 내용](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
  - [타입 정의가 제공되는 오픈소스 라이브러리 검색 사이트](https://www.typescriptlang.org/dt/search?search=)
- 때로는 라이브러리 자체에 index.d.ts 가 제공된다. (ex. axios) (이상적인(!) 라이브러리의 구조)
- 오픈 소스 라이브러리에서 정의되지 않은 타입은 `npm i @types/라이브러리` 명령을 통해 설치할 수 있다. (DefinitelyTyped 레포지토리)
- 지원이 되지 않는 경우에는 `tsconfig.json` 의 `typeRoots` 설정을 사용해 임의로 직접 정의할 수도 있다.

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
