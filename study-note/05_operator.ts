// function logMessage(value: any) {
//   console.log(value);
//   // value. (추론하지 못함. 객체 타입에 따른 api를 지원하지 못함)
// }
// logMessage("hello");
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  console.log(value);
  if (typeof value === "number") {
    // Type Guard
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: string;
}
function askSomeone(someone: Developer | Person) {
  someone.name; // 공통된 특성에만 접근할 수 있음.
  someone.skill; // 만약 접근하고 싶으면 위에 사용했떤 Type Guard 를 사용하면 됨.
  someone.age;
}
