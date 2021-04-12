const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, K] = readline().split(' ');

    let [string] = readline().split(' ');

    //console.log("K: " + K);
    //console.log("string: " + string);

    console.log(`Case #${i}: ${solve(string, +K, +N)}`);

}

function solve(string, K, N){

    let good = goodness(string, N);
    //console.log(good);

    return Math.abs(K - good);

}

function goodness(string, N){

    let goodness = 0;

    for (let i = 0; i < Math.floor(N / 2); ++i){
        //console.log("Posizioni: " + i + " - " + (N - i - 1));
        //console.log("Confronto: " + string.charAt(i) + " - " + string.charAt(string.length - i - 1));
        if(string.charAt(i) != string.charAt(N - i - 1)){
            goodness++;
        }
    }

    return goodness;

}
