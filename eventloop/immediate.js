const fs = require('fs');

fs.readFile('./data/test.txt', function(err, data) {
  const startCallback = Date.now();
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  if (err) console.log('Error');
  else console.log(data);

  const timeoutScheduled = Date.now();
  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
  }, 5);// go to timer

  setImmediate(() => {
    console.log('I was scheduled to run immediately');
  });// go to checker
});

// go to event, read io go to poll phrase, 

// once the io read complete execute the callback
// the time and imde go to poll and then was distribute into check and timer
// the poll execute the pending but nothing is the pending, go to check or check go to pending

// move setimm in the begining or at the end, it happend in the event loop and the file io operation takes time

// key point: fileio or any io, typically there are some callback (it happends when the io is down) dependencies
// key point: the io operation v.s. io poll (when operation is down it present the results)
