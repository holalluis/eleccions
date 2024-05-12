//classe Partit
class Partit {
  constructor(nom,escons,color){
    this.nom=nom||'nom';
    this.escons=escons||0;
    this.color=color||'';
    this.inclos=false;
  }
}

//resultats eleccions
let partits=[
  new Partit("PSC",    41, 'red'),
  new Partit("JUNTS",  36, 'blue'),
  new Partit("ERC",    20, 'gold'),
  new Partit("PP",     15, 'cyan'),
  new Partit("VOX",    11, 'lime'),
  new Partit("COMUNS",  6, 'purple'),
  new Partit("CUP",     4, 'yellow'),
  new Partit("AC",      2, 'darkblue'),
];

//calcula total escons i majoria
let total = partits.map(p=>p.escons).reduce((p,c)=>(p+c));
let majoria = Math.floor(total/2)+1;

//combinacions de partits
let combinacions=[];

//funció recursiva combinar partits agafats de n en n
function crea_combinacio(partits, combinacio, inici, index, n){
  //array intermediari actual
  combinacio=combinacio||[];

  //calcula index final
  let final=partits.length-1;

  //si index arriba a tamany combinacio acaba
  if(index==n){
    let rv=[];//combinació acabada
    combinacio.forEach(partit=>{rv.push(partit)});
    combinacions.push(rv);
    return;
  }

  let i=inici;
  while(i<=final && final-i+1 >= n-index){
    combinacio[index]=partits[i];
    crea_combinacio(partits, combinacio, i+1, index+1, n);
    i++;
  }
}

//mira si la combinació cal (per exemple, una de 3 partits on els altres 2 ja sumin majoria)
function es_redundant(combinacio){
  let escons=0;
  for(let i=0;i<combinacio.length;i++){
    escons+=combinacio[i].escons;
    if(i<combinacio.length-1 && escons>majoria-1){
      return true;
      break;
    }
  }
  return false;
}

//crea combinacions de "n" partits
for(let n=2;n<=partits.length;n++){
  crea_combinacio(partits,false,0,0,n);
}
