interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
// 프론트엔드 프레임워크, 라이브러리에서 API통신을 할때 아주 유용~
function getUser(user: User) {
  console.log(user);
}
const hulk = {
  name: "헐크",
  age: 46,
};
getUser(hulk);

// 함수의 스펙(구조)에 인터페이스를 활용
// 라이브러리를 만든다고 했을 때 유용할 수 있을 것...!
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // foo: /abc/,
  // cssFile: "css",
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj["cssFile"] = "a";

Object.keys(obj).forEach(function (value) {});
