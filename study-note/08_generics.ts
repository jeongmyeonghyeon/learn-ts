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
function logText(text: string) {
  console.log(text);
  return text;
}
function logNumber(number: number) {
  console.log(number);
  return number;
}
logText("a");
logText(10);
logNumber(10);
