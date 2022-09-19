1. n 설치 `npm i -g n`

2. n 설치 확인 `n -V`

3. 최신 node 버전 설치 `n lts`
   (다른 버전 설치가 필요한 경우 : n i 16.12.0)

4. node 버전이 변경되었는지 확인하기 `node -v`

5. installed 경로와 active 경로가 다른 경우
   installed : v16.14.0 to installed_path
   active : v16.17.0 to active_path

   `ln -sf installed_path active_path`
