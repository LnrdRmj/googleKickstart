// Boring numbers
// Passa solo il primo test di google kickstart
// Bisognerebbe usare "digitDP" per risolverlo

const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');
var cont = 0;
var saltati = 0;

var toTest = process.argv.slice(2);
//console.log("IL numero " + toTest + " ha " + G(toTest) + " numeri noiosi");

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
var A, B;
for(let i = 1; i <= T; i++){
    [A, B] = readline().split(' ');
    // Timer per vedere quanto ci mette per ogni caso
    //console.time('1');
    console.log(`Case #${i}: ${solve(+A, +B)}`);
    //console.timeEnd('1');
}

function solve(A, B){

  saltati = 0;
  cont = 0;
  // Funzione che calcola i numeri noiosi da 0 a A - 1
  G(A, B);

  return cont;

}

function G(A, B){

  let app = "" + A;
  let res = recurse(0, "" + A);

  A = ("" + A).slice(0, res + 1);

  for(let i = 0; i < app.length - res - 1; ++i)
      A = A.concat("0");

  if(res == ("" + A).length)
    ++A;
  // Altrimenti devo saltare i numeri noiosi successivi che hanno lo stesso prefisso
  else
    // Salto i numeri con lo stesso prefisso con questa formula
    A = +A + Math.pow(10, ("" + A).length - res - 1);

  for (i = A; i <= B; ){

    //i += Math.pow(10, i.length - recurse(0, "" + i));

    // Devo trovare quante sono nella giusta posizione
    res = recurse(0, "" + i);
    // console.log("-----------------------");
    //
    // console.log("Il numero: " + i + " ha " + res + " cifre esatte");
    // console.log(("" + i).length - res);

    // Se tutte le cifre sono nella giusta posizione allora ho trovato un numero noioso
    if(res == ("" + i).length){
      // console.log("Numero noioso");
      // console.log("Salto al prossimo numero");
      ++i;
    }
    // Altrimenti devo saltare i numeri noiosi successivi che hanno lo stesso prefisso
    else{
      // console.log("Numero non noioso");
      // console.log("Dovrei saltare i prossimi: " + Math.pow(10, ("" + i).length - res - 1) + " numeri");
      //console.log("Salto da " + i + " a " + (i + Math.pow(10, ("" + i).length - res - 1)));

      // Salto i numeri con lo stesso prefisso con questa formula
      i += Math.pow(10, ("" + i).length - res - 1);
      //saltati += Math.pow(10, ("" + i).length - res - 1);
    }
  }

  // console.log("###################");
  // console.log("Ci sono " + cont + " numeri noiosi");
  // console.log("###################");

}

function recurse(ind, number){

  if (ind == number.length){
    cont++;
    return 0;
  }

  if ((ind + 1) % 2 == +number[ind] % 2)
    return recurse(ind + 1, number) + 1;
  else
    return 0;

}
