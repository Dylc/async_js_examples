console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    Promise.resolve().then(function() {
      Promise.resolve().then(function() {
        console.log('promise4');
      })
      console.log('promise3');
    })
    console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');


