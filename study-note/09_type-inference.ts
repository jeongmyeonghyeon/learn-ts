// 타입 추론 기본 1
var a = 10;

function getB(b = 20) {
  var c = "hi";
  return b + c;
}

20 + "30"; // 2030

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "def",
  value: "ghi",
  tag: "jkl",
};

// Best Common Type
const arr = [1, "a", true];
