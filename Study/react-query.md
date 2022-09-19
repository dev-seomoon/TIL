## 데이터 refresh 방법 비교

- invalidateQueries는 fuzzy 쿼리 키 매칭을 제공함. (쿼리 키가 일부만 일치해도 invalidation됨)

- invalidateQueries vs refetch :

  - refetch : useQuery hook에서 반환되는 메서드.

  - invalidation is a more "smart" refetching. Refetching will always refetch, even if there are no observers for the query. invalidation will just mark them as stale so that they refetch the next time an observer mounts. For queries with active observers, there is no difference as far as I'm aware.
    (https://github.com/TanStack/query/discussions/2468)

- refetch vs refetchQueries :

  - refetch is just a hardcore "fetch now, no questions asked" (at least the one returned from useQuery). refetchQueries still respects {enabled:false} for example.

- prefetchQueries vs fetchQueries :

  - prefetch는 반환값이 없고 에러도 throw하지 않음. (미리 fetch하는 것이기 때문에 성공하지 않아도 상관없는 경우 사용.) 또한 전역에서 설정된 staleTime이나 옵션으로 받은 staleTime에 따라 data가 fresh하면 바로 resolve된다.
    그 외에는 동일함.

- keepPreviousData :
  if you want to avoid a hard loading state in between query key dependencies changes, set `keepPreviousData: true`

## 리액트 쿼리 with Next Pre-rendering

1. initialData 사용
   getStaticProps()나 getServersideProps()에서 넘겨받은 props를
   useQuery에 initialData로 전달.

   단점 :

   - useQuery를 호출하는 컴포넌트의 뎁쓰가 깊으면 initialData를 그 지점까지 전달해야 함
     (getStaticProps, getServersideProps는 기본적으로 페이지 단위로만 사용 가능)
   - useQuery를 여러 곳에서 호출하는 경우, 모든 useQuery에 initialData를 전달해줘야 함
   - 쿼리가 서버ㅔㅇ서 언제 페칭되었는지 알 방법이 없음 -> 쿼리가 서버에서 페칭된 시점이 아니라 페이지가 로드된 시점을 대신 사용해야 함

   세팅할 게 거의 없어서 간단하게 쓸 때는 좋음

2. hydration 사용
