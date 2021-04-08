const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N] = readline().split(' ');

    let matr = [];

    for (let i = 0; i < N; ++i){
        matr[i] = [];
        let line = readline().split(' ');

        for (let j = 0; j < N; ++j){

            matr[i][j] = +line[j];

        }

    }

    console.log(`Case #${i}: ${solve(matr)}`);

}

function solve(matr){

    let max = 0;

    for (let i = 0; i < matr.length; i++){

        max = Math.max(max, coinsInDiagonal(0, i, matr));
        max = Math.max(max, coinsInDiagonal(i, 0, matr));

    }

    return max;

}

function coinsInDiagonal(i, j, matr){

    let coins = 0;

    while(i < matr.length && j < matr.length){

        coins += matr[i][j];
        ++i;
        ++j;

    }

    return coins;

}
