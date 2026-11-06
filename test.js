const{V}=require('./algos.js');const t=(k,i,e)=>{try{const r=V[k](i);const ok=String(r.result)===String(e);console.log(ok?'ok  ':'FAIL',k,'frames',r.frames.length,ok?'':`got ${r.result} want ${e}`, r.frames.every(f=>f.v!==undefined&&f.n)?'':'BADFRAME')}catch(x){console.log('ERR ',k,x.stack.split('\n').slice(0,2).join(' '))}};
const G='A-B 7,A-D 5,B-C 8,B-D 9,B-E 7,C-E 5,D-E 15,D-F 6,E-F 8,E-G 9,F-G 11',BFS='S-A,S-B,A-C,A-D,B-D,B-E,C-F,D-F,E-F,F-G',AP='1-2,1-3,2-4,3-4,4-5,5-6,5-7,6-7,7-8',BF='s>t 6,s>y 7,t>x 5,t>y 8,t>z -4,x>t -2,y>x -3,y>z 9,z>x 7,z>s 2';
const srt=s=>s.split(' ').map(Number).sort((a,b)=>a-b).join(' ');
t('binary',{a:'-15 -6 0 7 9 23 54 82 101 112 125 131 142 151',x:151},14);t('binary',{a:'-15 -6 0 7 9',x:-14},0);
t('merge',{a:'38 27 43 3 9 82 10'},'3 9 10 27 38 43 82');t('quick',{a:'35 25 45 5 10 22 12 15'},'5 10 12 15 22 25 35 45');t('quick',{a:'3 3 3 1 2 2'},'1 2 2 3 3 3');t('selection',{a:'10 5 6 3 2 1'},'1 2 3 5 6 10');
t('strassen',{a:'1 2 3 4',b:'5 6 7 8'},'19 22 43 50');t('traverse',{a:'A B C D E - F'},'ABDECF/DBEACF');
t('unionfind',{n:8,ops:'u 1 2,u 3 4,u 5 6,u 7 8,u 1 3,u 5 7,u 1 5,f 8'},'-8 1 1 3 1 5 1 1');
t('bfs',{g:BFS,s:'S'},'S A B C D E F G');t('dfs',{g:BFS,s:'S'},'S A C F D B E G');t('art',{g:AP},'4,5,7');t('matrixrep',{g:'A-B,B-C'},4);
t('job',{p:'3 5 20 18 1 6 30',d:'1 3 4 3 2 1 2'},74);t('fracks',{p:'30 20 100 90 160',w:'5 10 20 30 40',m:60},270);t('kruskal',{g:G},39);t('prim',{g:G,s:'A'},39);
t('dijkstra',{g:'A-B 1,B-C 2,A-C 5',s:'A'},'0 1 3');t('bellman',{g:BF,s:'s'},'0 2 4 7 -2');t('mcm',{p:'30 35 15 5 10 20 25'},'15125 ((A1 (A2 A3)) ((A4 A5) A6))');t('lcs',{x:'AGGTAB',y:'GXTXAYB'},'GTAB');t('ks01',{w:'1 3 4 5',p:'1 4 5 7',m:7},9);
t('floyd',{m:'0 4 inf 5;inf 0 1 inf;2 inf 0 3;inf inf 1 0'},'0 4 5 5/3 0 1 4/2 6 0 3/3 7 1 0');t('tspdp',{m:'0 14 10 19;14 0 3 7;10 3 0 6;19 7 6 0'},37);
t('queens',{n:4,max:1},'2 4 1 3');t('subsets',{w:'7 11 13 24',m:31},'7+11+13 7+24');t('colour',{g:'1-2,2-3,3-4,4-1,1-3',m:3},6);t('colour',{g:'1-2,2-3,3-4,4-1,1-3',m:2},0);t('hamilton',{g:'1-2,1-3,2-4,3-4,3-5,4-6,5-6,2-5'},'1-2-4-6-5-3-1 1-2-5-6-4-3-1 1-3-4-6-5-2-1 1-3-5-6-4-2-1');
const M='inf 14 9 12 7;11 inf 8 6 10;5 13 inf 9 4;10 7 15 inf 6;8 12 5 11 inf';t('bb',{m:M,mode:'LC'},'36 1-2-4-5-3-1');t('bb',{m:M,mode:'FIFO'},'36 1-2-4-5-3-1');
const{TOPICS,VIZ,CONFUSE,CHOOSE}=require('./topics.js');const ids=new Set(TOPICS.map(x=>x.id));
for(const[k,c]of Object.entries(VIZ)){if(!ids.has(k))console.log('FAIL viz no topic',k);const inp=Object.fromEntries(c.f.map(x=>[x[0],x[2]]));try{const r=V[c.k||k](inp);for(const[,o]of c.pre||[])V[c.k||k]({...inp,...o});if(!r.frames.length)console.log('FAIL empty',k)}catch(e){console.log('ERR default',k,e.message)}}
for(const[,,l]of CONFUSE)l.forEach(i=>ids.has(i)||console.log('FAIL link',i));CHOOSE.forEach(c=>ids.has(c[2])||console.log('FAIL choose',c[2]));
const b=V.dijkstra({g:'A-B 7,A-D 5,B-C 8,B-D 9,B-E 7,C-E 5,D-E 15,D-F 6,E-F 8,E-G 9,F-G 11',s:'A'});console.log('dijkstra',b.result,'| topics',TOPICS.length,'| players',Object.keys(VIZ).length);
