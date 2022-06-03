# [노마드코더] GraphQL로 영화 API 만들기

## 1. About This Course

- GraphQL : Graph Query Langauge

- API 구현/설계를 해본 경험이 있는 개발자에게 적합
  프론트엔드 개발자이거나, 백엔드에서 rest api 개발을 해본 경험이 있다면 도움이 많이 될 것

- 강의에서 다룰 내용 :

  - node.js를 사용해 GraphQL API를 만들 것.
    (node.js보다는 GraphQL이라는 쿼리 언어에 초점을 맞춘 강의이므로, 언어는 중요하지 않음)

  - GraphQL vs REST API
  - API란 ?
  - REST API ?
  - GraphQL API ?

  - GraphQL API를 먼저 사용해보고 나서 -> 사용에 익숙해진 후에 -> 직접 구현 및 설계를 해보는 방식.

## 2. Before GraphQL

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

- REST API, GraphQL API 등의 존재 이유 : 서버와 커뮤니케이션하기 위해서.
  내 웹사이트에서만 사용할 수 있게(=나만 내 서버와 통신할 수 있게) private하게 만들기도 하고,
  또는 모든 사람이 사용할 수 있게(=모든 사람이 내 서버와 통신할 수 있게) 만들 수도 있다.

- REST API와 GraphQL API는,
  서버와 커뮤니케이션하는 “방법”에 차이가 있다.

- REST API는, URL을 이용해 통신한다. (REST API = "버튼"이 URL인 API)

- REST API는 구조화가 잘 되어 있고 직관적이라서 이해하기가 매우 쉬우며,
  사용법이 간단하다. (url로 요청을 보내는 것은 전세계의 거의 모든 디바이스와 환경에서 가능함 - 앱, 웹 브라우저, 바닐라js 등등.. )

- REST API는 많은 url로 이루어지고, url마다 다 다른작업을 한다.

- REST API는 많은 사람들이 사용하며 컨벤션이 어느정도 정해져 있어서 파악하기가 쉽다.

### HTTP 메소드 + REST API

- HTTP 메소드를 사용해 의도를 전달하는 방법.
  Get이 아닌 다른 커뮤니케이션을 하는 방법.

- Get 외의 동작을 수행하기 위해서
  URL에 동사를 넣는 것은 직관적이지 못하다.
  (movie 하나를 추가할 때도 create, upload, add 등등
  같은 동작을 사람에 따라 여러 방법으로 표현할 수 있기 때문)
  => HTTP 메소드 사용 !

- 메소드 (동사) + URL (명사) ->
  메소드로 "의도"를 전달하고, URL로 "리소스"를 정한다.
  => API가 더 많은 일을 할 수 있게 해주고, 더 직관적으로 만들어준다.
  학습 곡선이 매우 낮은 방식.

- 동일한 URL에 대해서 다른 메소드로 요청을 보냄으로써 다른 동작을 요청할 수 있다.

## 3. GraphQL

### What is GraphQL

- GraphQL은 하나의 명세(specification, Just an Idea)이다. (다운로드 X)

- GraphQL은 여러 환경에서 사용할 수 있지만 사용되는 방식(=아이디어)은 같다.

- GraphQL-Server : GraphQL 명세를 따르는 서버

### REST API의 한계 : Overfetching

REST API(기존 방식)의 한계
= GraphQL이 해결하려는 문제, GraphQL의 존재 이유

1. Overfetching :
   필요한 것보다 많은 데이터를 fetching하는 것.
   데이터 전송 비용, 서버 비용 등이 낭비됨.
   -> GraphQL은 url로 전체 데이터를 받지 않고, 필요한 데이터만 요청함으로써 Overfetching을 하지 않는다.

2. Underfetching :
   필요한 것보다 데이터를 덜 fetching하는 것.
   **하나의 url에서 필요한 데이터를 전부 가져오지 못하는 경우,**
   두 개 이상의 url에 요청을 해야 하는 경우.

   많은 요청을 보내야 해서 데이터 로딩 시간이 길어지고, 요청이 실패할 가능성도 높아짐.

   -> GraphQL은 한 번의 요청만으로 앱에 필요한 모든 데이터를 가져올 수 있다.
   느린 모바일 환경에서도 빠르게 동작함.

### GraphQL API 사용해보기

-> https://graphql.org/swapi-graphql

- GraphiQL : GraphQL 쿼리를 쓰고 보낼 수 있게 해주는 브라우저 툴.

- Scheme : REST API의 URL과 비슷한 역할. 데이터를 구조화함.
  데이터 타입이 같이 정의되어 있음.

## 4. GraphQL API 만들기

### Apollo Server를 사용해 GraphQL API 만들기

#### GraphQL Server

- Apollo Server : graphQL spec을 구현하고 있는 서버, GraphQL을 이해할 수 있는 서버.
  기존 서버를 많이 수정하지 않고, Apollo Server를 미들웨어로 추가하기만 해도 됨.

  - **데이터의 형태를 정의(Type Definition, Schema)하고,**
    **데이터를 실제로 만들어낼 수 있는 코드(Resolvers)를 작성해야 한다.**

  - Apollo Server를 시작하면,
    Apollo Studio에서 제공하는 query console과 schema-generated docs를 이용할 수 있다.
    `Error: Apollo Server requires either an existing schema, modules or typeDefs`
    -> 서버 실행 전에 GraphQL에게 데이터의 구조, 타입 등을 미리 알려주어야 함.
    GraphQL에서 서버의 데이터 구조를 알고 있기 때문에 API 문서 제공, 자동완성 등이 가능해진다.

#### Type Definitions (Schema)

- Scalar Type : GraphQL에서 자체적으로 제공하는 타입들(buit-in types) (String, Int, Boolean, ID 등)

- Root Type : type definition, 스키마 루트에 정의된 타입 (Query Type, Mutation Type 포함)

- Query Type : REST API의 GET 요청을 위한 타입 (for Read)
  / Mutation Type : REST API의 POST 등의 요청을 위한 타입 (for Write)

  - 요청 시 유저로부터 **arguments를** 받을 수 있다.

  - GraphQL 서버에서 Scheme를 정의할때, Query Type은 반드시 정의되어야 함. (사용자가 request를 보낼 수 있도록)
    GraphQL API에서 쿼리 타입의 정의 = REST API에서 URL을 노출시키는 것과 동일한 개념.

  - Query, Mutation은 이론적인/개념적인 구분일 뿐, write 요청을 쿼리 타입에 포함시키는 등 스펙을 지키지 않아도
    에러가 발생하지는 않는다.

- Non Nullable Fields :
  GraphQL의 모든 필드는 기본적으로 nullable이다. ! 를 붙이면 Non Nullable 필드, required 필드가 된다.

#### Resolvers

- Resolvers : Type Definition으로 정의한 데이터들을 실제로 제공할 수 있도록 작성된 로직.
  반드시 Type Definition과 동일한 이름과 구조(스키마)로 작성되어야 한다. (쿼리, 뮤테이션에 정의된 필드와 일대일로 대응해야 함. )
  Resolver는 누군가 데이터를 요청했을 때 호출되는 함수이다.
  Resolver들을 하나의 객체로 모아둔 것을 resolver map 이라고 한다.

- resolvers를 호출할 때 전달되는 인자들 :

1. root : Resolver를 호출한 필드가 속한 타입
2. args : 유저가 전달한 인자들

- Query Resolver, Mutation Resolver, Type Resolver 등이 있다.

- Dynamic Field와 Type Resolver(Field Resolver) :
  동적으로 데이터가 생성되는 필드에 대한 Type Resolver도 Query Resolver나 Mutation Resolver와
  같은 방식으로 정의할 수 있다.
