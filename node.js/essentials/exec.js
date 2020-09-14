const cp = require("child_process");

// cp.exec("open http://www.google.com");
cp.exec("ls", (err, data, stderr) => {

  if(err){
    throw err;
  }

  console.log(data);
});

cp.exec("lst", (err, data, stderr) => {

  if(err){
    console.log(stderr);
    throw err;
  }
});