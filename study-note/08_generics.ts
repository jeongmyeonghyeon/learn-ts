// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); // 진위값 true

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("하이");
