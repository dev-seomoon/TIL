# Electron

Electron을 사용하면 웹페이지가 Node.js API에 접근할 수 있어서,
좀 더 로우레벨에서 운영체제와 상호작용이 가능하다.
(일반 웹페이지는 대개 샌드박스 환경에서 실행되고 네이티브 리소스에는 액세스할 수 없음)

### Notifications

- main process와 renderer process에서
  Notifications을 보내는 방법이 다름

  - main process -> Notification 모듈 사용
  - renderer process -> (현재 OS의 네이티브 notification API를 사용하는) HTML5 Notification API 사용

### Main Process vs Renderer Process

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboSdbW%2FbtqBg8ou4He%2FXdrW3m4fvLkcOnOYOf6ox0%2Fimg.png)

1. 메인 프로세스 :

- Back-end 영역에 속함

- Electron 어플리케이션은 항상 하나의 메인 프로세스를 가짐.
- Node.js 기반, Node.js에서 사용하는 모든 모듈 사용 가능
- package.json의 main 스크립트를 실행하는 프로세스
- main 스크립트 : 웹페이지들을 GUI로 표시해주는 역할

2. 렌더러 프로세스 :

- Front-end 영역에 속함

- Electron 어플리케이션에 여러 개 존재할 수 있음
- Electron은 웹페이지를 보여주기 위해서 **Chromium**(크로뮴)을 사용함.
  -> Chromium의 멀티프로세스 아키텍처를 그대로 사용.
- Electron의 각 웹 페이지는 자신의 프로세스 안에서 동작하는데, 이 프로세스를 렌더러 프로세스라고 부른다.

3. 과정

1) 메인 프로세스가 BrowserWindow 인스턴스를 생성해 웹 페이지를 만듦
2) BrowserWindow 인스턴스가 자체 렌더러 프로세스에서 웹 페이지를 실행함
3) BrowserWindow 인스턴스가 소멸되면 해당 렌더러 프로세스도 종료됨

- 메인 프로세스는 모든 웹 페이지와, 각 페이지들이 소유한 렌더러 프로세스들을 관리함.
- 렌더러 프로세스들은 서로 독립적으로 동작하고, 자신이 실행한 웹페이지에만 관여함.
- 웹페이지에서 GUI 작업을 수행하려면 렌더러 프로세스가 메인 프로세스에 작업 수행을 요청해야 함.
- Electron은 메인 프로세스와 렌더러 프로세스에서 사용할 수 있는 API를 제공함. 대부분의 API는 메인 프로세스에서만 사용할 수 있고, 렌더러 프로세스에서만 사용할 수 있거나 양쪽 모두 사용할 수 있는 API도 있음.

- remote 모듈 : 메인 프로세스에서만 사용 가능한 API들을 가지고 있음

4. Main Process와 Renderer Process 간의 통신

- 메세지 전송 : ipcRenderer, ipcMain 모듈
- RPC 방식 통신 : remote 모듈

-> 프로세스 간 통신이 가능하기 때문에, 렌더러 프로세스에서 작업 수행을 위해서 메인 프로세스를 호출할 수 있다.
