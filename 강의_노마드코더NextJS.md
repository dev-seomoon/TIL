# [노마드코더] NextJS 입문

## 0. 소개

- NextJS 입문 단계 강의.

- 전제조건 : 기본적인 ReactJS 이해도(state, props, routes, rendering 등) 필요

- 강의에서 다루는 것 :

  - 서버사이드렌더링 (SSR), Static Generation.
  - NextJS가 다른 ReactJS 프레임워크와 어떻게 다른지,
    다른 React 어플리케이션 빌드 방식과 어떻게 다른지

- NextJS : Production-ready 리액트 어플리케이션 빌드를 할 수 있게 해주고,
  많은 시간을 절약할 수 있게 해주며,
  계속해서 발전하고 있는 프레임워크.

- NextJS 프로젝트 생성하기 :
  npx create-next-app@latest (--typescript)

## 1. 개요

### 1) Library vs Framework

- 라이브러리 : 원하는대로 코드를 작성할 수 있고, 필요할 때 라이브러리를 사용할 수 있다.
  폴더 구조, 라우팅 방식 등을 직접 정할 수 있고 자유도가 높다.

- 프레임워크 :
  커스텀을 할 수 없고 정해진 규칙에 따라 코드를 작성해야 함. 추상화 정도가 높고,
  자유도가 낮음.
  Ex) pages 폴더안에 페이지 컴포넌트를 작성하기만 하면 라우팅 등이 NextJS 내부적으로 처리됨

=> 라이브러리는 내가 사용하고 호출하는 것,
프레임워크는 프레임워크가 내 코드를 호출하는 것.

### 2) Pages

- page 생성 :

  - pages 폴더 안에 리액트 컴포넌트를 추가한다
  - nextjs는 page **파일명**을 url로 사용한다 (컴포넌트 이름은 중요하지 않음)
  - 컴포넌트 export는 반드시 **default export**로 해야한다

- 404 페이지도 nextjs에서 자체적으로 제공함

- index.js page는 '/' 경로로 연결됨

- jsx 사용을 위해 React를 import하지 않아도 됨

### 3) Static Pre Rendering

- 페이지가 정적으로 생성되어 미리 렌더링됨.

- 일반적인 React 앱은 클라이언트 사이드 렌더링을 함. 브라우저가 빈 html 소스 파일과 자바스크립트를 가져오면, 자바스크립트가 모든 렌더링을 하는 것.
  브라우저의 자바스크립트를 비활성화할 경우, 빈 화면을 보게 된다. (noscript 태그로 자바스크립트를 활성화해야 한다고 알려줄 수 있음)

- 크롬 네트워크 탭에서 Slow 3G를 선택해 느린 네트워크 연결에서 앱이 어떻게 동작하는지 확인할 수 있다.

- 클라이언트 사이드 렌더링의 경우, 초기 렌더링 속도가 느리고, 느린 네트워크 환경에서는 자바스크립트가 실행되기 전까지 유저가 빈 화면을 보게 되어 유저 경험을 떨어뜨린다.

- SSR을 사용하면, 유저의 네트워크 환경이 느리거나 자바스크립트가 비활성화되어 있어도 유저가 html을 볼 수 있다.
  api로부터 가져오는 데이터 로딩은 오래 걸릴 수 있지만, 적어도 html 페이지는 확인이 가능한 상태.

- hydration :
  nextjs는 리액트를 백엔드에서 동작시켜서 컴포넌트를 렌더링하여 html 페이지를 미리 생성한다.
  -> JS, react가 로딩되지 않았더라도 유저가 콘텐츠(=초기 상태의 component로 미리 생성된 html 페이지)를 볼 수 있게 된다.

  => 유저 경험에도 매우 좋고, SEO에도 좋다.

### 4) Routing

- anchor 태그 사용 X - anchor 태그를 사용하면
  페이지 이동 시 새로고침이 되기 때문
  -> next/link의 Link 컴포넌트를 import해서 사용해야 함. (for 클라이언트 사이드 내비게이션)

- 단, Link 태그는 href 속성만 가질 수 있음. 다른 props나 style 전달을 위해서 Link 태그 하위에 anchor태그를 사용해야 함.

```
<Link href="/">
  <a>Home</a>
</Link>
```

- useRouter 훅을 사용해 라우터 정보를 가져올 수 있다. (현재 메뉴 위치 표시 등을 간단하게 처리할 수 있음)

### 5) Styling

#### 인라인 스타일

style 속성 안에 자바스크립트 오브젝트를 넣는 방식.

#### CSS 모듈 방식

클래스 이름 충돌에 대해 신경쓸 필요가 없음.

```jsx
import styles from './NavBar.module.css'

<nav className={styles.nav}>
```

```css
.nav {
  // ...
}
```

여러 개의 클래스명을 적용하려면, 클래스명 사이에 공백을 주면 됨. 템플릿 문자열을 사용하거나 배열에 join(" ") 메소드를 사용.

#### Style JSX

```jsx
<style jsx>{`
  nav {
    color: ${props.color};
  }
`}</style>
```

클래스 이름에 대해 고민할 필요가 전혀 없음.

style jsx로 선언한 스타일들은 오직 컴포넌트 내부로 범위가 한정된다.
완전히 지역 스타일이기 때문에 전역에서의 스타일 충돌에 대해 고려하지 않아도 됨.

Import나 파일 분리를 하지 않아도 되어서 편리함.

style jsx는 그냥 자바스크립트 문자열이기 때문에,
내부에서 props 등 변수를 참조하거나 표현식을 사용할 수도 있다.

#### 전역 스타일 설정하기

- 페이지별 전역 스타일 :
  style jsx에 global prop을 주더라도, 해당 페이지에서만 global 스타일로 적용됨.
  Ex) index.js에서 global 스타일을 적용하면, home 페이지를 벗어났을 때는 해당 스타일이 적용되지 않음

- 앱 전체 전역 스타일 :
  모든 페이지에 전역으로 스타일링을 하거나, 모든 페이지에서 공통으로 사용하는 컴포넌트를 사용하고 싶은 경우
  -> **App Component** 사용 (일종의 blueprint 역할을 하는 컴포넌트. )

- App Component는 프레임워크에 기본적으로 포함되어 있음. pages 폴더 안에 **`_app.js`** 라는 이름으로 생성해야 한다.
  App Component는 다른 페이지 컴포넌트들을 불러오기 전에 가장 먼저 불러와진다.

- App Component는 두 개의 props(Component, pageProps)를 받는다.
  페이지 컴포넌트는 App Component 안에서 `<Component {...pageProps}>`에 렌더링된다.

- nextjs로 앱을 만들 때는, **App Component에서만 global css 파일을 import할 수 있다.** (그 외의 페이지, 컴포넌트에서는 module화된 css 파일만 import 가능)

- App Component는 next 내부적으로 이미 존재하기 때문에, 반드시 만들 필요는 없음.
  App Component 템플릿/스타일 등을 커스텀하고 싶을 때 추가해서 사용하면 된다.

## 2. Practice Project

### Patterns

- Layout 패턴 :
  children prop을 활용해 Layout을 별도의 컴포넌트로 분리하는 패턴.

- Head 패턴 :
  페이지별로 next/head의 Head를 import해서, 그 안에 html `<head>`에 들어갈 태그들을 작성해주면 된다.
  이 때 Head 부분을 별도의 컴포넌트로 분리하는 패턴도 많이 쓰인다.

- nextjs에서는 흔하게 쓰이는 기능들을 모두 제공하고 있어서 별도의 패키지 설치 및 의존성 관리가 필요하지 않고,
  package.json을 깔끔하게 유지할 수 있다는 장점이 있다.
  (의존성 관리를 next에 위임하는 개념)

### Data Fetching

- Data Fetching은 React/VanilaJS에서 일반적으로 하는 방식으로 진행(강의에서)

- Next.js를 사용해 API Key를 숨길 수 있다

#### 1) Redirect

in next.config.js

```js
// ...,
async redirects() {
  return [
    {
      source: "/old-blog/:path*",
      destination: "/blog/:path*",
      permanent: false,
    },
    {
      source: //...,
    }
  ]
},
```

#### 2) Rewrite

```js
async rewrites() {
  return [
    {
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    }
  ]
}
```

Redirect와 유사하지만, 유저가 URL 변화를 볼 수 없음. API Key를 감추는 데 사용할 수 있다.
=> Mask 기능!

### Server Side Rendering

- Only Server side render를 구현하는 방법 :
  Next.js는 컴포넌트의 초기 상태로 html을 export하거나 pre render한다.

  데이터가 fetching 중인 상태를 유저에게 보여주고 싶지 않은 경우,
  데이터를 모두 가져온 후에 페이지를 렌더링하고 싶은 경우.
  (html 자체를 초기 상태가 아닌, 데이터를 모두 가져온 상태로 렌더링하는 것. )

- 서버사이드 function에서 데이터 fetching 등을 실행하면 됨.
  +) 서버사이드 function에서 API Key 등을 다루면 API Key를 클라이언트에게 완전히 숨길 수 있다.

- getServerSideProps() :
  { props: ... } 형태의 객체를 반환함.

- 데이터가 유효할 때 화면을 렌더링하고, 데이터가 없을 때는 빈 화면을 보여주는 방식
  vs
  로딩 화면을 먼저 렌더링한 후에 데이터를 받아서 보여주는 방식
  -> NextJS를 사용하면 위 두 가지 방식을 모두 쉽게 구현할 수 있다.

- Only ServerSide Rendering 방식 -> 검색엔진 최적화에 매우 유리함.
  html 파일에 데이터가 모두 포함되기 때문.

### Dynamic Routes

- 하위 경로(중첩 라우터) : 폴더 안에 라우트 파일 작성. 폴더별 기본 라우트는 index.js.

- url에 변수 넣기 :
  **in React**
  /movies/:id

  **in Next**
  movies > [id].js

- url 상의 변수 값은 router 객체의 query.id에서 가져올 수 있다.
