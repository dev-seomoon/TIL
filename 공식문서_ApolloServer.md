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
