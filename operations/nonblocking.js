const fs = require("fs");

function moreWork() {
    console.log('more work');
}

fs.readFile("data/test.txt", (err, data) => {// asyn way
  if (err) console.log(err.message);
  else console.log(data);
});
moreWork();
