class Partit {
  constructor(nom,escons,color){
    this.nom=nom;
    this.escons=escons;
    this.color=color;
    this.inclos=false;
  }
}

//resultats abril 2019
let partits=[
  new Partit("PSOE",  123, 'red'),
  new Partit("PP",     66, 'blue'),
  new Partit("Cs",     57, 'orange'),
  new Partit("PODEM",  42, 'purple'),
  new Partit("VOX",    24, 'green'),
  new Partit("ERC",    15, 'yellow'),
  new Partit("JxCAT",   7, 'red'),
  new Partit("PNB",     6, '#af0'),
  new Partit("EHB",     4, 'green'),
  new Partit("CCPNC",   2, 'yellow'),
  new Partit("NA",      2, 'red'),
  new Partit("COMP",    1, 'orange'),
  new Partit("PRC",     1, 'lightgreen'),
];

let combinacions=[];

//funció recursiva combinar partits agafats de n en n
function crea_combinacio(partits, combinacio, inici, index, n){
  //array intermediari actual
  combinacio=combinacio||[];

  //calcula index final
  let final=partits.length-1;

  //si index arriba a tamany combinacio acaba
  if(index==n){
    let rv=[];//valor de retorn
    combinacio.forEach(partit=>{rv.push(partit)});
    combinacions.push(rv);
    return;
  }

  let i=inici;
  while(i<=final && final-i+1 >= n-index){
    combinacio[index] = partits[i];
    crea_combinacio(partits, combinacio, i+1, index+1, n);
    i++;
  }
}

//omple array combinacions de n en n
for(let n=2; n<=partits.length; n++){
  crea_combinacio(partits,false,0,0,n);
}

//console.log(combinacions);
