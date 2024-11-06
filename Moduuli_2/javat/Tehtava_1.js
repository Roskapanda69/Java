const luvut = [];

do {
  luvut.push(prompt('Give a number: '));

} while (luvut.length <= 4);

for (i = 4; i >= 0; i--) {
  luvut.push(luvut[i]);
  if (i === 0) {
    luvut.splice(0, 5);
  }
}

console.log(luvut);