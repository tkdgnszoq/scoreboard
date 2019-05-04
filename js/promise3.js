//promise를 순차적으로 처리하기: 리턴시에 Promise를 리턴

//1)promise 를 만드는 방법 : 생성자함수
new Promise(resolve => {
  // 비동기로직1
  setTimeout(()=>{
    console.log('async setTimeout1');
    resolve('success');
  }, 1000);
}).then(value=>{
  //비동기 로직을 promise로 감싸서 리턴해야 한다.

  return new Promise(resolve =>{
    console.log(value);
    //비동기로직2
    setTimeout(()=>{
      console.log('async setTimeout2');
      resolve('async2 resolved');
    },1000);
  });
}).then(value => {
  console.log(value);
});
