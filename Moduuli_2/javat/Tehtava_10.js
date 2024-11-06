canditates_num = prompt('How many canditates?');

let canditates_list = [];

for (i = 0; i < canditates_num; i++) {
  let canditate = {
    name: string = prompt(`Name of the number ${i + 1} canditate?`),
    votes: 0,
  };
  canditates_list.push(canditate);
}
empty = {
  name: 'Empty',
  votes: 0,
};

canditates_list.push(empty);

voters_num = prompt('How many voters?');

for (i = 0; i < voters_num; i++) {
  let vote = prompt('Who would you like to vote?');

  if (vote === '') {
    for (let candidate of canditates_list) {
      if (candidate.name === 'Empty') {
        candidate.votes += 1;
      }
    }
  }
  else {
    for (let candidate of canditates_list) {

      if (candidate.name.toLowerCase() === vote.toLowerCase()) {
        candidate.votes += 1;
        break;
      }

    }
  }
}

canditates_list.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${canditates_list[0].name} with ${canditates_list[0].votes} votes.`)
console.log(`results:`);
for (let candidate of canditates_list) {
  console.log(`${candidate.name} votes: ${candidate.votes}`);
}