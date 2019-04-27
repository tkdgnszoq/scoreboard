let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
//let copyBook = book;


// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기 //새로운 메모리 주소 할당
// let copyBook = Object.assign({}, book, {a:1});
// copyBook.price = 20000;
// console.log(book);
// console.log(copyBook);

// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
let copyBook2 = {...book, ...{a:1}, ...{a:123}}; //새로운 메모리 시작주소 할당
//console.log('copyBook2', copyBook2);

copyBook2.price = 20000;
console.log(book);
console.log(copyBook2);
