const fs = require('fs');
const input = fs.readFileSync('retype/testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, K, S] = readline().split(' ');
    console.log(N + " " +  K + " " + S);
    console.log(`Case #${i}: ${solve(+N, +K, +S)}`);
}

function solve(N, K, S){

    let appr1 = restart(N, K);
    let appr2 = goBack(N, K, S);
    console.log('Approccio 1: ' + appr1);
    console.log('Approccio 2: ' + appr2);
    return appr1 < appr2 ? appr1 : appr2;

}

function restart(N, K){

    // Time already spent
    let tot = K - 1;
    // Restart Cost
    tot++;
    // Time taken to beat the wgole game
    tot += N;

    return tot;

}

function goBack(N, K, S){

    // Time already spent
    let tot = K - 1;
    // Time to go back to S level from K level
    tot += K - S;
    // Time to beat all levels from S to N
    // (including S)
    tot += N - S + 1;

    return tot;

}
