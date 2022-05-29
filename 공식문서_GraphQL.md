# GraphQL

## 1. About This Course

데이터베이스에서 GraphQL API를 자동으로 생성해주는 툴들이 있음

API 구현/설계를 해본 경험이 있는 개발자에게 적합

프론트엔드 개발자이거나, 백엔드에서 rest api 개발을 해본 경험이 있다면 도움이 많이 될 것

node.js를 사용해 GraphQL API를 만들 것.
(node.js보다는 GraphQL이라는 쿼리 언어에 초점을 맞춘 강의이므로, 언어는 중요하지 않음)

GraphQL vs REST API
API란 ?
REST API ?
GraphQL API ?

GraphQL API를 먼저 사용해보고 나서 -> 사용에 익숙해진 후에 -> 직접 구현 및 설계를 해보는 방식.

## 2. API

### API

- Application Programming Interface

- interface : 무언가와 상호작용할 때 사용하는 것.
  사용자에게 노출되어 있는 버튼.
  API라는 노출된 버튼(커맨드 or 액션)을 통해 어플리케이션, 전자기기 등과 상호작용할 수 있다.

- 브라우저 api : 브라우저가 내놓은 버튼.
- 구글 api : 개발자들이 구글과 상호작용할 수 있는 버튼.

- api를 만들 때는, 사용자에게 제공하고 싶은 기능에 대한 api를 만든다.

- API : 어플리케이션, 서버, 웹사이트를 만든 사람이 만들어서 내놓은 거. 사람들은 api로 그것들과 상호작용할 수 있다.

### REST API

#### REST API

- REST API, GraphQL API 등의 존재 이유 : 서버와 커뮤니케이션하기 위해서.
  내 웹사이트에서만 사용할 수 있게(=서버와 통신할 수 있게) private하게 만들기도 하고,
  또는 모든 사람이 사용할 수 있게(=서버와 통신할 수 있게) 만들 수도 있다.

- REST API와 GraphQL API은,
  서버와 커뮤니케이션하는 “방법”에 차이가 있다.

- REST API는, URL을 이용해 통신한다.

- REST API는 구조화가 잘 되어 있고 직관적이라서 이해하기가 매우 쉬우며,
  사용법이 간단하다. (url로 요청을 보내는 것은 전세계의 거의 모든 디바이스와 환경에서 가능함 - 앱, 웹 브라우저, 바닐라js 등등.. )

- REST API는 많은 url로 이루어지고, url마다 다 다른작업을 한다.

- REST API는 많은 사람들이 사용하며 컨벤션이 어느정도 정해져 있어서 파악하기가 쉽다.

#### HTTP 메소드 + REST API

=> HTTP 메소드를 사용해 의도를 전달하는 방법.
Get이 아닌 다른 커뮤니케이션을 하는 방법.

Get 외의 동작을 수행하기 위해서
URL에 동사를 넣는 것은 직관적이지 못하다.
(movie 하나를 추가할 때도 create, upload, add 등등
같은 동작을 사람에 따라 여러 방법으로 표현할 수 있기 때문)
=> HTTP 메소드 사용 !

## 3. GraphQL

## 4. GraphQL API 만들기
