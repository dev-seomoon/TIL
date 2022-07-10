# TypeScript로 블록체인 만들기

타입스크립트 : 자바스크립트의 동적 타입 시스템이 갖는 문제점들을
보완하기 위해 만들어진 자바스크립트 확장판 언어.

## 강의 소개

- 더 나은 개발 경험과 생산성을 원하는 JS 개발자
  or 타입 안정성을 갖춘 다른 언어(C#, Java 등)에 익숙한 개발자를 위한 강의

- Node.js가 설치되어 있어야 함. (17.3 이상 버전)

- VSCode 사용 추천 -> VSCode를 만든 MS가 타입스크립트를 만들었기 때문
  (VSCode에서 타입스크립트의 합이 매우 좋음)
  타입 시스템에 기반해 자동완성 기능을 제공.

## 타입스크립트를 사용하는 이유

- **안정성 (타입 안정성)**을 기반으로
  개발 경험과 생산성을 향상시키고,
  버그와 런타임 에러를 줄일 수 있다.

- 자바스크립트는 매우 유연한 언어로,
  에러를 최대한 발생시키지 않는 방향으로 설계 되었다.
  ex) [1, 2, 3, 4] + false -> '1,2,3,4false' (with NO ERROR)

- 런타임 에러 : 코드를 실행해야 발견할 수 있는 에러.

  실행되기 전에, 컴파일 단계에서 에러를 파악할 수 있어야
  (아예 실행이 되지 않고 에러를 띄워야)
  예상치 못한 버그를 줄이고 프로그램의 안정성을 높일 수 있다.

## 타입스크립트 기초

### 타입스크립트

- 자바스크립트에 타입을 부여한 자바스크립트 확장 프로그래밍 언어. 강력한 타입 시스템 사용.

### 타입스크립트의 동작 방식

- 타입스크립트로 작성한 코드는 자바스크립트로 컴파일(변환)된다.
  브라우저, Node.js가 타입스크립트를 이해하지 못하기 때문.

- 이 때 타입스크립트 코드에 문제가 있으면 자바스크립트로 컴파일이 되지 않고 컴파일 에러를 발생시켜
  런타임 에러를 미연에 방지하고 안정성을 높여준다.

### 타입스크립트의 타입 시스템

#### 암시적 타입 vs 명시적 타입 (Implicit Types vs Explicit Types)

C언어 등에서는 모든 데이터의 타입을 명시적으로 지정해야 하는 반면,  
 타입스크립트에는 암시적 타입과 명시적 타입이 있다.
타입을 명시적으로 지정(명시적 타입)하지 않으면 타입스크립트가 타입을 추론(암시적 타입)한다.

타입 추론이 가능한 경우에는 굳이 타입을 명시적으로 지정하지 않는 것이 좋다.
가독성과 효율성을 위해 명시적 타입 선언은 최소화한다.

타입스크립트가 타입을 추론할 수 없는 경우 - 변수 생성 시 빈 값을 할당하는 경우 등

#### 타입 종류

- **기본 타입** :

  - number, string, boolean, []
  - `let arr: number[]`

- **Optional 타입** :

  - `undefined`가 될 수도 있는 타입.
  - `age?: number` === `age: number | undefined`

- **Alias 타입** :

  - `type Player = { name: string, age?: number }`

- **Argument 타입, Return 타입** :

  - 함수의 인자, 반환값의 타입 지정하기
  - `function playerMaker(name: string): Player { ... }`
  - `const playerMaker = (name: string): Player => { ... }`

- **readonly 타입**

  - `type Player = { readonly name: string, age?: number }`
  - `const numbers: readonly number[] = [1,2,3]`
  - 배열에 readonly 타입을 적용할 경우, 기존 배열을 변경하는 배열 메소드는 사용할 수 없고 새로운 배열을 반환하는 배열 메소드만 사용할 수 있다. -> 불변성(immutablity) 제공

- **Tuple 타입**

  - `const player: [string, number, boolean] = []`
  - 항상 정해진 갯수, 타입을 갖는 배열 타입.
    이런 식으로 데이터를 건네주는 API가 종종 있다.
  - Tuple에도 readonly를 적용할 수 있다.
    `const player: readonly [string, number, boolean] = []`

- **null, undefined 타입**

- **any 타입**

  - 어느 타입이든 될 수 있는 타입. 타입스크립트를 비활성화시킨다. (escape from typescript world)
  - any 타입을 사용하지 않는 것을 권장하는 lint가 많다.

- **unknown 타입**

  - 확인이 필요한 타입. 변수의 타입을 미리 알 수 없을 때 사용. 타입스크립트가 타입 확인을 강제한다.

- **void 타입**

  - 아무것도 반환하지 않는(실제로는 undefined 반환) 함수의 반환값 타입. void 타입은 타입스크립트가 기본적으로 추론하기 때문에 명시적으로 지정해줄 필요가 없음.

- **never 타입**
  - return을 하지 않고 에러를 발생시키는 함수, 절대 실행되지 않는 부분에 사용.

## 함수의 타입

### Call Signature

Call Signature : 함수의 인자와 반환값의 타입을 지정한다.

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

함수의 타입 선언과 함수의 구현 과정을 분리할 수 있다.

프로그램을 디자인할 때, 타입을 먼저 생각하고 나서
코드를 구현하게 되는 장점이 있다.

### Overloading

오버로딩 : 함수의 Call signature가 여러 개인 것.
함수의 인자의 타입이나 개수가 다를 때.

function overloading 또는 method overloading이라고도 부른다.
직접 구현하기보다는 외부 라이브러리를 통해 많이 사용하게 된다.

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  (a: number, b: string): number;
};

// parameter 'c' is optional
const add: Add = (a, b, c?: number) => {
  if (typeof b === 'string') return a;
  else if (c) return a + b + c;
  else return a + b;
};
```

### Polymorphism (다형성) & Generic

Polymorphism : many diffrent shape.
하나의 함수를 다양한 모양으로 정의할 수 있는 것.

타입스크립트는 오버로딩과 Generic을 사용해 함수의 Polymorphism을 구현한다.

Generic :
일종의 타입 placeholder.
필요에 따라 call signature를 생성할 수 있는 도구.

concrete 타입 (number, string, boolean)이 아닌 generic 타입을 함수의 인자/반환값으로 설정한다.
함수의 call signature를 작성할 때, 인자나 반환값의 타입을 미리 알 수 없을 때 generic을 사용한다.

```ts
type SuperPrint = {
  <T>(arr: T) => T
};

const superPrint: SuperPrint = (arr) => console.log(arr[0]);

superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint(['a', 'b', 1, 2, false]);
```

함수를 호출하는 시점에 generic의 실제 타입(concrete 타입)이 타입스크립트 추론에 의해 결정된다.
타입을 별도로 지정하지 않아도 된다.

```ts
type SuperPrint = <T>(a: T[]) => T;

// or

function superPrint<T>(a: T[]) {
  return a[0];
}
```

제네릭을 사용해 타입을 생성하거나, 기존 타입을 확장하거나, 또는 코드를 저장할 수 있다.

any를 사용하는 것과는 다르다.

제네릭을 직접 작성할 일이 많지는 않다.
라이브러리를 만들거나, 다른 개발자가 사용할 기능을 개발하는 경우에 제네릭이 유용할 수 있다.

제네릭에 커스텀 타입을 전달하거나 null 등을 전달할 수도 있다.

함수 뿐 아니라 타입을 사용하는 여러 부분에서 제네릭을 사용할 수 있다.

```ts
type NumArr = Array<number>;

type Player<E> = {
  name: string;
  equipment: E;
};

const setPlayer: Player<null> = (name) => {
  return {
    name,
    equipment: null,
  };
};

// in React.js
useState<number>();
```

## 클래스와 인터페이스

TypeScript로 객체지향 프로그래밍하기

### 클래스

- 클래스 :

```ts
class Player {
  constructor(private firstName: string, private lastName: string, public nickname: string) {
    // this.nickname = nickname; <- 생략
  }
}

const nico = new Player('nico', 'las', '니꼬');
```

- 프로퍼티 초기화 부분은 구현하지 않아도 됨.
  constructor 안에 선언한 프로퍼티는 자동으로 초기화됨.
  constructor 밖에 선언한 프로퍼티는 초기화되지 않음. (construct안에서 별도로 초기화를 해주어야 함. )

- 클래스 프로퍼티 선언 시 사용하는 `private`, `public`, `protected` 키워드는 자바스크립트로 컴파일 시 적용되지 않는다.
  (타입스크립트에서만 적용됨)

- private 프로퍼티는, 상속한 클래스에서도 접근할 수 없다. 해당 클래스 내부에서만 접근할 수 있다.
  protected 프로퍼티는 클래스 외부에서는 private과 동일하게 접근할 수 없지만, 상속한 클래스에서는 접근할 수 있다.

- 접근지시자의 기본값은 public이다.

- 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스.
  인스턴스를 직접 만들 수 없다.
  (cannot create an instance of an abstract class. )

  자바스크립트로 컴파일 시 일반적인 클래스로 컴파일된다.

  - 메소드 : 상속한 클래스에서 사용할 수 있다. (private 키워드를 붙이면 상속받은 클래스에서 접근할 수 없다. )

  - 추상메소드 : 추상클래스 안에서 메소드를 직접 구현하지 않고, call signature만 정의한다.
    추상메소드는 상속한 클래스에서 반드시 구현해야 한다.

```ts
abstract class User {
  constructor(private firstName: string, private lastName: string, public nickname: string) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  abstract getNickname(): void;
}

class Player extends User {}
```

- 객체의 타입은 다음과 같이 선언할 수 있다.

```ts
// key, value 타입이 string인 오브젝트
type Words = {
  [key: string]: string;
};
```

- concrete, generic 타입 외에 클래스도 타입처럼 사용할 수 있다.

- 클래스의 프로퍼티를 readonly로 선언할 수 있다.

- static 메소드 : 인스턴스를 생성하지 않고, 클래스 이름을 통해 직접 호출할 수 있는 메소드.
  자바스크립트 문법이기 때문에, 자바스크립트로 컴파일됨.

### 인터페이스

#### type vs interface

- type 지정 시 concrete type 대신 특정 값을 지정하거나, type alias로 사용할 수 있다.

  ```typescript
  type Price = number; // type alias
  type Color = 'red' | 'blue' | 'yellow';

  type Cloth = {
    color: Color;
    price: Price;
  };
  ```

- type과 interface는 모두 오브젝트의 형태를 정의하는 데에 사용할 수 있다.

interface

```ts
interface Cloth {
  color: Color;
}

interface Dress extends Cloth {
  price: Price;
}
```

typescript

```ts
type Cloth = {
  color: Color;
};

// and 연산자
type Dress = Cloth & {
  price: Price;
};
```

- type은 concrete type 대신 특정 값을 타입으로 지정하거나, type alias로 사용하는 등
  좀 더 다양하게 활용할 수 있지만,
  interface는 오브젝트의 형태 정의에만 사용할 수 있다.

- interface는 다른 interface를 상속받을 수 있다.

- interface에는 프로퍼티 합치기 기능이 있다.
  (type으로는 동일한 작업을 할 수 없다. -> 동일한 타입 재선언 불가)
  서로 다른 파일에 같은 인터페이스를 선언해서 사용하는 경우에 유용함.

  ```ts
  interface User {
    name: string
  }
  interface User {
    health: number
  }

  const nico: User = {
    name: "nico"
    health: 100
  }
  ```

- 객체지향 프로그래밍을 지향한다면 interface 사용, 좀 더 유연한 프로그래밍을 하고 싶다면 type 사용 권장.

#### interface + class

##### interface & type

(복습)

- interface와 type의 공통점 : 오브젝트의 구조를 정의할 수 있다.

- interface와 type의 차이점 :
  interface 사용 시 상속, 프로퍼티 통합이 가능하다.
  (type을 사용하는 경우에도 상속 구현은 가능하지만 방식이 다름. -> & 연산자를 사용해 구현)

  Interfaces can only be used to type an object, a Type can be used for any type.

##### abstract class

- abstract class : 추상클래스를 상속 받는 다른 클래스가 구현해야 할 프로퍼티와 메소드를 명시하는 클래스.
  (일종의 템플릿/blue print/설계도 역할)

  - 추상클래스의 인스턴스를 생성할 수 없다.
  - 어떻게 구현해야 할지는 알려주지 않지만, 무엇을 구현해야할지에 대해서 알려주는 클래스.
  - 추상메소드 : 추상클래스에서는 call signature만 선언. 추상클래스를 상속받는 다른 클래스에서 반드시 구현해야 한다.

  - 자바스크립트에는 abstract의 개념이 없다. -> 타입스크립트로 작성한 abstract class를 컴파일하면 일반 클래스가 된다.

  추상 클래스를 상속받는 클래스들의 프로퍼티와 메소드를 표준화하기 위해서
  추상 클래스를 사용하는 것이므로,
  자바스크립트로 컴파일된 코드에는 추상클래스가 더이상 필요하지 않다.

  => **인터페이스** 를 추상클래스 대신 사용하기 !
  인터페이스는 컴파일하면 JS로 바뀌지 않고 사라져 코드가 가벼워진다.

##### abstract class & interface

- 추상클래스 -> 인터페이스 :
  인터페이스로 오브젝트 또는 클래스의 구조를 정의할 수 있다.

  ```ts
  interface User {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
  }

  interface Human {
    health: number;
  }

  class Player implements User, Human {
    constructor(firstName: string, lastName: string, health: number) {}
    sayHi(name: string) {
      return `Hi I'm ${this.fullName}`;
    }
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  ```

  - 인터페이스를 사용할 때는 extends 대신 implements 키워드를 사용해
    인터페이스가 자바스크립트 일반 클래스로 컴파일되지 않도록 한다.
    (추상클래스 대신 인터페이스를 사용해 코드를 가볍게 유지하려는 목적에 부합하도록)

  - **인터페이스를 상속하는 경우**, **프로퍼티를** private, protected으로 선언하지 못한다. (**public으로만 선언할 수 있다.**)

  - 하나의 클래스에서 두 개 이상의 인터페이스를 상속받을 수 있다.

  - 클래스나 인터페이스를 타입으로 사용할 수도 있다.

        ```ts
        interface User {
          firstName: string;
          lastName: string;
          sayHi(name: string): string;
          fullName(): string;
        }

        function makeUser(user: User) {
          return 'hi';
        }

        makeUser({
          firstName: 'seo',
          lastName: 'moon',
          fullName: () => 'secret',
          sayHi: (name) => 'hi',
        });
        ```

    => 타입스크립트 커뮤니티에서는 오브젝트의 구조를 정의할 때는
    인터페이스를, 그 외에는 타입을 사용하는 것을 권장하고 있다.
    (인터페이스 상속 방식이 더 직관적이고, 동일한 인터페이스의 프로퍼티들을 따로 통합할 수 있기 때문. )

### Polymorphism

제네릭 + 클래스 + 인터페이스 => 다형성 구현

제네릭을 사용해 concrete 타입이 아닌 placeholder 타입을
사용할 수 있다.
같은 코드를 여러 타입에 재사용할 수 있다.

```ts
interface Storage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: Storage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    this.storage[key] = null;
  }
  get(key: string): T {
    return this.storage[key];
  }
}

const stringStorage = new LocalStorage<string>();
const booleanStorage = new LocalStorage<boolean>();
```
