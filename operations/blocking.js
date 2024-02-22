const fs = require("fs");

function moreWork() {
    console.log('more work');
}

try {
    const data = fs.readFileSync("data/test.txt"); // blocks here until file is read
    // log the data first and then go to the next line
    console.log(data);
    moreWork();
}
catch(err) {
    console.log(err.message);
}

