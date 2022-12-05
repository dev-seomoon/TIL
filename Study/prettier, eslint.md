Error: Qualified path resolution failed: we looked for the following paths, but none could be accessed.

찾을 수 없다는 Path를 확인해보니까
typescript-parser 모듈이었음

-> @typescript-eslint/parser가 package.json에는 추가되어 있는데 yarn cache에 포함되어 있지 않고
yarn install을 다시 해도 마찬가지였음

-> yarn add -D @typescript-eslint/parser로 다시 설치 후 vscode reload해서 해결
