const fs = require("fs");

//blocking
const text = fs.readFileSync("./assets/randomText.txt", "utf-8");

//non-blocking, async
fs.readFile("./assets/randomText.txt", "utf-8", (err, tet) => {
  if(err) {
    throw err;
  }
  
  console.log("file contents read");
  console.log(`async: ${text}`);
});

console.log(text);

