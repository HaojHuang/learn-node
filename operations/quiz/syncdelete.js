const fs = require("fs");
// fs.readFileSync("./operations/data.txt", (err, data) => {
//   if (err) console.log(err.message);
//   else console.log(data);
// });
// fs.unlinkSync("./operations/data.txt");		// delete the file
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {console.log(data);
      fs.unlinkSync("./operations/data.txt");		// delete the file 
    }
});

// add it to the call back function

