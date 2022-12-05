https://www.npmjs.com/package/node-sass
https://sass-lang.com/install

https://jeonghwan-kim.github.io/dev/2020/06/27/node-sass.html

node-sass는 c++ addon을 사용하기 때문에 (c++ addon : c/c++로 만든 코드를 노드에서 실행시키기 위한 인터페이스로, 자바스크립트 코드를 해석하는 v8 엔진에 의존성을 가짐. )

보통 node 메이저 업데이트가 되면 v8 엔진도 버전이 올라감 -> v8에 의존하는 애드온도 버전이 올라가야 함 -> 애드온을 사용하는 node-sass도 업데이트가 필요함.

sass는 dart로 작성된 dart-sass를
외부 의존성 없이 순수한 자바스크립트로 컴파일한 패키지이므로 이러한 문제가 없음

+) 추가로 Node-sass는 deprecated되어
더이상 css/sass 새로운 기능들이 업데이트 되지 않기 때문에
sass 공식 문서에서도 sass 설치를 권장하고 있음.
