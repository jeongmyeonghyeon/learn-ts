function Hero(name, age) {
  this.name = name;
  this.age = age;
}
var hulk = new Hero("헐크", 47);

// ES2015 (ES6) - 이제는 햇수로 8년째...
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다.
console.log(seho);
