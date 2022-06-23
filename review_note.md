- DB 요청 시,
  attributes(칼럼)을 동적으로 지정하게 하면
  보안 상 좋지 않다 (사용자가 attribute에 임의의 값을 전달할 수 있기 때문)

  attribute 값을 함수 인자 값 등에 따라 동적으로 지정해야 하는 경우
  switch문으로 분기하거나, enum 타입을 사용해 매핑하거나,
  의도한 attribute name이 맞는지 검증하는 과정 등을 통해
  보안 상 문제가 없도록 하는 것이 좋다.

- Prettier 적용 되어 있는지 꼭 확인하고 PR 올리기.
  VSCode 하단에 Prettier에 체크표시가 되어 있는지 확인하기.

-
