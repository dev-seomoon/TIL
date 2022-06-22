- `*` 선택자
  브라우저에 과부하가 걸리기 때문에 프로덕션 레벨에서 과다하게 사용하는 것은 권장하지 않음

- `:` 선택자 뒤에 클래스 이름을 붙이는 방식 -> "가상 클래스"라고 함

- `:not` 선택자
  `div:not(#container)`
  id가 container인 div를 제외한 모든 div 선택

- anchor 태그 선택자 (`:link`, `:visited`)
  `:link`는 클릭하기 전, `:visited`는 클릭했거나 방문한 링크.

- 인접 선택자
  `ul + p`
  `ul` 태그 바로 뒤에 오는 `p` 태그만 선택

- `div p` div 하위의 p태그 선택
- `div > p` div 직계 하위인 p태그 선택

- `ul ~ p` ul 뒤에 오는 모든 p 태그 선택

- `a[title]` title 속성이 있는 a 태그만 선택

- `a[href="https://ncnc.app"]`
  href 속성 값이 "https://ncnc.app"인 a 태그 (정규표현식 활용도 가능함)

- `a[href*="ncnc"]` href 속성 값에 "ncnc"가 포함되는 모든 a 태그

- `:first-of-type`
  해당 type의 첫 번째 형제 선택자 선택

Reference :
https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048
