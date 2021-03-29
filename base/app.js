const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [R, C] = readline().split(' ');

    console.log(`Case #${i}: ${solve(+R, +C)}`);

}

function solve(R, C){

  // Solution goes here

  //################################
  // Be careful
  return null;
  //################################
}
