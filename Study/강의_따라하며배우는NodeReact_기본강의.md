# Node.js

기본 강의 : 기본적인 기능을 구현하기 위한
**보일러 플레이트**를 만드는 강의.

## 1. node.js, express.js

- node.js :
  자바스크립트를 브라우저 밖에서 사용할 수 있도록 해주는 자바스크립트 실행환경

- express.js :
  node.js 프레임워크

- 프로젝트 폴더 생성 후 npm init
- index.js 생성 (엔트리포인트)
- express.js 패키지 추가
- npm i express
- package.json에 start script 추가 (node index.js)

## 2. mongoDB

### 1) mongodb 클러스터 생성 및 애플리케이션에 연결하기

- mongoDB 사이트 접속해서 계정 만들기 & 클러스터 생성 (freetier 가능한 지역, MO Sandbox 선택, 클러스터 이름 설정(선택), 생성까지 5분 - 7분 소요됨)

- create first database user
  -> username, password 설정

- local server로 설정 & add ip address to your access list
  -> 일단 로컬 서버로 설정해둠 (나중에 바꿀 수 있음), 현재 ip 주소 추가해둠

- mongoose 설치,
  **mongoose를 사용해 어플리케이션과 mongodb를 연결**한다

- connection your application > connection string 복사해서 mongoose.connect()의 첫 번째 인자(uris)로 전달

### 2) mongodb 모델 & 스키마

- Schema를 통해서 document의 구조, 기본값, 유효성 체크 등을 정의할 수 있다.

- Model은 데이터베이스에 CRUD를 수행하기 위한 인터페이스를 제공한다.

- Model은 schema를 감싸는 Wrapper이다.

## 3. git

working directory

git add -> staging area

git commit -> git repository (Local)

git push -> git repository (Remote)

ssh를 사용해 github (cloud 서비스)에 연결

git : 소스코드 분산버전관리 툴
github : 클라우드 서비스, git으로 관리하고 있는 서비스를 github에 올려 백업/공유할 수 있다.

로컬 <-> 깃허브가 안전하게 통신할 수 있도록
github ssh 설정

## 4. 회원 가입 기능 만들기

1. client (브라우저)에서 request body에 담아서 보내는 내용을
   파싱할 수 있도록
   body-parser라는 패키지 설치

2. API 요청을 테스트해볼 수 있게 Postman 설치

3. 회원 가입을 위한 '/register' router 만들기
   클라이언트에서 회원가입을 위해 필요한 정보들을 서버에 보내면,
   그 정보들을 검증하고 데이터베이스에 저장한다.

   User 모델의 인스턴스를 생성한다.

4. user.save()로 인스턴스를 mongodb에 저장한다.
