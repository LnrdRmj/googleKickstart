const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let N = readline().split(' ');
    let arr = [];

    let maxx = maxy = -500;
    let minx = miny =  500;

    for (let i = 0; i < N; ++i){

      let [x, y] = readline().split(' ');

      x = +x;
      y = +y;

      if (x < minx) minx = x;
      if (y < miny) miny = y;

      if (x > maxx) maxx = x;
      if (y > maxy) maxy = y;

      arr.push({
        'x' : x,
        'y' : y,
      });

    }

    arr.sort( (a, b) => a.x < b.x ? -1 : 1 );

    console.log(arr);

    // console.log("Maxx: " + maxx);
    // console.log("Maxy: " + maxy);
    // console.log("Minx: " + minx);
    // console.log("Miny: " + miny);

    console.log(`Case #${i}: ${solve(arr, maxx, maxy, minx, miny)}`);
}


function solve(arr, maxx, maxy, minx, miny){

    //console.log(arr);

    let minTotalDist = Number.MAX_SAFE_INTEGER;

    // All possible line position
    for (let x = minx - arr.length + 1; x <= maxx; ++x){
        for (let y = miny; y <= maxy; ++y){

            console.log("In posizione: (" + x + ", " + y + ")");
            let dist = calculateSteps(arr, x, y);
            console.log("Dist: " + dist);

            if (dist < minTotalDist) {

                // console.log();
                // console.log("Nuova distanza minima: " + dist);
                // console.log("In posizione: (" + x + ", " + y + ")");
                // console.log();

                minTotalDist = dist;
            }

        }
    }

    return minTotalDist;

}

function calculateSteps(arr, fx, fy){

    let totalDistance = 0;
    let xpos = 0;

    for (let player of arr){

        let distFromFinish = Math.abs(player.x - (fx + xpos)) + Math.abs(player.y - fy);
        console.log("Distance of: (" + player.x + ", " + player.y + ")");
        console.log("From: (" + (fx + xpos) + ", " + fy + ")");
        console.log("Dist: " + distFromFinish);
        totalDistance += distFromFinish;
        ++xpos;

    }

    return totalDistance;

}
