const fs = require('fs');

function someAsyncOperation(callback) {
  fs.readFile('./data/test.txt', callback); //io operation need to finish first and then send it to the pending
}


const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100); // schedule in the event loop thread timer

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('someAsyncOperation');
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }// go to pending 
});

// timer after io callback since the file is small read<10ms

//io operation need to finish first and then send it to the pending
// if there is nothing is the pending callback, the timer queue (if timeout) can go to pending callback
// change to 0, timer call back put it to pending and io read is not 

//keypoint: io operation happened in work thread!!! after it finished it go to the pending with priority