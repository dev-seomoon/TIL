# MongoDB

NoSQL 데이터베이스 :
Not Only SQL. 비관계형 데이터베이스.

MongoDB는 NoSQL 중 가장 많이 쓰이는
비관계형 데이터베이스 관리 시스템.

SQL vs mongoDB
=>
데이터베이스 > 테이블 > 행 , 열
vs
데이터베이스 > 컬렉션 > 문서 > 필드

MongoDB Atlas :
MongoDB cloud-hosted 서비스.
설치 x, 프리티어 제공

MongoDB는 데이터를 BSON “문서" 형태로 모아서 “컬렉션”에 저장한다.
데이터베이스마다 한 개 이상의 문서 컬렉션이 저장된다.

db/컬렉션에 처음으로 데이터를 저장할 때 db/컬렉션이 생성된다.

컬렉션 :
관계형 데이터베이스의 테이블과 유사.

기본적으로는 한 컬렉션안의 도큐먼트들이더라도, 스키마(필드 & 필드 데이터타입)가 동일하지 않을 수 있다.
3.2버전부터는 도큐먼트 스키마 validation을 강제할 수 있다.

validation :
컬렉션 별로 적용됨. JSON Schema validation을 사용해 필수 필드, 필드별 타입 등을 지정할 수 있다.

샤드 :
데이터 베이스를 수평으로 분할해서 만든 파티션.
데이터베이스 서버 인스턴스의 부하를 분산시키기 위해 사용함.

컬렉션 식별자 :
각 컬렉션은 UUID를 할당 받는다.

뷰 :
다른 컬렉션이나 뷰에 aggregation 파이프라인을 적용해 만든 가상 컬렉션 객체.
(Ex: 컬렉션에서 민감한 정보를 담은 필드를 제외시키거나, 연산 결과 필드를 추가하거나, 두 컬렉션을 결합해 뷰를 만듦. )

- 뷰를 정의할 때 사용한 실제 컬렉션이 변경되면 뷰도 자동으로 변경됨.
- 검색은 일반 컬렉션과 동일하지만, 삽입/삭제/갱신 등의 연산은 불가 (Read-Only).
- 뷰는 베이스 컬렉션의 인덱스를 사용함. 따라서 뷰에서 직접적으로 인덱스를 생성/삭제하거나 인덱스 리스트를 가져올 수 없음.
- 한 번 정의된 뷰는 변경할 수 없으며, 삭제 후 다시 생성해야 함.
- 뷰를 통해 데이터에 접근하게 되어, 보안성을 높임
- 데이터 관리가 간단해지고 논리적 독립성을 제공하며 하나의 컬렉션으로 여러 개의 뷰를 정의할 수 있다.

aggregation pipeline :
도큐먼트를 처리하는 파이프라인.
파이프라인의 각 단계별로 도큐먼트 필터링, 그룹화, 연산 등의 작업을 수행하고,
결과를 반환한다. (예: 합계, 평균, 최댓값 등)

aggregate() 메소드의 인자로
단계 객체 배열을 전달한다.
(map-reduce 사용 x)

Aggregation 표현식 :
$accumulator, $function 등의 aggregation 연산자를 사용해서 사용자 지정 표현식을 사용할 수 있다.

————————
명령어

db : 현재 데이터베이스 확인
use <dbName> : 데이터베이스 변경
db.collection1.insertOne({ x : 1 })
db.collection2.createIndex({ x : 1 })
-> 컬렉션 생성 및 데이터 삽입
db.createCollection() : 컬렉션 명시적으로 생성. 옵션 설정이 필요한 경우에 사용.
