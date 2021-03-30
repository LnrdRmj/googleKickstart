const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
let matr = [];
let init = []

for(let i = 1; i <= T; i++){
    let [R, C] = readline().split(' ');

    for (let y = 0; y < +R; ++y){
        matr[y] = [];
        init[y] = [];

        line = readline().split(' ');

        for (let x = 0; x < +C; ++x){
            if (+line[x] != 0)
                init[y][x] = true;
            else
                init[y][x] = false;

            matr[y][x] = +line[x];
        }
    }

    console.log(`Case #${i}: ${solve(R, C)}`);

}

function solve(R, C){

    // Solution goes here

    let cont = 0;

    for (let y = 0; y < R; ++y){
        for (let x = 0; x < C; ++x){

            if(init[y][x]) continue;

            if (y - 1 >= 0){
                cont += calculate(y, x, y - 1, x);
            }

            if (y + 1 < matr.length){
                cont += calculate(y, x, y + 1, x);
            }

            if (x - 1 >= 0){
                cont += calculate(y, x, y, x - 1);
            }

            if (x + 1 < matr[y].length){
                cont += calculate(y, x, y, x + 1);
            }

            //init[y][x] = true;

        }
    }

    console.log(matr);

    return cont;

}

function calculate(y, x, y2, x2){

    let value = matr[y2][x2];

    let diff = Math.abs(matr[y][x] - matr[y2][x2]);

    if (diff >= 2){

        //console.log("Potrebbe essere " + (diff - 1));

        if (stillGood(x, y, matr[y][x] + diff - 1)){

            return matr[y][x] += diff - 1;

            //if(init[y2][x2]) init[y][x] = true;

        }

    }

    console.log(matr);

    return 0;

}

function stillGood(x, y, diff){

    if (y - 1 >= 0 && Math.abs(matr[y-1][x] - diff) >=2){
        return false;
    }

    if (y + 1 < matr.length && Math.abs(matr[y+1][x] - diff) >=2){
        return false;
    }

    if (x - 1 >= 0 && Math.abs(matr[y][x-1] - diff) >=2){
        return false;
    }

    if (x + 1 < matr[y].length && Math.abs(matr[y][x+1] - diff) >=2){
        return false;
    }

    return true;

}
