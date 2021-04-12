const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [A, B] = readline().split(' ');
    console.time('1');
    console.log(`Case #${i}: ${solve(+A, +B)}`);
    console.timeEnd('1');
}

function solve(A, B){

  let cont = 0;
  for (let i = A; i <= B; ++i)
    if (isBoring(i))
      cont++;

  return cont;
}

function isBoring(n){

  n = "" + n;

  for (let i in n)
    if (((+i + 1) % 2 !== 0 && n.charAt(i) % 2 === 0) || ((+i + 1) % 2 === 0 && n.charAt(i) % 2 !== 0))
      return false;

  return true;

}
