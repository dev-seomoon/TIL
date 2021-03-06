# Next.js

## 1. 기초

### 1) Next.js란

빠른 Web Application을 만들기 위한 구성 요소들을 제공하는 React 프레임워크

- Web Application의 구성 요소 :
  UI, 라우팅, Data fetching, 렌더링, 서드파티 서비스 통합, 성능, 확장성, 유지보수성

- React는 자바스크립트 UI 라이브러리.
  UI 구성을 위한 함수들을 제공하지만, 함수를 어디에서 어떻게 사용할지는 개발자의 선택에 맡긴다.
  UI 외의 요소들은 개발자가 직접 구성해나가야 하기 때문에 시간이 다소 소요된다.

- Next.js는 React에 필요한 툴이나 설정을 제공하고, 최적화 등 추가적인 기능을 제공한다.

### 2) JavaScript -> React

#### JavaScript, UI 렌더링 과정

- 브라우저가 동적인 UI를 생성하는 과정 (브라우저의 렌더링 과정) :

  - 유저가 웹 페이지에 접속하면, 서버가 브라우저에 HTML 파일을 응답한다.
  - 브라우저는 HTML 파일을 읽고 DOM을 생성한다.
  - DOM은 HTML 엘리먼트들을 객체로 나타낸 것. 코드와 UI 사이의 브릿지 역할을 하며, 부모 자식 관계로 이루어진 트리 구조를 갖는다.
  - DOM 메소드나 JavaScript를 사용해 유저 이벤트를 listen하고 DOM을 조작할 수 있다.
    엘리먼트 선택/추가/삭제 뿐만 아니라 엘리먼트의 스타일이나 컨텐츠 변경도 가능하다.

- 그러나, DOM 메소드와 JavaScript만으로 DOM을 조작하려면,
  앱의 규모가 커졌을 때 코드양이 너무 많아져 유지보수가 어려워질 수 있다.
  이는 전형적인 절차형 프로그래밍 방식이다.

- 선언형 UI 라이브러리인 React를 사용해 "how"가 아닌 "what"에 집중하여 코드를 작성함으로써 개발 속도를 높일 수 있다.

- JavaScript -> React === (**how**, 절차형 프로그래밍) -> (**what**, 선언형 프로그래밍)

#### React

- 프로젝트에서 React를 사용하려면
  react(리액트 코어 라이브러리)와 react-dom(리액트로 dom을 조작할 수 있도록 해주는 라이브러리) 패키지를 설치해야 한다.

- JSX : HTML과 비슷한 문법을 사용해서 UI를 선언할 수 있는 자바스크립트 확장 문법.
  브라우저는 JSX를 이해하지 못하므로, Babel 등의 JavaScript 컴파일러를 사용해 JSX를 일반 JavaScript 코드로 변환(컴파일)해야 한다.

- React는 특정한 기능을 제공하는 재사용가능한 코드 조각들을 제공하는 라이브러리이다.

- **컴포넌트를 사용해서 UI 구현하기** :
  컴포넌트 단위로 UI를 모듈화하여 유지보수성을 높일 수 있다.

  - 리액트 컴포넌트는 UI 엘리먼트를 반환하는 JavaScript 함수이다.
  - 컴포넌트를 DOM에 렌더링하려면, `ReactDOM.render()` 메소드의 첫 번째 인자로 전달해야 한다.
    리액트 컴포넌트 이름은 대문자로 시작해야 하고, `<>`으로 감싸서 전달해야 한다.
  - 일반 HTML 엘리먼트처럼 컴포넌트를 중첩시킬 수 있다.

- **Props** :
  컴포넌트에 정보를 전달하기 위해 사용한다.

  - 동일한 컴포넌트에 각각 다른 데이터를 전달하고 싶거나,
    컴포넌트에 들어갈 데이터를 미리 알 수 없는 경우 (ex: 외부 소스에서 데이터를 가져오는 경우)
    "Props"를 사용해 리액트 컴포넌트에 프로퍼티 형태로 데이터를 전달할 수 있다.
    프로퍼티 형태로 전달된 데이터는 컴포넌트의 첫 번째 인자에 props 객체로 전달된다.
  - 리액트는 단방향 데이터 흐름을 갖는다. props와 state는 부모 컴포넌트에서 자식 컴포넌트로만 전달될 수 있다.
  - JSX 안에서 JavaScript 코드를 작성하려면, `{}` 안에 작성해야 한다. 어떤 자바스크립트 표현식이든 작성할 수 있다.
  - 리스트 형태로 보여주어야 하는 데이터가 있는 경우,
    배열 메소드를 사용해 데이터를 조작하고 UI 엘리먼트를 생성할 수 있다.
    리스트를 렌더링 하는 경우, 리스트의 각 요소에 유니크한 키값을 prop으로 전달해야 한다.

- **State와 Event handler** :

  - 이벤트 & 이벤트 핸들러 :
    리액트에서 이벤트 이름은 camelCase로 작성한다.
    이벤트에 이벤트 핸들러 함수를 전달해
    이벤트 발생 시 핸들러 함수가 호출되게 할 수 있다.

  - hooks :
    리액트는 hooks를 가지고 있다. hooks는 함수들을 모아둔 것으로, hooks를 사용해 컴포넌트에 **state**와 같은 로직을 추가할 수 있다.
    (ex: `useState()`)
    state는 UI에서 시간에 따라 바뀌는(주로 유저 상호작용에 의해 변경되는) 데이터를 담는 데 사용한다.

  - state는 컴포넌트 내부에서 초기화되고 저장된다. state를 자식 컴포넌트에 props로 넘길 수는 있지만, state를 업데이트하는 로직은 state가 초기화된 컴포넌트에 있어야 한다.

  - props vs state :
    props는 컴포넌트에 전달되는 read-only 데이터,
    state는 시간에 따라 변하는 데이터.

### 3) React ~ Next.js

- Node.js를 설치하고 프로젝트 루트에 `package.json` 파일을 생성한다.

- react, react-dom, next 패키지를 추가한다.

- pages 폴더 안에 `index.js` 파일을 작성하고,
  각 페이지의 루트 컴포넌트는 export default를 한다.

- Fast Refresh : 코드 수정 후 저장 시 변경사항이 즉시 반영됨

### 4) Next.js 내부 동작 방식

- React는 애플리케이션 구조와 구현 방식에 대해 자유도가 높기 때문에, 다양한 방식으로 구현할 수 있다.
  Next.js는 애플리케이션 구조와 최적화를 제공하는 프레임워크로, 개발 속도와 애플리케이션 속도를 모두 향상시킬 수 있다.

#### 개발 환경 vs 프로덕션 환경

- 개발 환경 : 개발 경험을 향상시키는데 초점을 맞춤. (TypeScript, ESLint, Fast Refresh 등)
- 프로덕션 환경 : 사용자 경험 향상에 초점을 맞춤. (성능, 접근성 최적화 등)

- 애플리케이션이 개발 단계 -> 프로덕션 단계로 가기 위해서는,
  컴파일, 번들링, 압축, 코드 스플릿 과정을 거쳐야 한다.
  Next.js는 이러한 대부분의 과정을 쉽게 수행할 수 있게 해준다.

- Next.js는 저레벨 프로그래밍 언어인 Rust로 작성된 컴파일러와,
  컴파일, 압축, 번들링 등에 사용할 수 있는 플랫폼인 SWC를 가지고 있다.

+) SWC(Speedy Web Compiler) : 자바스크립트 컴파일, 번들링에 사용할 수 있는, Rust로 제작된 빌드 툴.
Next.js 빌드 과정 중 트랜스파일링을 수행하던 Babel,
코드 경량화를 수행하던 Terser를 SWC로 대체.
Rust는 이벤트 루프 기반 싱글 스레드 언어인 자바스크립트와 다르게, 병렬 처리를 고려해 설계된 언어로,
Rust로 설계된 SWC를 적용하면 트랜스파일링은 17배, 코드 경량화 작업은 7배가 빨라진다.
-> https://fe-developers.kakaoent.com/2022/220217-learn-babel-terser-swc/

##### 1 - 컴파일

- 컴파일은 한 언어를 다른 언어로 변환하거나, 해당 언어의 다른 버전으로 변환하는 것을 말한다.
  JSX, TypeScript, 모던 자바스크립트 등의 언어들은 개발할 때 효율성과 편리성을 향상시켜주지만, 브라우저가 이해하지 못하기 때문에, 일반 JavaScript로 컴파일되어야 한다.

- Next.js에서는, 개발 단계에서 코드를 수정할 때 컴파일이 일어나고, 애플리케이션 프로덕션을 준비하는 빌드 과정에도 컴파일이 일어난다.

##### 2 - 압축 (Minifying)

- 코드 가독성을 위해서만 필요하고, 코드 실행에는 불필요한 요소들 (주석, 공백, 줄바꿈, 들여쓰기, 긴 변수명 등)을 제거해서
  파일 사이즈를 줄여 애플리케이션 속도를 향상시키는 과정.

- Next.js에서는 js, css 파일이 빌드 중에 자동으로 압축된다.

##### 3 - 번들링

- 유저가 웹 페이지에 방문했을 때 파일 요청 횟수를 줄이기 위해서,
  모듈화되어 작성된 애플리케이션의 파일들(모듈들)을 모듈 디펜던시를 따라 병합하는 과정.

##### 4 - 코드 스플리팅

- 애플리케이션 번들을 엔트리 포인트별로 쪼개는 과정.
  현재 접속한 페이지의 코드만 로드해서
  애플리케이션의 초기 로딩 속도를 줄이기 위함.
  (Only load the required code for an entry point, to improve the application's initial load)

- Next.js는 코드 스플리팅 기능을 기본적으로 지원한다.
  - `pages/` 폴더에 있는 각 파일들은 빌드 단계에 자동으로
    별도의 번들로 나눠진다.
  - 두 개 이상의 페이지에서 공유하는 코드는, 중복 다운로드를 피하기 위해 별도의 번들로 분리된다.
  - 첫 페이지를 로드한 후에는, 유저가 접속할 가능성이 높은 다른 페이지들의 코드도 미리 로드한다.
  - Dynamic Imports를 통해 수동으로 코드 스플리팅을 수행할 수도 있다.

#### 빌드 타임 vs 런타임

- 빌드 타임 : 애플리케이션 배포를 준비하는 과정.
  앱을 빌드하면, Next.js는 코드를 프로덕션에 최적화된 파일들로 변환해 서버에 배포하고 유저가 사용할 수 있는 상태가 되게 한다.

- 런타임 : 앱이 빌드되고 배포된 후에, 유저가 앱을 사용할 때를 런타임이라고 한다.

#### 클라이언트 사이드 렌더링 vs 서버 사이드 렌더링

- 클라이언트 : 유저 디바이스의 브라우저. 서버에 애플리케이션 코드에 대한 요청을 보내고,
  응답을 받아서 유저가 상호작용할 수 있는 인터페이스로
  유저에게 돌려준다.

- 서버 : 애플리케이션 코드를 저장하고, 클라이언트로부터 요청을 받고, 연산을 하고 적절한 응답을 돌려 보내는 데이터 센터의 컴퓨터를 말한다.

- 렌더링 : React로 작성한 코드를 UI를 표현하는 HTML로 변환하기 위해 필수적인 과정.
  렌더링은 서버에서 일어날 수도 있고, 클라이언트에서 일어날 수도 있다.
  빌드 시 미리 렌더링을 하거나, (pre-rendering)
  런타임 시 요청할 때마다 렌더링을 할 수도 있다.
  Next.js에서는 세 가지 렌더링 방식(**서버 사이드 렌더링, 정적 사이트 생성, 클라이언트 사이드 렌더링**)을 제공한다.

  - **Pre-Rendering** : 서버 사이드 렌더링, 정적 사이트 생성 방식은 Pre-rendering이라고도 한다.
    외부 데이터 fetching과,
    리액트 컴포넌트 -> HTML 변환이 끝난 후에,
    결과가 클라이언트에 전달되기 때문이다.

  - **클라이언트 사이드 렌더링 vs Pre-Rendering** :

    - 일반적인 React 앱에서 브라우저는
      UI 구성을 위한 JS와 함께 빈 HTML 껍데기를 받는다.
      초기 렌더링이 클라이언트 측에서 일어나기 때문에, 이를 클라이언트 사이드 렌더링이라고 부른다.

    - React 앱이 클라이언트 사이드 렌더링을 하는 것과는 다르게,
      Next.js 앱은 기본적으로 모든 페이지를 pre-rendering한다.
      pre-rendering은 클라이언트에서 자바스크립트로 HTML을 생성하는 대신, 서버에서 HTML이 미리 생성되는 것을 말한다.

    - 클라이언트 사이드 렌더링을 할 경우,
      렌더링이 수행되는 동안 유저가 빈 화면을 보게 되는 반면,
      프리 렌더링을 하면 생성된 HTML을 보게 된다.

    +) Next.js 앱에서는
    React의 `useEffect()`로 데이터를 fetch하거나, useSWR과 같은 data fetching hook을 사용해서
    특정 컴포넌트에서 선택적으로 클라이언트 사이드 렌더링을 할 수 있다.

  - **서버 사이드 렌더링 vs 정적 사이트 생성** :
    프리 렌더링에는 서버 사이드 렌더링과 정적 사이트 생성 두 가지가 있다.

    - 서버 사이드 렌더링 :
      서버 사이드 렌더링을 하면, 요청을 할 때마다 서버에서 페이지의 HTML이 생성된다.
      HTML이 생성된 후에 HTML, JSON 데이터, JavaScript가 클라이언트로 보내진다.

      클라이언트에서, HTML은
      React가 JSON 데이터와 JavaScript 코드를 사용해서 컴포넌트를 동적으로 만드는 동안 (ex: 버튼에 이벤트 핸들러를 다는 것)
      유저에게 정적인 페이지를 빠르게 보여주는 데 사용된다.
      React에서 컴포넌트를 동적으로 만드는 작업을 **hydration**(주입)이라고 한다.

      Next.js에서는 `getServerSideProps`를 사용해서 페이지를 서버 사이드 렌더링할 수 있다.

    - 정적 사이트 생성 :
      서버에서 HTML이 생성되는 건 서버 사이드 렌더링과 동일하지만,
      정적 사이트 생성은 런타임에 서버가 돌아가지 않는다.
      대신 애플리케이션이 배포될 때 빌드 타임에 컨텐츠가 한 번 생성되고나서, HTML이 CDN에 저장되고 요청 때마다 재사용된다.

      Next.js에서는 `getStaticProps`를 사용해 정적으로 페이지를 생성할 수 있다.

      데이터가 바뀔 때마다 사이트 전체를 다시 빌드할 필요 없이, Incremental Static Regeneration을 통해 빌드된 페이지를 생성하거나 업데이트할 수 있다.

- Next.js를 사용하면, 페이지별로 가장 적절한 렌더링 메소드를 적용할 수 있다.

#### CDNs and the Edge

앱이 네트워크에 배포된 후에, 어디에 앱 코드가 저장되고 실행되는지 알아보자.
(\*네트워크 = 자원을 공유할 수 있는 연결된 컴퓨터들(또는 서버들))

Next.js 앱의 경우 애플리케이션 코드가 **Origin Server, CDNs(Content Delivery Networks), the Edge**에 저장된다.

##### Origin Server

Origin 서버는 애플리케이션 코드를 저장하고 실행하는 메인 컴퓨터를 말한다.
(CDN 서버, Edge 서버 등 애플리케이션 코드가 배포되는 다른 서버와 비교하기 위해 Origin 서버라고 표현함)

Origin 서버가 요청을 받으면, 응답을 보내기 전에 약간의 연산을 한다.
이 연산 작업의 결과는 CDN으로 옮겨진다.

##### CDN (Content Delivery Network)

- CDN은 전세계의 여러 장소에 HTML, 이미지 파일 등 정적 콘텐츠를 저장하며, 클라이언트와 origin 서버 사이에 위치한다.

- 새로운 요청이 들어오면 유저에게 가장 가까운 위치의 CDN에서 캐싱된 결과를 유저에게 응답한다.
  연산이 매 요청마다 일어나지 않아서 origin 서버의 부하를 줄일 수 있고,
  유저에게 지리적으로 가까운 곳에서 응답이 오기 때문에
  응답 속도도 좀 더 빨라진다.

- Next.js의 pre-rendering으로 생성된 컨텐츠를 저장하기에 적합하다.

##### The Edge

Edge는 유저에게 가장 가까운 네트워크 끝단을 의미한다.
CDN은 네트워크 끝단에 정적 콘텐츠를 저장하므로 Edge의 일부로 볼 수 있다.

Edge 서버는 CDN과 유사하게 전세계의 여러 장소에 위치하지만,
정적 콘텐츠를 저장하는 CDN과 달리, 일부 Edge 서버는 코드를 실행할 수도 있다.
이는 유저에게 근접한 Edge에서 **캐싱**과 **코드 실행**이 둘 다 수행될 수 있음을 의미한다.

Edge에서 코드를 실행하면, 클라이언트 사이드 또는 서버 사이드에서 수행되던 작업을 일부 이동해올 수 있다.
그러면 클라이언트 측에 보내는 코드의 양이 줄어들기 때문에 성능이 향상되고,
일부 유저 요청 origin 서버까지 가지 않아도 되기 때문에 지연을 줄일 수 있다.

Next에서는 미들웨어나 React Server Component(지원 예정)를 통해 엣지에서 코드를 실행할 수 있다.

## 2. 주요 기능 - 블로그 앱 튜토리얼

React 앱을 완성하려면 다음과 같은 사항들을 고려해야 한다.

- 번들링(ex-Webpack) 및 컴파일링(ex-Babel)
- 코드 스플리팅 등 프로덕션 환경 최적화
- 성능과 검색엔진 최적화를 위해 일부 페이지 프리렌더링. 서버사이드 렌더링 또는 클라이언트 사이드 렌더링 적용.
- DB에 React 앱을 연결하기 위해 서버 사이드 코드를 작성해야 할 수 있음

이러한 문제들은
적절한 추상화와 훌륭한 개발자 경험을 제공하는 React Framework
Next.js로 해결할 수 있다.

Next.js는 다음과 같은 기능들을 제공한다.

- 직관적인 페이지 기반 라우팅 시스템, 동적 라우팅
- 프리렌더링 (정적 사이트 생성 (SSG), 서버 사이드 렌더링 (SSR))
- 빠른 페이지 로드를 위한 자동 코드 스플리팅
- 내장 CSS, Sass & 모든 CSS-in-JS 라이브러리 지원
- 개발환경에서 Fast Refresh
- 서버리스 함수로 API 엔드포인트를 구현할 수 있는 API 라우팅

### 1) Next.js 앱 생성하기

1. Node.js 10.3 이상 버전 설치
2. create-next-app 사용해 next.js 앱 생성 (next-learn 템플릿 사용)
   `npx create-next-app nextjs-blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
3. 개발 서버 시작
   `npm run dev`
4. `pages/index.js` 수정 후에 변경사항 바로 반영되는지 확인하기 (Fast Refresh 동작 여부 확인 - 파일이 수정되면 새로고침을 하지 않아도 거의 즉각적으로 수정사항이 브라우저에 반영되는 기능)

### 2) 페이지 이동하기

#### Pages in Next.js

파일 시스템 라우팅을 사용해 새로운 페이지 생성하기

- Page : pages 디렉토리의 파일에서 export된 리액트 컴포넌트. (반드시 `default`로 export해야 함)
- 컴포넌트 이름이 아닌 파일 이름에 따라 라우팅이 된다

  - `pages/index.js` -> `/` 경로
  - `pages/posts/first-post.js` -> `/posts/first-post` 경로

- 별도의 라우팅 라이브러리를 사용하지 않아도 됨

#### Link 컴포넌트를 사용한 클라이언트 사이드 내비게이션

- Link 컴포넌트 사용 :

  ```jsx
  import Link from 'next/link'
  ;<Link href="/">
    <a>Home</a>
  </Link>
  ```

  - 클라이언트 사이드 내비게이션 : 페이지 이동이 브라우저가 아닌 JavaScript에 의해 수행됨. 새로고침이 일어나지 않고 브라우저에 의한 페이지 이동보다 빠르다.

  - Next 앱 외부 링크로 이동하려면 `Link` 컴포넌트 대신 그냥 `<a>` 태그 사용하면 됨

  - `href` 외에 `className` 등 추가할 속성이 있는 경우
    `Link` 컴포넌트가 아닌 `<a>` 태그에 추가해야 함.

#### Code splitting & Prefetching

- Next.js는 자동으로 코드 스플리팅을 한다.
  -> 필요한 페이지만 로딩하기 때문에 **페이지 로딩 속도가 빨라진다.**
  또한 각 페이지가 독립된 상태이므로, **특정 페이지에서 오류가 발생하더라도 나머지 페이지들은 정상적으로 동작한다.**

- 브라우저 뷰포트에 Link 컴포넌트가 등장하면,
  링크된 페이지를 백그라운드에서 prefetching한다.
  그러면 링크를 클릭했을 때 해당 페이지의 코드가 이미 로딩되어 있어 페이지 이동이 거의 즉각적으로 이루어질 수 있다.
  -> **빠른 페이지 이동이 가능하다.**

### 3) Assets, Metadata, css

#### Assets - 정적 파일 (이미지 등) 추가

- 최상위 `public` 디렉토리에 정적 파일을 저장하면
  애플리케이션 루트에서 접근할 수 있다.

- `Image` 컴포넌트 :
  HTML `<img>` 엘리먼트의 확장으로, 이미지 최적화 기능을 제공한다.
  (뷰포트 크기에 맞는 이미지 리사이징 및 최적화,
  브라우저 호환성을 고려해 최신 이미지 포맷(Webp 등) 지원)
  CMS와 같은 외부 데이터 소스에서 제공된 이미지도 자동으로 최적화된다.
  src, height, width를 props로 받는다.

  - 이미지 최적화가 빌드 타임에 이루어지는 것이 아니라,
    유저가 요청할 때 최적화되는 on-demand 방식으로 이루어짐.
    -> 이미지 갯수가 많아도 빌드에 걸리는 시간이 증가하지 않는다.

  - 이미지는 기본적으로 레이지 로딩됨.
    뷰포트 바깥에 있는 이미지에 의해서 페이지 속도가 저하되지 않고,
    스크롤에 따라 뷰포트에 들어와있는 이미지들만 로딩된다.

  - 또한 이미지는 구글의 Core Web Vital(사용자 경험 측정 지표) 중 하나인 CLS(Cumulative Layout Shift, 누적 레이아웃 이동)를 방지할 수 있는 방식으로 렌더링된다.

#### Metadata

- 페이지의 metadata(`<head>` 태그 내부)를 수정하려면,
  Next.js의 내장 리액트 컴포넌트인 `<Head>` 컴포넌트를 사용하면 된다.

  ```jsx
  import Head from 'next/head'
  ;<Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  ```

- `<html>` 태그 속성 등을 변경하려면 `pages/_document.js` 파일을 생성한다

#### 서드파티 JavaScript

- 서드파티 JavaScript : 외부 소스에서 가져온 스크립트.
  주로 직접 작성할 필요가 없는 기능을 추가할 때 사용함.

  - `<Script>` 컴포넌트 : HTML `<script>` 엘리먼트의 확장. 스크립트를 언제 로딩하고 실행할지에 대한 최적화가 자동으로 이루어진다.
    src, strategy(스크립트를 언제 로딩할지), onLoad 등의 props를 받는다.

#### CSS 스타일링

- Next.js에는 "styled-jsx"라는 CSS-in-JS 라이브러리가 내장되어 있다. CSS를 리액트 컴포넌트 안에서 작성할 수 있고, 작성한 CSS 스타일이 해당 컴포넌트에만 한정적으로 적용(scoped)된다.
  styled-components, emotion 등 다른 CSS-in-JS 라이브러리도 사용할 수 있다.

  ```jsx
  <style jsx>{...}</style>
  ```

- Layout 컴포넌트 :

  1. 프로젝트 루트에 `components/layout.js` 생성

  2. Layout 컴포넌트로 다른 페이지 컴포넌트를 감싸기

  3. Layout 컴포넌트에 스타일 추가 :
     CSS 파일을 리액트 컴포넌트로 import할 수 있게 해주는 **CSS Moduels** 사용.
     CSS 모듈을 사용하려면 CSS 파일 이름이 `.module.css`로 끝나야 함

     -> `components/layout.module.css`

  layout.module.css

  ```css
  .container {
    ...;
  }
  ```

  layout.js

  ```jsx
  import styles from './layout.module.css'

  export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
  }
  ```

  - CSS 모듈이 자동으로 유니크한 클래스명을 생성하기 때문에, 클래스명 충돌을 고려하지 않아도 된다.

  - Next.js의 코드 스플리팅 기능이 CSS 모듈에도 적용되어, 각 페이지에 필요한 최소한의 CSS만 로딩된다.

  - CSS 모듈은 빌드 타임에 자바스크립트 번들에서 추출되어 `.css` 파일로 생성된다.

- 전역 스타일 :

  - 앞에서 알아본 것처럼, CSS Module을 사용하면 컴포넌트 단위 스타일링을 할 수 있다.

  - 컴포넌트 스타일이 아니라 전역 스타일을 주려면 `pages/_app.js`의 App 컴포넌트에서 스타일을 import하면 된다.
    App 컴포넌트는 모든 페이지를 아우르는 최상위 컴포넌트로, 페이지 이동 시에도 유지되어야 하는 상태를 저장하는 데 사용할 수 있다.

  - 전역 css 파일의 위치나 이름은 자유롭게 정할 수 있다. 단, 전역 css 파일은 반드시 `pages/_app.js`에서만 import해야 한다.

  (\*공식문서에서는 `styles/global.css` 사용)

- 스타일링 팁 :

  - `classnames` 라이브러리를 사용해 클래스명을 쉽게 토글링할 수 있다.

  - Next.js는 PostCSS를 사용해 CSS를 컴파일한다.
    Tailwind CSS 등의 라이브러리 사용을 위해 PostCSS config를 수정하려면 프로젝트 루트에 `postcss.config.js` 파일을 생성한다.
    -> [Tailwind CSS 설정하기](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)

  - sass 패키지 설치 후 `.module.scss`, `.module.sass`로 컴포넌트 레벨에서 Sass를 사용할 수 있다.

### 4) pre-rendering과 데이터 fetching

#### Pre-rendering

- Next.js는 기본적으로 모든 페이지를 pre-rendering한다. 각 페이지의 HTML을 JavaScript로 클라이언트에서 생성하는 대신 Next.js에서 미리 생성한다.
  -> 성능 개선과 SEO(검색엔진 최적화)에 유리하다.
  +)또한 느린 네트워크 환경에서 자바스크립트 코드 실행 전에 빈 화면 대신 앱의 UI를 볼 수 있어 사용자 경험에도 좋다.

- 브라우저에서 페이지가 로딩되면, 해당 페이지에 관련된 JavaScript 코드가 실행되어 페이지를 동적으로 만든다. (이 과정을 hydration이라고 한다. )

- 브라우저에서 자바스크립트를 비활성화한 후에 페이지에 접근하면 Pre-rendering이 이루어지고 있는지 확인할 수 있다. 일반 React 앱에서는 pre-rendering을 하지 않기 때문에 자바스크립트를 비활성화하면 빈 화면이 뜬다.

- Pre-rendering 종류 :

  1. Static Generation :
     빌드 타임에 HTMl을 생성하는 pre-rendering 방식.
     요청 시 미리 렌더링된 HTML이 재사용됨.

  2. Server-side Rendering :
     각 요청마다 HTML을 생성하는 방식.

- 개발 모드에서는 모든 페이지가 서버사이드 렌더링 된다.

- 페이지별로 프리렌더링 방식을 다르게 지정할 수 있다.

- Static Generation v.s. Server-side Rendering :

  - 가능하면 Static Generation 사용을 권장함. (페이지를 한 번만 생성하고 CDN을 통해 제공하게 되어, 매요청마다 서버가 페이지를 렌더링하는 것보다 빠르기 때문. )

  - 유저 요청 전에 미리 렌더링할 수 있는 페이지 -> Static generation,
    유저 요청 전에 미리 렌더링할 수 없는 페이지(페이지의 데이터가 자주 업데이트되거나, 페이지 콘텐츠가 요청할 때마다 변경되는 경우) -> Server-side rendering.

    서버 사이드 렌더링을 사용하면 속도는 좀 더 느리지만, 항상 최신화된 페이지를 제공할 수 있다.

- 자주 업데이트되는 데이터를 렌더링해야하는 경우 pre-rendering을 하지 않고
  클라이언트 사이드 렌더링을 할 수도 있다.

- Data fetching이 필요한 경우 Static generation :
  파일 시스템, 외부 API, 데이터베이스 쿼리 등으로 외부 데이터를 가져온 후에
  렌더링해야 하는 경우 -> 빌드 타임에 데이터를 먼저 fetch한 후 HTMl을 생성한다.

  - `getStaticProps` : 페이지 컴포넌트를 export할 때,
    비동기 함수인 `getStaticProps`도 같이 export하면 빌드 타임에 `getStaticProps`가 실행된다.
    이 함수 내부에서 외부 데이터를 fetch하고 페이지 컴포넌트에 props로 보낼 수 있다.
    _“Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”_

  - `getStaticProps`는 서버 사이드에서만 실행되고 브라우저에 전달되지 않기 때문에, 데이터베이스에 직접적으로 쿼리를 하는 등의 코드도 작성할 수 있다.

  - 개발환경에서는 매 요청마다 getStaticProps가 실행되고, 프로덕션 환경에서는 빌드 타임에 실행된다.
    요청 시에만 접근 가능한 데이터(쿼리 파라미터, HTTP 헤더 등)에는 접근이 불가능하다.

  - 페이지 컴포넌트 파일에서만 export할 수 있다. 리액트는 페이지가 렌더링되기 전에 렌더링에 필요한 모든 데이터를 가지고 있어야 하기 때문.

  - 요청 시에 데이터를 Fetch해야 하는 경우 :
    유저 요청 이전에 페이지를 미리 렌더링할 수 없는 경우,
    예를 들어 데이터가 빈번히 업데이트되거나 페이지 콘텐츠가 요청할 때마다 변경되는 경우에는,
    Static Generation이 아닌 Server-side rendering을 하거나, Pre-rendering을 하지 않을 수도 있다.

- 빌드 타임이 아닌 런타임에 매요청마다 데이터가 fetching되고 HTML이 생성되는 경우 서버사이드 렌더링 : 페이지에서 `getServerSideProps` export.

  - `getServerSideProps`는 요청 시에 호출되므로
    요청 파라미터를 포함하는 `context`를 인자로 받는다.

  `getServerSideProps`를 사용하면
  서버가 요청 결과를 매요청마다 연산해야하고, 추가 설정 없이는 요청 결과가 CDN에 캐싱되지 않기 때문에 TTFB(Time To First Bite)가 `getStaticProps`보다 느려질 수 있다. 따라서 요청을 할 때 데이터를 가져와야 하는 경우에만 사용하는 것이 좋다.

#### 클라이언트 사이드 렌더링

데이터를 미리 렌더링할 필요가 없다면 클라이언트 사이드 렌더링을 사용할 수 있다.

- 클라이언트 사이드 렌더링 :

  1. 페이지에서 외부 데이터가 필요하지 않은 부분을 먼저 정적으로 생성한다.
  2. 페이지가 로딩된 후에 클라이언트에서 JavaScript로 외부 데이터를 가져와서 나머지 부분을 채운다.

- 클라이언트 사이드 렌더링이 적합한 예시 :
  유저 대시보드.
  SEO를 적용할 필요가 없고,
  유저에 따라 다른 페이지가 제공되고, 데이터가 빈번히 업데이트되며 요청 시에 데이터 fetch가 필요하기 때문.

### 5) Dynamic Routing (동적 라우팅)

블로그 게시글 data에 따라 각 게시글 page의 url을 동적으로 변경하기 -> Dynamic routes 사용

#### page 경로가 외부 데이터에 의존하고 있을 때

이전 섹션에서, page 콘텐츠가 외부 데이터에 의존하는 경우에는
`getStaticProps`를 사용해 데이터를 가져와 페이지를 렌더링했다.

Next.js에서는 page 경로가 외부 데이터에 의존하는 경우에도
정적으로 페이지를 생성할 수 있어
**동적 라우팅(dynamic URLs)**이 가능하다.
(= path가 외부 데이터에 의존하는 경우에도 pre-rendering이 가능함)

1. `pages/posts/[id].js` 페이지 파일 생성하기 (`[]` 안에 들어가는 `id` 부분이 동적으로 변경됨)

2. 페이지 컴포넌트와 함께 async 함수 `getStaticPaths`를 export한다.
   `getStaticPaths`에서는 `id`로 사용될 수 있는 값들의 리스트를 리턴한다.

3. `getStaticProps` 함수도 마찬가지로 export한다.  
   `getStaticProps`는 params 객체를 인자로 받고, `params.id`를 사용해 필요한 외부 데이터들을 가져온다.

`pages/posts/[id].js`

```jsx
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```

-> https://github.com/dev-seomoon/TIL/Practices/nextjs-tutorial

- `getStaticPaths`에서도 `getStaticProps`와 마찬가지로
  외부 데이터를 가져올수 있다.

- `getStaticPaths`는 개발 환경에서는 매 요청마다 실행되고,
  프로덕션 환경에서는 빌드 타임에 실행된다.

- `getStaticPaths`의 `fallback` 옵션 :

  - `false` : `getStaticPaths`에서 리턴하지 않는 경로로 접근하면 404 페이지를 띄움.
  - `true` :
    - `getStaticPaths`에서 리턴한 경로들이 빌드 타임에 HTML로 렌더링됨
    - 빌드 타임에 생성되지 않은 경로에 접근할 경우 404 페이지를 띄우지 않고
      해당 경로에 대한 첫 요청 시의 fallback 버전 페이지를 띄움. (?)
      -> [fallback documentation](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false) 참고

- 404 페이지 커스텀 : `pages/404.js`에 작성하면 빌드 타임에 정적으로 생성됨.

### 6) API 라우팅

API Routes 기능을 사용해 Next.js 앱 안에서
API 엔드포인트를 Node.js 서버리스 함수로 구현할 수 있다.

`pages/api`

### 7) 배포하기

## 3. 검색엔진 최적화

## 4. TypeScript

---

## Memo

Next.js :
빠른 웹 앱을 만들 수 있게 도와주는 리액트 프레임워크.

리액트 : 유저 인터페이스(유저가 화면에서 볼 수 있고 상호작용할 수 있는 요소들) 구성을 위한 자바스크립트 라이브러리.

리액트는 UI 개발에만 초점을 맞춘 라이브러리인데,
웹 앱 개발을 위해서는 UI 개발 외에도
라우팅, data fetching, 렌더링, 서드파티 서비스 통합, 인프라, 성능, 확장성, 개발자 경험 등 신경써야할 부분이 많음.

Next.js는 리액트가 담당하는 부분 외에도 추가적으로 웹 앱 개발에 필요한 것들을 제공해준다.
