const fs = require('fs');
const input = fs.readFileSync('testCases.txt', 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, Q] = readline().split(' ');

    var graph = new Map();

    let nomi = readline().split(' ');
    //console.log(nomi);
    for(let nome of nomi)
      graph.set(nome, []);

    popoulateGraph();

    console.log(graph);

    let chains = [];

    for (let j = 0; j < Q; ++j){
      let [n1, n2] = readline().split(' ');
      chains.push([nomi[n1 - 1], nomi[n2 - 1]]);
    }

    //console.log(chains);

    console.log(`Case #${i}: ${solve(nomi, chains)}`);
}

function solve(nomi, chains){

  //console.log(graph);
  let res = "";

  for (let chain of chains){
    let startNode = chain[0];
    let endNode = chain[1];
    //console.log("StartNode: " + startNode);
    //console.log("EndNode: " + endNode);
    let dist = BFS(startNode, endNode);
    res += "" + dist + " ";
    //console.log(dist);
  }

  return res;

}

function BFS(startNode, endNode){

  let dist = new Map();
  let visitati = new Set();
  let daVisitare = new Set();

  //let startNode = "LIZZIE";
  daVisitare.add(startNode);
  dist.set(startNode, 0);

  //console.log("Parto da: " + startNode);

  while(daVisitare.size != 0){

    for (let visita of daVisitare){

      //console.log("Sto visitando: " + visita);

      for (let child of graph.get(visita)){

        if (!visitati.has(child)) {
          dist.set(child, dist.get(visita) + 1);
          daVisitare.add(child);

          if (child == endNode)
              return dist.get(child) + 1;

        }

      }

      visitati.add(visita);
      daVisitare.delete(visita);

    }

  }

  return -1;

}

function popoulateGraph(){

  for (let i of graph.keys()){
    for (let j of graph.keys()){
      if (i != j && friends(i, j)){
        graph.get(i).push(j);
      }
    }
  }

}

function friends(nome1, nome2){

  for(let c1 of nome1)
    for (let c2 of nome2)
      if (c1 == c2) return true;

  return false;

}
