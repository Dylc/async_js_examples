const createCallbackFoo = ind => {
    let timeToWait = 0; 
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
  
      setTimeout(() => {
          console.log(ind)
      }, timeToWait);
  };
  
  (async function() {
    for (var i = 1; i <= 5; i++) {
        
      console.log(`Starting for ${i}`);
  
      let pr = createCallbackFoo(i);
  
    }
  
    console.log(" === Done ===");
  })();
  
  