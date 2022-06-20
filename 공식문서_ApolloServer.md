## Defining a Schema

### Unions and interfaces

Union과 Interface는 GraphQL 타입들을 추상화한다.

Union에 포함되는 타입들은 모두 객체 타입이어야 하며,
Union 타입 간에 겹치는 필드가 없어야 한다.

### Directives

- 디렉티브 : 추가적인 설정을 위한 데코레이터. 인자를 받을 수 있음.

- 커스텀 디렉티브 정의 :

  ```graphql
  directive @auth on FIELD_DEFINITION
  ```

  on FIELD_DEFINITION : 디렉티브가 올 수 있는 위치 지정

- 디렉티브 로직 구현 -> transformer 함수 :
  mapSchema 메서드를 사용해 스키마를 순회하면서 디렉티브를 찾고,
  디렉티브에 대한 transformation을 수행한다.

## Fetching Data

### Resolvers

Apollo Server는 데이터를 요청받았을 때, 스키마의 각 필드에 데이터를 채울 수 있어야 함.
-> Resolver를 정의한다.
Resolver는 스키마의 필드에 데이터를 채우기 위해 사용하는 함수이다.
데이터베이스, API 등에서 데이터를 가져오는 등의 방식으로
필드에 데이터를 채운다.

resolver map : 모든 resolver를 하나의 자바스크립트 객체 안에서 정의함.

```
const resolvers = {...}
```

resolver는 네 개의 인자 (parent, args, context, info)를 받을 수 있다.

ApolloServer 생성자의 인자로 resolver를 전달한다.

```
const server = new ApolloServer({ typeDef, resolvers })
```

---

# Apollo Server

Apollo Server :
GraphQL 서버의 한 종류.
모든 GraphQL 클라이언트(Apollo Client 포함)와 호환되는 오픈소스 GraphQL 서버로,
GraphQL API 구축을 위해 사용한다.

Apollo Server 사용법

1)데이터 구조 정의하기 -> 스키마 정의
GraphQL 서버는 스키마를 사용해
클라이언트가 쿼리할 수 있는 데이터 구조를 정의한다.

스키마는 타입 정의들로 이루어진다.
쿼리 정의도 포함함.

const schema = gql`type Book { title: String } type Query { books: [Book] }`; 과 같이 선언함

\*“Query" type :
클라이언트가 실행할 수 있는 쿼리들과, 각 쿼리의 리턴 타입을 정의함.

2)데이터 정의하기 -> data set 정의
Apollo Server는 어디든 연결해서 데이터를 가져올 수 있다. (데이터베이스, REST API 등)

3)쿼리와 데이터 매핑하기 -> Resolver 정의
각 쿼리를 실행했을 때, 어떤 데이터를 보낼지 매핑하는 역할.
const resolvers = {
Query: {
books: () => books,
},
}

4)ApolloServer 인스턴스 생성하기
ApolloServer() 생성자의 인자로
스키마와 resolver를 전달해서 server 인스턴스를 생성한다.

생성된 server 인스턴스의 listen 메소드를 사용해서 웹 서버를 시작시킨다.

localhost에 접속 > Apollo Sandbox 접속 > Sandbox에서 쿼리를 실행해볼 수 있다.
