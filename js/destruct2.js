var o = {p: 42, q: true};
var {p, q, m = 1} = o;

console.log(p); // 42
console.log(q); // true
console.log(m); // undefined, es6 default 값 있으면 그 값 찍힘 ex) m = 1