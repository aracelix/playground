const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

//will write this to the question app to answer all the questions
questionApp.stdin.write("Araceli \n");
questionApp.stdin.write("Somewhere \n");
questionApp.stdin.write("Whatever I want\n");

questionApp.stdout.on("data", data => {
  console.log(`From the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});