# Sequelize

## 1. Getting Started

- Sequelize :
  Postgres, MySQL, MariaDB, SQLite, SQL Server 등에 사용할 수 있는
  TypeScript & Node.js ORM.

- ORM (Object Relational Mapping) :
  관계형 데이터베이스(RDS)의 데이터와 객체를 매핑해주는 것.

- 비어있는 데이터베이스에서 테이블 생성을 자동화하기 위해 sequelize를 사용할 수도 있고,
  이미 데이터가 존재하는 데이터베이스에 접속하기 위해서 sequelize를 사용할 수도 있다.

- sequelize는 기본적으로, 수행하는 모든 SQL 쿼리를 콘솔에 로깅한다.
  sequelize 인스턴스 생성 시 두 번째 인자로 loggin option을 넘겨 설정할 수 있다.

- sequelize에서 제공하는 대부분의 메서드는 비동기로 동작하며, 프로미스를 반환한다.
  따라서 프로미스 API를 사용하거나 async/await을 사용해야 한다.

- 사용 프로세스 :

  1. 설치

  2. 데이터베이스에 접속

  - Sequelize 인스턴스 생성, 인자로 접속 정보 전달(접속 uri 등)
  - .authenticate() 메소드로 접속을 테스트할 수 있다.
  - .close() 메소드로 접속을 종료할 수 있다.

  3. 모델 정의

  4. 모델 쿼리하기

## 2. Core Concenpts

### 1) Model Basics

- 모델 : 데이터베이스의 테이블을 객체 형태로 나타낸 것. Model 클래스를 상속받은 클래스.
  테이블 이름, 칼럼, 칼럼의 데이터 타입 등의 정보를 가지고 있다.

- 모델명 : Sequelize의 모델은 이름을 가진다. 모델명은 테이블명과 동일하지 않아도 된다. 테이블명이 복수일 때 모델명은 보통 단수로 짓는다. (Users > User)

- 모델 정의하기 :
  Sequelize에서 모델은 두 가지 방식으로 정의할 수 있다.

  - sequelize.define(modelName, attributes, options)
  - Model 정의 & Model.init(attributes, options)

  sequelize.define()은 내부적으로 Model.init()을 호출하기 때문에, 두 가지 방식 모두 본질적으로는 같다.

-

### 2) Model Instances

### 3) Model Querying - Basics

### 4) Model Querying - Finders

### 5) Getters, Setters & Virtuals

### 6) Validations & Constraints

### 7) Raw Queries

### 8) Associations

### 9) Paranoid
