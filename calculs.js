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
  new Partit("PSOE",  120, 'red'),
  new Partit("PP",     88, 'blue'),
  new Partit("VOX",    52, 'lime'),
  new Partit("PODEM",  35, 'purple'),
  new Partit("ERC",    13, 'gold'),
  new Partit("Cs",     10, 'orange'),
  new Partit("JxCAT",   8, 'pink'),
  new Partit("PNB",     7, 'green'),
  new Partit("EHB",     5, 'rgb(146,170,58)'),
  new Partit("MP",      3, 'cyan'),
  new Partit("CUP",     2, 'yellow'),
  new Partit("CCa",     2, ''),
  new Partit("NA+",     2, ''),
  new Partit("BNG",     1, ''),
  new Partit("PRC",     1, ''),
  new Partit("TE",      1, ''),
];

//calcula total escons i majoria
let total = partits.map(p=>p.escons).reduce((p,c)=>(p+c));
let majoria = total/2+1;

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
