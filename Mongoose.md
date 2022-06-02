# Mongoose

MongoDB와 Node.js를 연결해주는 ODM(Object Document Mapping) - 도큐먼트와 객체를 매핑해주는 역할.

1)MongoDB 연결하기

mongoose.connect(‘mongoDbUrl’)
(mongodb url - 기본적으로 localhost 사용)

2)Schema 생성하기
Schema : SQL의 테이블과 비슷한 개념. 도큐먼트에 스키마를 도입해 도큐먼트 필드 종류와 타입 등을 강제하는 것.

스키마 선언
new Schema({
width: Number,
name: {type: String, required: true},
iamge: imageSchema,
friends: [String]
})

스키마 모델 객체 선언 & 서버에 올리기
model(‘Developer’, developerSchema)
-> api 라우터를 정의할 때, 모델을 가져와서
데이터베이스에 접근할 수 있다. (Mo-models, ncnc-models 등)

3)쿼리
모델에 다음과 같은 쿼리 메소드를 사용해, 원하는 데이터를 가져올 수 있다.
findOne(), find()
deleteOne(), delete()
sort()
select(‘age’) - age 필드만 가져옴
