const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
let cont = 0;
for(let i = 1; i <= T; i++){
    let [R, C] = readline().split(' ');

    let matr = [];

    for (let j = 0; j < R; ++j){
        let line = readline().split(' ');
        matr[j] = [];
        for (let z = 0; z < C; ++z)
            matr[j][z] = +line[z];
    }

    console.log(`Case #${i}: ${solve(matr)}`);

}

function solve(matr){

  // Solution goes here
  console.log(matr);

  for (let i = 0; i < matr.length; ++i)
  for (let j = 0; j < matr[0].length; ++j){
        findL(matr, 0, 0,  0, -1);
        findL(matr, 0, 0,  1,  0);
        findL(matr, 0, 0,  0,  1);
        findL(matr, 0, 0, -1,  0);
    }

  //################################
  // Be careful
  return cont;
  //################################
}

function findL(matr, x, y, dirX, dirY){

    if (matr[y + dirY] == null || matr[y + dirY][x + dirX] == null) return;

    let length = 0;

    while(y + dirY < matr.length && x + dirX < matr[y + dirY].length && matr[y + dirY][x + dirX] && matr[y + dirY][x + dirX] == 1) {
        y += dirY;
        x += dirX;
        ++length;
    }

    if (dirY != 0){
        findBase(x, y, -1, 0, length);
        findBase(x, y,  1, 0, length);
    }
    else {
        findBase(x, y,  0, -1, length);
        findBase(x, y,  0,  1, length);
    }

}

function findBase(matr, x, y, dirX, dirY, lentgh){

    if (matr[y + dirY] == null || matr[y + dirY][x + dirX] == null) return;

    let bLength;

    while(y + dirY < matr.length && x + dirX < matr[y + dirY].length && matr[y + dirY][x + dirX] && matr[y + dirY][x + dirX] == 1) {
        y += dirY;
        x += dirX;
        ++bLength;
    }

    console.log("Arrivato a qualcosa");
    if (length == 2 * bLength) ++cont;

}

function print(msg){
    process.stdout.write(msg);
}
