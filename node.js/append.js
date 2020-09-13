const fs = require("fs");
const colorData = require("./assets/colorData.json");

colorData.colorList.forEach(color => {
  fs.appendFile("./assets/colors.md", `${color.name} \n`, err => {
    if(err) {
      throw err;
    }

    console.log("Finished appending");
  })
});