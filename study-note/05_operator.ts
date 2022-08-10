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
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);
