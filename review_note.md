- DB 요청 시,
  attributes(칼럼)을 동적으로 지정하게 하면
  보안 상 좋지 않다 (사용자가 attribute에 임의의 값을 전달할 수 있기 때문)

  attribute 값을 함수 인자 값 등에 따라 동적으로 지정해야 하는 경우
  switch문으로 분기하거나, enum 타입을 사용해 매핑하거나,
  의도한 attribute name이 맞는지 검증하는 과정 등을 통해
  보안 상 문제가 없도록 하는 것이 좋다.

- prettier 적용이 안 되는 경우 :
  검색해서 나오는 기본적인 방법들을 다 시도해봤음에도
  prettier 적용이 안 될 때 디버깅 방법

  1. prettier 적용이 필요한 파일을 연 상태에서 vscode 하단에 Prettier 체크 부분 클릭하기
  2. VSCode 터미널의 OUTPUT 탭이 열림 -> 내용 확인하기

  1)  에러메세지가 뜨는 경우 ( + vscode 하단 Prettier 왼쪽에 체크표시가 아닌 에러 표시가 뜨는 경우)
      에러메세지를 확인하고 해결하기
  2)  프로젝트에 Prettier 설정이 되어있는데도 vscode의 prettier 설정이 적용되는 경우
      vscode prettier 설정이 적용되고 있는지,
      프로젝트의 local prettier 설정 (prettierrc 파일의 설정)이 적용되고 있는지 확인할 수 있음
      (vscode prettier 설정이 적용되고 있는 경우 -> No local configuration, local prettier 설정이 적용되고 있는 경우 -> detected local configuration)
      아래와 같이 어떤 설정들이 적용되고 있는지까지 전부 보여준다.

      ```
      ["INFO" - 5:31:34 PM] Prettier Options:
      {
        "singleQuote": true,
        "trailingComma": "all",
        "semi": false
      }
      ```

      +) npm i --location=global prettier로 전역에 prettier를 설치한 후
      `prettier --find-config-path [prettier를적용할파일경로]` 입력하면
      해당 파일에 적용되고 있는 prettier config 파일을 확인할 수 있다.

  3)  output을 확인했을 때 정상적으로 동작하고 있는데도
      설정한 옵션대로 prettier 정렬이 되지 않는 경우 :

      Command + Shift + P (Ctrl + Shift + P in windows) > Format document with > configure default formatter > prettier - Code formatter 선택

      하고나서 vscode 재시작하기
      Ref) https://stackoverflow.com/questions/52586965/why-does-prettier-not-format-code-in-vs-code/58669550#58669550

- 패키지 추가 또는 업데이트 시, yarn add 패키지명 입력해서 처리하기 (package.json 직접 수정 지양. yarn berry를 사용하는 프로젝트에서는 필요한 디펜던시(?)들이 설치가 되지 않음)
