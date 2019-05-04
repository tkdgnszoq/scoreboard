//promise를 순차적으로 처리하기
//제대로 처리되지 못한 예

//1)promise 를 만드는 방법 : 생성자함수
new Promise(resolve => {
  // 비동기로직1
  setTimeout(()=>{
    console.log('async setTimeout1');
    resolve('success');
  }, 1000);
}).then(value=>{
  console.log(value);
  //비동기로직2
  setTimeout(()=>{
    console.log('async setTimeout2');
  },1000);

  return 'success async2';
}).then(value => {
  console.log(value);
});
