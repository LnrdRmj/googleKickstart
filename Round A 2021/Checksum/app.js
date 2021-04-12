const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let N = + readline();

    let A = [];

    for (let i = 0; i < N; ++i){
      A[i] = [];
      let line = readline().split(' ');

      for(let j = 0; j < N ; j++)
        A[i][j] = + line[j];

    }

    console.log(A);

    let B = [];

    for (let i = 0; i < N; ++i){
      B[i] = [];
      let line = readline().split(' ');

      for(let j = 0; j < N ; j++)
        B[i][j] = + line[j];

    }

    console.log(B);

    let R = readline().split(' '); console.log(R);
    let C = readline().split(' '); console.log(C);

    console.log(`Case #${i}: ${solve(N, A, B, R, C)}`);

}

function solve(N, A, B, R, C){

  // Solution goes here

  let cont = 0;

  let daFare = true;

  while(daFare){

    let migliorIrrecuperabile = {t : Number.MAX_SAFE_INTEGER};
    daFare = false;

    for (let i = 0; i < N; ++i){
      for (let j = 0; j < N; ++j){

        // Vediamo se c'è un'errore
        if (A[i][j] == -1){

          // Se è l'unico errore della linea / colonna allora siamo sicuri
          // di poterlo recuperare col checksum
          if (unicoErroreColonna(A, i, j) || unicoErroreRiga(A, i, j)){

            // Valore recuperato
            A[i][j] = 2;

          }
          else{

            // Non possiamo usare i checksum quindi ci tocca recuperare
            // il valore che più ci conviene

            daFare = true;

            if (B[i][j] < migliorIrrecuperabile.t)
              migliorIrrecuperabile = {
                r : i,
                c : j,
                t : B[i][j]
              };

          }

        }

      }

    }

    // Se ho bisogno di recuperare qualcosa da B...
    if (migliorIrrecuperabile.r != null){
      // L'ho recuperato quindi cambio il valore da -1 a 2
      A[migliorIrrecuperabile.r][migliorIrrecuperabile.c] = 2;
      cont += migliorIrrecuperabile.t;

    }

  }

  //################################
  // Be careful
  return cont;
  //################################
}

function unicoErroreColonna(A, i, colonna){

  for(let j = 0; j < A.length; j++){

    if (j != i && A[j][colonna] == -1){

      return false;

    }

  }

  return true;

}

function unicoErroreRiga(A, riga, j){

  for(let i = 0; i < A.length; ++i){

    if (i != j && A[riga][i] == -1){

      return false;

    }

  }

  return true;

}
