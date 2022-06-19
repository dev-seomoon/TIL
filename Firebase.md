# Firebase

## [Firebase 주요 기능과 유사제품](https://mingeesuh.tistory.com/entry/Firebase-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%9E%80-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5%EB%93%A4%EA%B3%BC-%EC%9C%A0%EC%82%AC-%EC%A0%9C%ED%92%88%EB%93%A4)

### Authentication (인증) :

인증 기능 구현을 쉽게할 수 있다.

유사제품) AWS Cognito

### Cloud FireStore (DB) :

RealtimeDatabase(deprecated) - 클라이언트 측에서 실시간으로 업데이트를 확인할 수 있음. 쿼리가 약하다.
Cloud FireStore - NoSQL 클라우드 데이터베이스. 앱에서 사용될 데이터를 저장, 싱크하고 쿼리할 수 있다. RealtimeDB보다 쿼리가 개선된 버전.

클라이언트에서 바로 데이터베이스에 접근 가능하다.

유사제품) AWS DynamoDB, MongoDB Atlas

### Cloud Storage (클라우드 스토리지) :

클라우드에 호스팅되는 파일 스토리지 저장소. 이미지, 오디오 파일 등 저장 가능.

유사제품) AWS S3, Cloudinary

### Cloud Function (클라우드 함수) :

서버의 역할을 해줄 수 있는 환경이 필요할 때 (스크립트, job 등 실행 시)

유사제품) AWS Lambda

### Cloud Messaging (클라우드 메세징) :

운영체제와 관계 없이, 여러 기기에 푸시알람을 보낼 수 있게 해주는 기능.
웹 관리자 페이지에서 수동으로 푸시 알람을 보낼 수도 있고,
클라우드 함수를 통해 데이터베이스 업데이트를 감지해 자동으로 푸시 알람을 보낼 수도 있다.

### Firebase 호스팅 :

모바일 앱 개발을 위해 처음 만들어지긴 했지만, 웹 앱을 만들 때도 많이 쓰이고 있기 때문에
웹 앱을 쉽게 배포할 수 있도록 호스팅 서비스도 지원한다.
