const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input the number of families: ', (n) => {
  rl.question('Input the number of members in the family (separated by a space): ', (input) => {
    const members = input.split(' ').map(Number);
    if (members.length !== parseInt(n)) {
      console.log('Input must be equal with count of family');
      rl.close();
      return;
    }

    let busesNeeded = 0;
    const sortedMembers = members.sort((a, b) => a - b);

    for (let i = 0; i < sortedMembers.length; i += 2) {
      busesNeeded += Math.ceil(sortedMembers[i] / 4);
      if (i + 1 < sortedMembers.length) {
        busesNeeded += Math.ceil(sortedMembers[i + 1] / 4);
      }
    }

    console.log('Minimum bus required is:', busesNeeded);
    rl.close();
  });
});
