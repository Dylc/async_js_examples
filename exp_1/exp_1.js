const createPromise = ind => {
  let timeToWait = 1000;
  switch (ind) {
    case 1:
      timeToWait = 3000; 
      break;
    case 3:
      timeToWait = 5000;
      break;
    case 5:
      timeToWait = 3000;
      break;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ind);
    }, timeToWait);
  });
};

(async function() {
  for (var i = 1; i <= 5; i++) {
      
    console.log(`Starting for ${i}`);

    let pr = createPromise(i);

    pr.then(result => console.log("After then in promise: ", result));
  }

  console.log(" === Done ===");
})();

