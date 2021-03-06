1.1 디자인 패턴

디자인 패턴 : 프로그램을 설계할 때 발생했던 문제점들에 대한 해결책을 패턴화한 것.

- 싱글톤 패턴 (Singletone Pattern) :
  하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴.
  하나의 인스턴스만 만들고, 해당 인스턴스를 다른 모듈들이 공유하기 때문에
  인스턴스 생성 비용이 줄어들지만 의존성이 높아진다는 단점이 있다.

  - 자바스크립트에서는 리터럴이나 Object 생성자로 객체를 생성하면,
    다른 어떤 객체와도 같지 않기 때문에
    싱글톤 패턴을 구현하게 된다.

  - 데이터베이스 연결 모듈에 많이 쓰임 (데이터베이스 연결을 위한 인스턴스 생성 비용을 아낄 수 있기 때문. )
    Ex) mongoose(Node.js에서 MongoDB를 연결할 때 사용하는 모듈), MySQL(Node.js에서 MySQL DB를 연결할 때)

    - MySQL) 메인 모듈에서 데이터베이스 연결에 관한 인스턴스를 정의하고,
      다른 모듈에서 해당 인스턴스를 기반으로 쿼리를 보내는 방식.

  - 싱글톤 패턴의 단점 :

    - TDD를 적용하기 어려워진다.

      TDD에서는 단위 테스트를 주로 하는데,
      단위 테스트를 할 때는 테스트가 서로 독립적이어야 하며 테스트를 어떤 순서로든 실행할 수 있어야 한다.
      그러나 싱글톤 패턴은 하나의 인스턴스를 기반으로 구현하는 패턴이므로, 각 테스트마다 독립적인 인스턴스를 만들기가 어렵다.

    - 모듈 간의 결합이 강해진다. (의존성이 높아진다. )
      -> 의존성 주입으로 해결

  - 의존성 주입 (DI, Dependency Injection) :

    - 메인 모듈이 직접적으로 의존성을 주는 것이 아니라, 별도의 의존성 주입자(Dependency Injector)가 하위 모듈에 의존성을 주는 방법.

    - 의존성 주입을 통해 의존성을 낮추는 것을 '디커플링 된다'라고도 한다.

    - 장점 :

      - 모듈을 쉽게 교체할 수 있는 구조가 되어 테스트와 마이그레이션이 수월해짐.
      - 구현할 때, 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어준다. -> 애플리케이션 의존성 방향이 일관되고, 애플리케이션 추론이 쉬워지며, 모듈 간 관계가 좀 더 명확해진다.

    - 단점 :

      - 모듈 분리성이 더 커져 클래스 수가 늘어남으로써 복잡성이 증가될 수 있다.
      - 약간의 런타임 페널티가 생길 수 있다.

    - 의존성 주입 원칙 :
      상위 모듈은 하위 모듈에서 어떤 것도 가져오지 않아야 한다.
      상위 모듈과 하위 모듈 둘 다 추상화에 의존해야 하며, 이 때 추상화는 세부 사항에 의존하지 말아야 한다.

- 팩토리 패턴 : 객체를 사용하는 코드에 적용할 수 있는 패턴.

  - 객체 생성 부분을 떼어내 추상화한 패턴.
  - 상위 클래스가 중요한 뼈대를 결정하고, 하위 클래스에서 객체 생성에 관한 구체적인 내용을 결정하는 패턴.

  - 상위 클래스와 하위 클래스가 분리되어 느슨한 결합을 가진다.
    상위 클래스에서는 인스턴스 생성 방식에 대해 알 필요가 없어 유연성이 커지고,
    객체 생성 로직이 분리되어 있어 유지보수성이 증가한다.

  - 정적 메서드 (static method) : 인스턴스를 생성하지 않고도 호출이 가능한 메서드.
    메모리를 절약할 수 있고, 개별 인스턴스가 아닌 클래스에 속한 함수를 정의할 수 있다.

  - Enum : 상수 집합을 정의할 때 사용되는 타입. 유지보수성이 높아진다. (해당 상수 집합에 관한 로직 수정 시 enum만 수정하면 되므로)
    문자열 비교 기반 로직 구성 시, Enum 또는 Map 등을 사용해 if문을 쓰지 않고 매핑해서 구성할 수 있다.
