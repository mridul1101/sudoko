const easy = [
    "-6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "-685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "---9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3---",
    "-619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "--1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "-712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];
var result=easy[1];
var difficulty = easy[0];
function validate() {
 
  validaterows();
  validatecols();
  validatecheck();

  for(var i=1;i<82;i++){
           if(document.getElementById(`a${i}`).value>0&&document.getElementById(`a${i}`).value <10)
              {
                document.querySelector(`#a${i}`).style.color = "rgb(14, 7, 119)";
              }
                else{
                  if(!document.getElementById(`a${i}`).value=="")
                  document.querySelector(`#a${i}`).style.color = "red";
                  else
                  document.querySelector(`#a${i}`).style.color = "rgb(14, 7, 119)";

            }
          }
        }   
function validaterow(rownumber){
const values=[];
for(let i=(rownumber-1)*9+1;i<=rownumber*9;i++){
  values.push(document.getElementById(`a${i}`).value);
} 
const filtered=values.filter(v=>v!=="")
filtered.sort()
if(filtered.length<2)
nocolorrow(rownumber);
for(var i=0;i<filtered.length-1;i++){
if(filtered[i]==filtered[i+1]){ 
  colorrow(rownumber,filtered[i]);break;
}else{ 
  nocolorrow(rownumber);
}}
}
function validaterows(){
  for(var i=1;i<=9;i++)
  validaterow(i)
}
function validatecol(colnumber){
const values=[]
for(let i=colnumber;i<=9*8+colnumber;i=i+9){
  values.push(document.getElementById(`a${i}`).value);
} 

const filtc=values.filter(v=>v!=="")
filtc.sort()
if(filtc.length<2)
nocolorcol(colnumber);
for(var i=0;i<filtc.length-1;i++){
if(filtc[i]==filtc[i+1]){ 
  colorcol(colnumber,filtc[i]);
  break;
}else{ 
  nocolorcol(colnumber);
}}

}

function colorcol(colnumber,number){
  for(let i=colnumber;i<9*9+colnumber;i=i+9){
    if(document.getElementById(`a${i}`).value=="")
    document.getElementById(`a${i}`).classList.remove("bordercol");
    if(document.getElementById(`a${i}`).value==number){
      document.getElementById(`a${i}`).classList.add("bordercol");
 
  }
   
  }
}
function nocolorcol(colnumber){
  for(let i=colnumber;i<=81;i++){
   if(i%9==colnumber)
    document.getElementById(`a${i}`).classList.remove("bordercol");
  }
}

function nocolorrow(rn){
  for(let i=(rn-1)*9+1;i<=rn*9;i++){
    
    document.getElementById(`a${i}`).classList.remove("changerow");
} 
}
function validatecols(){
  for(var i=1;i<=9;i++)
  validatecol(i)
}
function colorrow(rn,number){
  for(let i=(rn-1)*9+1;i<=rn*9;i++){
    if(document.getElementById(`a${i}`).value=="")
    document.getElementById(`a${i}`).classList.remove("changerow");
    if(document.getElementById(`a${i}`).value==number)
    document.getElementById(`a${i}`).classList.add("changerow");
} 
}
function colorrowbox(rn){
  for(let i=(rn-1)*9+1;i<=rn*9;i++){
    document.getElementById(`a${i}`).classList.add("red");
} 
}
function colorcolbox(colnumber){
  for(let i=colnumber;i<9*9+colnumber;i=i+9){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
function validaterowcheck(rownumber){
const values=[];
for(let i=(rownumber-1)*9+1;i<=rownumber*9;i++){
  values.push(document.getElementById(`a${i}`).value);
} 
const filtered=values.filter(v=>v!=="")
filtered.sort(); var a=[];

for(var i=0;i<filtered.length-1;i++){
if(filtered[i]==filtered[i+1]){ 
a.push(filtered[i]);  }
}
}
function validatecolcheck(colnumber){
const values=[]
for(let i=colnumber;i<9*9+colnumber;i=i+9){
  values.push(document.getElementById(`a${i}`).value);
} 

const filtc=values.filter(v=>v!=="")
var a=[];
filtc.sort()

for(var i=0;i<filtc.length-1;i++){
if(filtc[i]==filtc[i+1]){ 
a.push(filtered[i]);
}

}return a;
}
function validatecheck(){
  var box1=[];
  var box2=[];
  var box3=[];
  var box4=[];
  var box5=[];
  var box6=[];
  var box7=[];
  var box8=[];
  var box9=[];

  for(var id=1;id<83;id++){

  if(id==1||id==2||id==3||id==10||id==11||id==12||id==19||id==20||id==21){
  box1.push(document.getElementById(`a${id}`).value);
}
if(id==4||id==5||id==6||id==13||id==14||id==15||id==22||id==23||id==24){
  box2.push(document.getElementById(`a${id}`).value);

}
if(id==7||id==8||id==9||id==16||id==17||id==18||id==25||id==26||id==27){
  box3.push(document.getElementById(`a${id}`).value);
}
if(id==28||id==29||id==30||id==37||id==38||id==39||id==46||id==47||id==48){
  box4.push(document.getElementById(`a${id}`).value);
}
if(id==31||id==32||id==33||id==40||id==41||id==42||id==49||id==50||id==51){
  box5.push(document.getElementById(`a${id}`).value);
}
if(id==34||id==35||id==36||id==43||id==44||id==45||id==52||id==53||id==54){
  box6.push(document.getElementById(`a${id}`).value);
}
if(id==55||id==56||id==57||id==64||id==65||id==66||id==73||id==74||id==75){
  box7.push(document.getElementById(`a${id}`).value);
}
if(id==58||id==59||id==60||id==67||id==68||id==69||id==76||id==77||id==78){
  box8.push(document.getElementById(`a${id}`).value);
}
if(id==61||id==62||id==63||id==70||id==71||id==72||id==79||id==80||id==81){
  box9.push(document.getElementById(`a${id}`).value);
}
checkbox(box1,1);
checkbox(box2,2);
checkbox(box3,3);
checkbox(box4,4);
checkbox(box5,5);
checkbox(box6,6);
checkbox(box7,7);
checkbox(box8,8);
checkbox(box9,9);

}
}
function checkbox(box,n){
const filtered=box.filter(v=>v!=="")
filtered.sort(); var a=[];

if(filtered.length<=1){
  removeyellow(n);
}
for(var i=0;i<filtered.length-1;i++){
if(filtered[i]==filtered[i+1]){ 

  colorbox(n);
  break;
}
else {
  removeyellow(n);
}
}
}
function removeyellow(id){

  if(id==1){
  for(var i=1;i<=3;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=10;i<=12;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=19;i<=21;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==2){
  for(var i=4;i<=6;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=13;i<=15;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=22;i<=24;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==3){
  for(var i=7;i<=9;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=16;i<=18;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=25;i<=27;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==4){
  for(var i=28;i<=30;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=37;i<=39;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=46;i<=48;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==5){
  for(var i=31;i<=33;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=40;i<=42;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=49;i<=51;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==6){
  for(var i=34;i<=36;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=43;i<=45;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=52;i<=54;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==7){
  for(var i=55;i<=56;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=64;i<=66;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=73;i<=75;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==8){
  for(var i=58;i<=60;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=67;i<=69;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=76;i<=78;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
if(id==9){
  for(var i=61;i<=63;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=70;i<=72;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
  for(var i=79;i<=81;i++){
    document.getElementById(`a${i}`).classList.remove("changevalidboxes");
  }
}
}

function colorbox(id){

  if(id==1){
  for(var i=1;i<=3;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=10;i<=12;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=19;i<=21;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==2){
  for(var i=4;i<=6;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=13;i<=15;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=22;i<=24;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==3){
  for(var i=7;i<=9;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=16;i<=18;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=25;i<=27;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==4){
  for(var i=28;i<=30;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=37;i<=39;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=46;i<=48;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==5){
  for(var i=31;i<=33;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=40;i<=42;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=49;i<=51;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==6){
  for(var i=34;i<=36;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=43;i<=45;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=52;i<=54;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==7){
  for(var i=55;i<=56;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=64;i<=66;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=73;i<=75;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==8){
  for(var i=58;i<=60;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=67;i<=69;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=76;i<=78;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
if(id==9){
  for(var i=61;i<=63;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=70;i<=72;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
  for(var i=79;i<=81;i++){
    document.getElementById(`a${i}`).classList.add("changevalidboxes");
  }
}
}

window.onload = function () {
    sudoku();
}
function m(){
  difficulty=medium[0];
  result=medium[1];
  sudoku();
}
function e(){
  difficulty=easy[0];
  result=easy[1];
  sudoku();
}
function h(){
  difficulty=hard[0];
  sudoku();
}
function nocolor(){
  for(var i=1;i<82;i++){
    document.getElementById(`a${i}`).classList.remove("red");
  }
}
function findrc(id){
  
        var r=(id-1)/9+1;
        if(r==10)
        r=9;
        var c=id%9;
        if(c==0)
        c=9;
        nocolor();
        colorrowbox(Math.floor(r));
        colorcolbox(c);
        colorsmallboxes(id);
    }
function colorsmallboxes(id){
if(id==1||id==2||id==3||id==10||id==11||id==12||id==19||id==20||id==21){
  for(var i=1;i<=3;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=10;i<=12;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=19;i<=21;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==4||id==5||id==6||id==13||id==14||id==15||id==22||id==23||id==24){
  for(var i=4;i<=6;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=13;i<=15;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=22;i<=24;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==7||id==8||id==9||id==16||id==17||id==18||id==25||id==26||id==27){
  for(var i=7;i<=9;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=16;i<=18;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=25;i<=27;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==28||id==29||id==30||id==37||id==38||id==39||id==46||id==47||id==48){
  for(var i=28;i<=30;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=37;i<=39;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=46;i<=48;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==31||id==32||id==33||id==40||id==41||id==42||id==49||id==50||id==51){
  for(var i=31;i<=33;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=40;i<=42;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=49;i<=51;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==34||id==35||id==36||id==43||id==44||id==45||id==52||id==53||id==54){
  for(var i=34;i<=36;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=43;i<=45;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=52;i<=54;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==55||id==56||id==57||id==64||id==65||id==66||id==73||id==74||id==75){
  for(var i=55;i<=56;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=64;i<=66;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=73;i<=75;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==58||id==59||id==60||id==67||id==68||id==69||id==76||id==77||id==78){
  for(var i=58;i<=60;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=67;i<=69;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=76;i<=78;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
if(id==61||id==62||id==63||id==70||id==71||id==72||id==79||id==80||id==81){
  for(var i=61;i<=63;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=70;i<=72;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
  for(var i=79;i<=81;i++){
    document.getElementById(`a${i}`).classList.add("red");
  }
}
}
function sudoku(){
nocolor();

  for(var i=1;i<82;i++){
  if(difficulty[i]!="-"){
      document.getElementById(`a${i}`).value = difficulty[i];
      document.getElementById(`a${i}`).classList.add("disable");
      document.getElementById(`a${i}`).disabled = true;}
  
    else{
      document.getElementById(`a${i}`).value = "";
      document.getElementById(`a${i}`).classList.remove("disable");
      document.getElementById(`a${i}`).disabled = false;
    }
   
}

}
   
   function submit(){var  j=0;
     for(var i=1;i<83;i++){
       if(document.getElementById(`a${i}`).value==result[i]){}
       else {
         alert("Input Incorrect/Empty :( ");
         j=1;break;
       }
     }if(j==0)alert("You Won :)");
   }