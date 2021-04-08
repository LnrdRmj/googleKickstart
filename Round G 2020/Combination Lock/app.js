const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [W, N] = readline().split(' ');

    let wheels = [];
    let line = readline().split(' ');

    for (let i = 0; i < W; ++i)
        wheels[i] = +line[i];

    console.log(wheels);

    console.log(`Case #${i}: ${solve(N, wheels)}`);

}

function solve(N, wheels){

    let minSteps =  Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < N; ++i){

        for (let wheel of wheels){



        }

    }

    return null;

}
