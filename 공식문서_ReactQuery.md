# Guide & Concepts

## 기본

- 쿼리 인스턴스 `useQuery`, `useInfiniteQuery`는
  기본적으로 캐시된 데이터를 stale한 데이터(지난 데이터)로 간주한다.
  (`staleTime` 옵션)

- 다음과 같은 경우 백그라운드에서 데이터를 다시 fetch한다.

  - 새 쿼리 마운트 인스턴스 생성 시 `refetchOnMount`
  - 창 포커스가 다시 되었을 때 `refetchOnWindowFocus`
  - 네트워크가 다시 연결되었을 때 `refetchOnReconnect`
  - 쿼리에 refetch interval 옵션이 설정되었을 때 `refetchInterval`

- 쿼리 결과에 활성화된 쿼리 인스턴스나 쿼리 옵저버가 없는 경우,
  쿼리는 "inactive" 상태가 되고, 재사용 시 캐시에 남는다.
  기본적으로 "inactive" 상태인 쿼리는 5분 후 메모리에서 해제(garbege collected)된다.

- 실패한 쿼리는
  UI 상에 실제로 에러가 나타나기 전까지
  \*Exponential backoff delay 방식으로 3번까지 재시도된다.

- 쿼리 결과는 기본적으로 구조적 공유(structurally share)되어 데이터가 실제로 변경되었는지 감지하고,
  데이터가 변경되지 않은 경우 데이터 참조를 변경하지 않고 유지해 `useMemo` 또는 `useCallback` 값 안정화에 도움이 된다.

## 쿼리

### 쿼리 Basics

- 쿼리 : 유니크한 키값에 연결된, 비동기 데이터 소스에 대한 선언적 depencency.
  서버에서 데이터를 가져올 수 있는 Promise 기반 메소드와 함께 사용할 수 있다.
  서버의 데이터를 수정하는 메소드인 경우 쿼리 대신 뮤테이션을 사용해야 한다.

  `const result = useQuery('key', promise를 반환하는 함수)`

  - `result` 객체 프로퍼티 :
    - `isLoading`
    - `isError` && `error`
    - `isSuccess` && `success`
    - `isFetching` (백그라운드 fetching을 포함해 쿼리가 fetching중 일 때 `true`)
    - `isIdle`(비활성화 상태)
    - `status` : loading, error, success 등

- 쿼리 key :
  - 문자열 key :
  - 배열 key :

---

\*Exponential backoff delay 방식 :
https://jungseob86.tistory.com/12
일정 시간 간격을 두고 Retry를 할 때, 시간 간격이 점진적으로 늘어나도록 조정하는 것. 이 때 지수에 비례해 간격을 증가시킨다.
(ex: 첫번째 재시도 대기시간 100ms -> 두번째 200ms -> 세번째 400ms처럼 2의 지수배씩 늘어남)
재시도 횟수가 증가할수록 backoff 시간도 증가해서 네트워크에 갑작스럽게 트래픽을 부담시키는 것을 피할 수 있다.
(그러나 동시에 요청이 몰릴 경우, 동일한 시간 간격으로 Retry가 각각 발생하기 때문에 한계가 있다. )
