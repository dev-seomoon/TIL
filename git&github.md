1. 서브모듈이 있는 레포지토리 클론하기 :

   - clone && git submodule init && git submodule upate

2. 서브모듈에서 작업한 사항 올리기 :

   - cd submodule && git add & git commit & git push origin HEAD:main
   - cd .. && git add commit push

3. 서브모듈에서 작업한 사항 가져오기 :

   - cd submodule && git pull origin main
   - cd .. && git add commit push
