alert("hello there, lets play!")
let boxes=document.querySelectorAll("#box");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer");
let newbtn=document.querySelector(".newbtn");
let resetbutton=document.querySelector(".reset");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turnO=true;
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
if(turnO){
    
    box.innerText="O";
    
    turnO=false;
}
else{    box.innerText="X";
turnO=true;

}
box.disabled=true;
count++;

let iswinner=checkwinner();
if(count===9&&!iswinner){
   showdraw(); 
}
    });
});
const showdraw=()=>{
    msg.innerText=`Game Draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    
};


const checkwinner=()=>{
    for(let pattern of winpatterns){
       // console.log(pattern);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1 !="" && posval2 !="" && posval3 !=""){
    if(posval1===posval2 && posval2===posval3){
    
        showwinner(posval1);
        return true;
        
    }
    }
   
    }
};




const resetbtn=()=>{
     turnO=true;
count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disableboxes=()=>{
for(box of boxes){
    box.disabled=true;
}
};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
    };

const showwinner=(winner)=>{
    msg.innerText=`Congrats! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

newbtn.addEventListener("click",resetbtn);
resetbutton.addEventListener("click",resetbtn);

