// enum Shoes {
//   Nike,
//   Adidas,
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0

enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 이넘 활용 사례

// (1) 일반 문자열
// function askQuestion(answer: string) {
//   if (answer === "yes") {
//     console.log("정답입니다.");
//   }
//   if (answer === "no") {
//     console.log("오답입니다.");
//   }
// }
// askQuestion("예스");
// askQuestion("y");
// askQuestion("Yes");

// (2) enu 활용
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion(Answer.Yes);
// askQuestion("Yes"); // error
// askQuestion("예스");
// askQuestion("y");

// -> dropdown 같은 곳에서 활용...
