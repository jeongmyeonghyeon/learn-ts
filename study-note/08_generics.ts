// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); // 진위값 true

// 제네릭 기본 문법
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>("하이");

// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
// function logText(text: string) {
//   console.log(text);
//   return text;
// }
// function logNumber(number: number) {
//   console.log(number);
//   return number;
// }
// logText("a");
// logText(10);
// logNumber(10);

// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점
// 파라미터는 해결됐지만, 반환값에 대한 해결이 이루어지지 않았음.
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// const a = logText("a");
// logText(10);

// 제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>("abc");
str.split("");
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// 기존 인터페이스 선언 방식
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: '10', selected: false };

// 인터페이스에 제네릭 선언
// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }
// const obj: Dropdown<number> = { value: "10", selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   // 타입 힌트를 줄 수 있다.
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(["hi", "ts"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength({ length: 10 });
logTextLength({ lengh: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("name");
