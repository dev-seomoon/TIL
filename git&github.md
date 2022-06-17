### 서브모듈

1. 서브모듈이 있는 레포지토리 클론하기 :

   - clone && git submodule init && git submodule upate

2. 서브모듈에서 작업한 사항 올리기 :

   - cd submodule && git add & git commit & git push origin HEAD:main
   - cd .. && git add commit push

3. 서브모듈에서 작업한 사항 가져오기 :

   - cd submodule && git pull origin main
   - cd .. && git add commit push

### alias

`git config --global alias.st 'status -s'`
`vi ~/.gitconfig`
`lg = log --graph --abbrev-commit --decorate --format=format:'%C(cyan)%h%C(reset) - %C(green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(yellow)%d%C(reset)' --all`

출처: https://goddaehee.tistory.com/273 [갓대희의 작은공간:티스토리]

vi ~/.zshrc

alias hello="echo hello-world"

source ~/.zshrc
