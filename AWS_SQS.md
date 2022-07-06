## 정의

SQS (Simple Que Service) :
해야할 일을 나중에 처리하거나, 다른 시스템이 처리할 수 있도록 하기 위한
비동기 메시징 서비스.

SQS는 처리해야 할 업무에 대한 TODO 리스트와 같은 역할을 하는데,
시스템에서는 이를 메시지라고 부른다. SQS는 이러한 메시지들의 저장소이다.
SQS는 AWS에서 관리하는 서비스로, 매우 저렴한 가격에 메시징 서비스를 제공한다.

일반적으로 각 어플리케이션이 가지는 Coupling을 끊어주는 역할을 한다.

사용 예시)

- 처리에 시간이 오래 걸리는 작업은 SQS에 발행하고,
  백그라운드에서 SQS를 처리하도록 해서 사용자의 대기 시간을 줄일 수 있다.
- 여러 개의 독립적인 시스템을 구축하고, 각 시스템이 서로 협력하는 방식으로 구현할 때 -> 서로 진행상황을 공유하기 위해 SQS를 활용한다.

+) Dynamoose :
AWS의 DynamoDB(NoSQL 데이터베이스)를 위한 모델링 툴. (Mongoose와 매우 비슷함)

## 처리 과정

![](https://github.com/schooldevops/AWS_Tutorials_by_kido/raw/main/Queueing/imgs/AWS-SQS_VS_SNS.png)

Producer - Message Broker (SQS) - Consumer

Producer가 메세지를 보내서 Queue에 메세지를 저장하고,
이를 Consumer가 가져가서 프로세싱하는 방식.

1. Producer가 메시지를 생성해 Queue로 메시지를 전송한다.
2. Queue가 메시지를 가지고 있다가
3. Consumer가 주기적으로 Queue를 Polling하면서 신규 메시지가 있다면 가져가서 처리한다.
4. 처리가 끝나면 Queue로 Ack를 전송한다. (메시지 아이디에 해당하는 Ack를 받으면 Queue에서 해당 메시지를 제거한다. )

이렇게 Producer와 Consumer를
Queue라는 미들웨어로 분리하면, 각 시스템에 영향을 받지 않고 원하는 작업을 수행할 수 있다.

## 타입

- Standard :

  - inflight 메시지 120,000개
  - 최대 처리량. 무제한 초당 트랜잭션 지원 (TPS)
  - Best effort (최적의) 순서로 처리 (순서 보장 x, Throughput(처리율)을 극대화하기 위해. 최대한 순서를 보장하고자 노력하지만 신뢰할 수 없음)
  - 최소 1회 이상 전달 (중복 수신이 될 수 있음)

- FIFO (.fifo) :

  - inflight 메시지 20,000개
  - 들어온 순서대로 처리 (정확한 순서 보장. 단, 순서 보장을 위해 초당 300TPS 제한이 있어 처리율이 제한됨, 느린 퍼포먼스. )
  - 정확히 1번 실행 (중복 수신 방지)

## 가격 및 보안

- 가격 : Standard < FIFO

- 보안 :

  - KMS를 이용한 암호화 키 관리
  - TLS 전송
  - Auditing (Tracing)
  - Amazon S3 연동해 잘못된 접근 기록함

- 메시지를 consume할 수 없는 경우, DLQ(배달되지 못한 메시지 대기열)로 전송할 수 있다. (생성 지정 필요)

## 사용하기

### Terraform으로 SQS 생성 자동화하기

## References

- [AWS SQS (Simple Queue Service) 정리 (연재#1)](https://devocean.sk.com/search/techBoardDetail.do?ID=163290&query=sqs&searchData=Amazon+Web+Service&page=&subIndex=&idList=%5B164052%2C+164047%2C+164046%2C+164044%2C+164033%2C+164027%2C+164012%2C+164004%2C+164002%2C+164001%2C+164000%2C+163997%2C+163996%2C+163995%2C+163989%2C+163984%2C+163981%2C+163974%2C+163970%2C+163969%2C+163966%2C+163964%2C+163957%2C+163952%2C+163941%2C+163936%2C+163934%2C+163927%2C+163924%2C+163908%2C+163892%2C+163872%2C+163584%2C+163390%2C+163301%2C+163296%2C+163295%2C+163294%2C+163290%5D)
- [AWS SQS (Simple Queue Service) 정리 (연재#2)](https://devocean.sk.com/search/techBoardDetail.do?ID=163294&query=sqs&searchData=Amazon+Web+Service&page=&subIndex=&idList=%5B164052%2C+164047%2C+164046%2C+164044%2C+164033%2C+164027%2C+164012%2C+164004%2C+164002%2C+164001%2C+164000%2C+163997%2C+163996%2C+163995%2C+163989%2C+163984%2C+163981%2C+163974%2C+163970%2C+163969%2C+163966%2C+163964%2C+163957%2C+163952%2C+163941%2C+163936%2C+163934%2C+163927%2C+163924%2C+163908%2C+163892%2C+163872%2C+163584%2C+163390%2C+163301%2C+163296%2C+163295%2C+163294%2C+163290%5D)
