let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];


let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;

        levelup();
    }
});


function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}  


function userflash(btn){
   btn.classList.add("user");
   setTimeout(function(){
    btn.classList.remove("user");
   },250);
}

function levelup(){
 userseq=[];
 level++;
 h2.innerText=`level ${level}`;

 let randidx=Math.floor(Math.random()*3);
 let randcolor=btns[randidx];
 let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor); 
 btnflash(randbtn);
}


function checkans(index){
    if(userseq[index] === gameseq[index]){
        if(userseq.length==gameseq.length){
           setTimeout (levelup,1000);
        }
    }else{
      h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br> Press any key to start.`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
    }
}


function btnpress(){
    let btn=this;
    userflash(btn);
  
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
 btn.addEventListener("click",btnpress);
 }


 function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
 }