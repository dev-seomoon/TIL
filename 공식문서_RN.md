# [공식문서 읽기] React Native 0.68 ver.

The Basics
Introduction

자바스크립트 기초에 대한 이해가 필요함
-> 자바스크립트 공부하기
https://developer.mozilla.org/en-US/docs/Web/JavaScript

Snack 플레이어를 사용해 브라우저에서 RN 코드를 작성하고 바로 테스트해볼 수 있다. (아이패드에서 작업할 때 사용하면 좋을 듯)

함수 컴포넌트와 클래스 컴포넌트 :
React에서는 클래스 또는 함수를 사용해 컴포넌트를 만들 수 있다.
클래스 컴포넌트에서만 state를 가질 수 있었지만, React Hook API의 도입으로 함수 컴포넌트에서도 state 등을 추가할 수 있게 되었다.
RN 0.59 버전부터 리액트 hooks가 도입.
hooks가 좀 더 미래지향적인 React 작성 방식이기 때문에,
공식문서는 기본적으로 함수 컴포넌트 기반으로 작성됨.

Core Components and Native Components
RN은 React와 앱 플랫폼의 네이티브 api를 사용해서 Android, iOS 앱을 개발할 수 있는 오픈소스 프레임워크.
RN에서는 React 컴포넌트(재사용, 중첩이 가능한 코드 묶음)를 사용해 UI를 구현하고, 자바스크립트를 사용해 플랫폼 api에 접근한다.

뷰와 모바일 앱 개발 :
앱 개발에서 View는 UI의 기본 구성단위이다. view는 중첩이 가능하며 앱 화면을 구성하는 모든 요소가 view로 이루어져 있다.

네이티브 컴포넌트 :
RN을 사용하면, React 컴포넌트를 사용해 JS로 네이티브 뷰를 호출할 수 있다. RN은 런타임에 컴포넌트에 해당하는 네이티브 뷰를 생성함으로써 네이티브와 동일한 뷰를 지원하게 된다. 이러한 플랫폼 지원 컴포넌트를 네이티브 컴포넌트라고 한다.

코어 컴포넌트 :
RN에서 기본적으로 제공하는 네이티브 컴포넌트들을
코어 컴포넌트라고 한다.

필요한 네이티브 컴포넌트를 직접 구현하거나, 커뮤니티에서 개발된 네이티브 컴포넌트를 사용할 수도 있다. ->  Native Directory 참고

코어 컴포넌트 리스트 (documented in the API section) :
<View> - flexbox 레이아웃 지원 컨테이너, 일부 터치 핸들링, 접근성 관리,
<Text> - 문자열 표현 / 터치 이벤트 핸들링,
<Image>, <ScrollView>, <TextInput> 등

RN은 React 컴포넌트와 동일한 API 구조를 사용하기 때문에,
React 컴포넌트 API를 이해하고 있어야 함.
-> React 기초 학습 필요 React’s official documentation

React Fundamentals
RN은 React(자바스크립트로 UI를 구현할 수 있는 인기 있는 오픈소스 라이브러리) 위에서 실행된다. 따라서 RN을 최대한 활용하려면 React 자체를 이해하는 것이 도움이 됨.

컴포넌트 :
함수 컴포넌트가 반환하는 것은 React 엘리먼트로 렌더링된다.
React 엘리먼트는 화면에 보이는 요소를 묘사한다.
함수 컴포넌트를 export하여 다른 컴포넌트에서 재사용할 수 있다.

JSX :
React, React Native는 JavaScript 안에 엘리먼트를 작성할 수 있게 해주는 문법인 JSX를 사용한다.
JSX는 기본적으로 JavaScript이기 때문에, {} 안에 변수나 표현식을 작성할 수 있다.
JSX를 사용하려면 `import React from 'react’`를 해야 한다.

Custom Components :
RN 코어 컴포넌트를 중첩해서 새로운 컴포넌트를 만들 수 있다.
이러한 중첩 가능하고, 재사용 가능한 컴포넌트가 바로 리액트의 핵심이다.
다른 컴포넌트를 렌더링하는 컴포넌트는 parent component(부모 컴포넌트)라고 한다.

Props :
대부분의 RN 코어 컴포넌트도 리액트 컴포넌트처럼 props로 커스텀할 수 있다.
자바스크립트 객체를 props로 주려면, {{}} 처럼 사용해야 한다.

State :
동적인 것을 구현하려면 state를 사용해야 한다.
props가 컴포넌트가 어떻게 렌더링될지 설정하기 위해 사용하는 인자라면,
state는 컴포넌트의 개인 데이터 저장소와 같다.
state를 사용해 시간에 따라 달라지거나, 유저 상호작용에 따라 바뀌는 데이터를 다룰 수 있다.
state는 컴포넌트에 메모리를 부여한다.
-> As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.

Handling Text Input
TextInput : 유저가 텍스트를 입력할 수 있는 코어 컴포넌트.
onChangeText, defaultValue, onSubmitEditing 등의 props를 가진다.

Using a ScrollView
ScrollView :
여러 개의 컴포넌트와 뷰를 담을 수 있는 스크롤 컨테이너. 수직/수평으로 스크롤 가능.
화면에 보이지 않는 요소도 전부 렌더링되기 때문에,
크기가 한정된 짧은 리스트에 적합.
길이기 긴 리스트는 FlatList 사용하기.

Using List Views (FlatList, SectionList)
FlatList :
스크롤 가능한 리스트. 길이가 긴 리스트나 길이가 바뀌는 리스트에 적합. 현재 화면에 보이는 요소만 렌더링함.
`data`(리스트 데이터)와 `renderItem`(리스트 아이템을 인자로 받고, 렌더링할 컴포넌트를 반환) props 필수.

SectionList :
section으로 나눠진 리스트. sections, renderItem props 필수.
renderSectionHeader, keyExtractor 등의 props도 받을 수 있음.

Troubleshooting

- Port already in use
- NPM locking error
  ...

\*Metro : React Native용 자바스크립트 번들러, 8081포트 사용.

Platform Specific Code
크로스 플랫폼 앱 구현에서, 코드를 플랫폼별로 구분해서 작성해야할 때 :

1. Platform module 사용
   RN은 앱이 실행되고 있는 플랫폼을 감지하는 모듈을 제공함.
   플랫폼별로 코드를 따로 작성할 때 사용할 수 있다.
   컴포넌트의 일부분을 플랫폼별로 분기할 때 사용한다.
   `Platform.OS` -> `ios` or `android`
   `Platform.select({ios: ..., android: ..., default: ...})`
   `Platform.select({ native: () => require('ComponentForNative'), default: () => require('ComponentForWeb') })`
   `Platform.version`으로 iOS의 OS버전, android의 API 버전을 확인할 수 있음.

2. 플랫폼별 파일 확장자 사용
   `BigButton.ios.js`
   `BigButton.android.js`

-> `import BigButton from './BigButton’;`

RN이 플랫폼에 따라 자동으로 파일을 선택한다.

+)
몇몇 컴포넌트는 한 플랫폼에서만 사용 가능한 props를 가지고 있음.

3. 네이티브 확장자
   iOS/Android에서는 공통으로 사용할 수 있지만, NodeJS/Web과는 구분해야할 때는 .native.js 확장자를 사용.
   React와 RN에서 동일한 코드를 공유할 때 유용하게 쓰임.

Container.js -> web bundler에서 사용
Container.native.js -> RN bundler에서 사용. iOS & Android

More Resources
https://reactnative.dev/docs/more-resources
ㄴ 다 읽어보기!

Ignite : RN 보일러 플레이트 제공 CLI.
React Native Directory : 커뮤니티 패키지 제공

Environment setup
생략,
for M1
-> 환경설정하면서 기록해두기

Workflow
