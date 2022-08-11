// function fetchItems() {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// let result = fetchItems();
// console.log(result);

// Promise 자체가 제네릭으로 타입을 받게끔 되어있음.
function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
