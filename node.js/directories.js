const fs = require("fs");

// fs.renameSync("./randomdir", "./random");

//blocking
fs.readdirSync("./random").forEach(fileName => {
  fs.unlinkSync(`./storage/${fileName}`);
});

//non-blocking
fs.rmdir("./random", err => {
  if(err) {
    throw err;
  }
  
  console.log("random directory removed");
});
