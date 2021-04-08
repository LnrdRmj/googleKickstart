const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){

    console.log(`Case #${i}: ${solve(readline())}`);

}

function solve(R){

    let luckyFragments = 0;
    let kickCounter = 0;

    for (let i = 0; i < R.length; ++i){

        if (R.substring(i, i + 4) == "KICK"){

            ++kickCounter;

        }
        else if (R.substring(i, i + 5) == "START"){

            luckyFragments += kickCounter;

        }

    }

    return luckyFragments;

}
