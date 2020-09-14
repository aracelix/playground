const fs = require("fs");

fs.renameSync("./assets/colorData.json", "./assets/colors.json");

fs.rename("./assets/notes.md", "./assets/notesnotes.md", err => {
  if(err) {
    throw err;
  }
});

//delete file
setTimeout(() => {
  fs.unlinkSync("./assets/randomText.txt");
}, 4000);