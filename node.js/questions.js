const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n ${questions[i]}`);
  process.stdout.write(` > `);
}

ask();

const answers = [];

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if(answers.length < questions.length) {
    ask(answers.length);
  }
  else {
    process.exit();
  }
});