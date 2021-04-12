const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, X] = readline().split(' ');
    let line = readline().split(' ');
    let queue = [];

    for(let i = 0; i < N; ++i){

        queue[i] = {
            value : Math.floor((+line[i] - 1) / X),
            pos : i + 1
        };

    }

    console.log(`Case #${i}: ${prettyPrint(queue.sort( (a, b) => { return a.value - b.value } ))}`);

}

function prettyPrint(arr){

    let string = "";

    for (let i in arr){
        string += arr[i].pos;

        if (i != arr.length - 1)
        string += " ";

    }

    return string;

}
