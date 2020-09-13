//Look at ask.js/question-2.js for a more streamlined way to do this using readline
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

process.on('exit', () => {
  const [name, activity, lang] = answers;

  console.log(`
    Thank you for your answers.
    Go ${activity} ${name}. You can write ${lang} code later!!!
  `)
});