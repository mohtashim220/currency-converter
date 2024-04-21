const BASE_URL =
  "https://api.exchangerate-api.com/v4/latest/USD";

  

let choose=document.querySelector(".choose");
let select=document.querySelectorAll(".choose select");
let from=document.querySelector("#from");
let to=document.querySelector("#to");
let msg=document.querySelector(".out-msg");


 

console.log(select);
 
let btn=document.querySelector("#convert");
console.log(typeof(select));

for (let slct of select)
    for (code in countryList){
    let option=document.createElement("option");
    option.innerText=code;
    option.value=code;
    if(slct.name==="from" && code==="USD"){
        option.selected="selected";
    }

    if(slct.name==="to" && code==="INR"){
        option.selected="selected";
    }
    slct.append(option);

    slct.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

const updateflag=(element)=>{

   
    let cur_code=element.value;
    let con_code=countryList[cur_code];
    let newsrc=`https://flagsapi.com/${con_code}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
    

    
}

 
console.dir(btn);

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let ent_amt=document.querySelector("#amount");
    if(ent_amt.value<="1" || ent_amt.value===""){
        ent_amt.value="1";
    }

    
console.dir(ent_amt);
     
let URL=`https://api.exchangerate-api.com/v4/latest/${from.value}`;
let response=await fetch(URL);
let data=await response.json();
let rate=data.rates[to.value];
let result=rate*ent_amt.value;
msg.innerText=`${ent_amt.value} ${from.value} = ${result} ${to.value}`

});



 
      