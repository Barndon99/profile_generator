const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable`, (answer) => {
    rl.question(`What activities do you enjoy?`, (answer1) => {
      rl.question(`What's your favourite color?`, (answer2) => {
        rl.question(`Best restaurant in town?`, (answer3) => {
          rl.question(`Favourite spot in the city?`, (answer4) => {
            console.log(`Hey guys, my name is ${answer}! There's nobody I can't crush in a round of ${answer1}. I'll be the guy in the ${answer2} shirt. Otherwise you can find me at my favourite spot ${answer3}, or at my favourite restaurant ${answer4}.`);
            rl.close();
          })
        })
      })
    })
});

