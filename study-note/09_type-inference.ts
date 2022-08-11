// 타입 추론 기본 1
var a = 10;

function getB(b = 20) {
  var c = "hi";
  return b + c;
}

20 + "30"; // 2030

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};
