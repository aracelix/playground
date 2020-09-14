const fs = require("fs");

//this is blocking
const files = fs.readdirSync("./");

//this is asynchronous, non-blocking
const asyncFiles = fs.readdir("./", (err, files) => {
  if(err) {
    throw err;
  }

  console.log(`async files: ${files}`);
});

console.log(files);
console.log("complete");
