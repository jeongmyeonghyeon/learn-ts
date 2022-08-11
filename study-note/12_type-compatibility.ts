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
