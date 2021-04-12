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

    cont = 0;

    console.log(`Case #${i}: ${solve(matr)}`);

}

function solve(matr){

  // Solution goes here
  //console.log(matr);

  // for (let i = 0; i < matr.length; ++i)
  //     for (let j = 0; j < matr[0].length; ++j)
  //         console.log(matr[i][j]);

    for (let y = 0; y < matr.length; ++y)
        for (let x = 0; x < matr[0].length; ++x){
            console.log("Sto analizzando: " + y + " - " + x + " [" + matr[y][x] + "]");
            findL(matr, x, y,  0, -1); //sopra
            findL(matr, x, y,  1,  0); //sinistra
            findL(matr, x, y,  0,  1); //sotto
            findL(matr, x, y, -1,  0); //destra
    }

  //################################
  // Be careful
  return cont;
  //################################
}

function findL(matr, x, y, dirX, dirY){

    let length = 0;

    while(y < matr.length && y >= 0 && x < matr[y].length && x >= 0 && matr[y][x] == 1) {
        y += dirY;
        x += dirX;
        ++length;

        if (dirY != 0 && length >= 4){
            findBase(matr, x - dirX, y - dirY, -1, 0, length);
            findBase(matr, x - dirX, y - dirY,  1, 0, length);
        }
        else if (dirY == 0 && length >= 4){
            findBase(matr, x - dirX, y - dirY, 0, -1, length);
            findBase(matr, x - dirX, y - dirY, 0,  1, length);
        }

    }

    //console.log("Length: " + length);

}

function findBase(matr, x, y, dirX, dirY, length){

    //console.log("x: " + x + " - y: " + y);

    let bLength = 0;

    while(y < matr.length && y >= 0 && x < matr[y].length && x >= 0 && matr[y][x] && matr[y][x] == 1) {
        y += dirY;
        x += dirX;
        ++bLength;

        //console.log("bLength: " + bLength);

        if (length == 2 * bLength) {
            console.log("Arrivato a qualcosa");
            ++cont;
            return true;
        }

    }

}

function print(msg){
    process.stdout.write(msg);
}
