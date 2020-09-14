const fs = require("fs");

const readStream = fs.createReadStream("./assets/randomText.txt", "UTF-8");
let fileTxt = "";

console.log("type something...");
//will read files chunk by chunk (limit seems to be about 65535 characters)
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

readStream.once("data", data => {
  console.log(data);
})

readStream.on("end", () => {
  console.log("Finished reading file");
  console.log(`In total I read ${fileTxt.length} characters.`);
});
