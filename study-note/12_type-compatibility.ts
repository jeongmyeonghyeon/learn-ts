// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
//   // skill: string;
// }
class Person {
  name: string;
  // skill: string;
}
var developer: Developer;
var person: Person;
// developer = person;
// person = developer;
developer = new Person();

// 함수
var add = function (a: number) {};

var sum = function (a: number, b: number) {};

// add = sum;
sum = add;

// 제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
