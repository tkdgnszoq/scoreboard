//async 키워드가 펑션 앞에 붙으면 Promise가 된다.
//async 안에는 반드시 await가 와야한다.
//await 뒤에는 Promise가 온다.
//await는 동기식으로 기다렸다가 처리한다.

console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  console.log(b);
  return x + a + b;
}

console.log(add1(10).then(value=>console.log(value)));

console.log('end');