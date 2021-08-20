const numInput=document.getElementsByClassName("numInput")[0];
const sun=document.getElementsByClassName("light")[0];
const calculatorBtn=document.getElementsByClassName("calculator")[0];
const converterBtn=document.getElementsByClassName("converter")[0];
const body=document.body;
const headerName=document.getElementsByClassName("name")[0];
const nine=document.getElementsByClassName("9")[0];
const eight =document.getElementsByClassName("8")[0];
const seven =document.getElementsByClassName("7")[0];
const six =document.getElementsByClassName("6")[0];
const  five=document.getElementsByClassName("5")[0];
const  four=document.getElementsByClassName("4")[0];
const  three=document.getElementsByClassName("3")[0];
const two =document.getElementsByClassName("2")[0];
const  one=document.getElementsByClassName("1")[0];
const  zero=document.getElementsByClassName("0")[0];

const  plus=document.getElementsByClassName("plus")[0];
const  subtract=document.getElementsByClassName("subtract")[0];
const  multipy=document.getElementsByClassName("multipy")[0];
const  divide=document.getElementsByClassName("divide")[0];
const  equal=document.getElementsByClassName("equal")[0];
const  contentCalculator=document.getElementsByClassName("contentCalculator")[0];
const content=document.getElementsByClassName("content")[0];

// the DarkLight mode
function Dark(){
    sun.classList.toggle("darkMode")

}

calculatorBtn.addEventListener("click",function(){
    contentCalculator.style.display="block";
    content.textContent="";
})

//write numbers in input field
nine.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=9;

    }
     else 
     numInput.value= numInput.value+9;   
   
    
})
eight.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=8;
    }
    else
     numInput.value= numInput.value+8;
})
seven.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=7;
    }
    else
     numInput.value= numInput.value+7;
})
six.addEventListener("click",function(){
    
    if(localStorage.getItem("numbers3")!==null){
       localStorage.clear();
        numInput.value=6;
    }
   else 
   numInput.value=numInput.value+6;
})
five.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=5;
    }
   else
    numInput.value=numInput.value+5;
})
four.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=4;
    }
    else
     numInput.value=numInput.value+4;
})
three.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=3;
    }
   else 
numInput.value=numInput.value+3;
})
two.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=2;
       
    }
    else numInput.value=numInput.value+2;
})
one.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=1;
    }
    else numInput.value=numInput.value+1;
})
zero.addEventListener("click",function(){
    if(localStorage.getItem("numbers3")!==null){
        localStorage.clear();
        numInput.value=0;
    }
  else numInput.value=numInput.value+0;
})

// the calculations
plus.addEventListener("click",function(){
    if(numInput.value!=null){
      localStorage.clear();
      const addToLocalSt1=localStorage.setItem("number1",numInput.value) 
    numInput.value="";
    } if(numInput.value!=null){
     equal.addEventListener("click",function(){
        const addToLocalSt2=localStorage.setItem("number2",numInput.value)
         numInput.value= JSON.parse(localStorage.getItem("number1"))+JSON.parse(localStorage.getItem("number2"));
        // const addToLocalSt3=localStorage.setItem("numbers3",numInput.value)
        })}

})

// subtract.addEventListener("click",function(){
//     if(numInput.value!=null){
//       localStorage.clear();
//       const addToLocalSt1=localStorage.setItem("number1",numInput.value) 
//     numInput.value="";
//     } if(numInput.value!=null){
//      equal.addEventListener("click",function(){
//         const addToLocalSt2=localStorage.setItem("number2",numInput.value)
//          numInput.value= JSON.parse(localStorage.getItem("number1"))-JSON.parse(localStorage.getItem("number2"));
//         const addToLocalSt3=localStorage.setItem("numbers3",numInput.value)
//         })}

// })
// multipy.addEventListener("click",function(){
//     if(numInput.value!=null){
//       localStorage.clear();
//       const addToLocalSt1=localStorage.setItem("number1",numInput.value) 
//     numInput.value="";
//     } if(numInput.value!=null){
//      equal.addEventListener("click",function(){
//         const addToLocalSt2=localStorage.setItem("number2",numInput.value)
//          numInput.value= JSON.parse(localStorage.getItem("number1"))*JSON.parse(localStorage.getItem("number2"));
//         const addToLocalSt3=localStorage.setItem("numbers3",numInput.value)
//         })}

// })

// divide.addEventListener("click",function(){
//     if(numInput.value!=null){
//       localStorage.clear();
//       const addToLocalSt1=localStorage.setItem("number1",numInput.value) 
//     numInput.value="";
//     } if(numInput.value!=null){
//      equal.addEventListener("click",function(){
//         const addToLocalSt2=localStorage.setItem("number2",numInput.value)
//          numInput.value= JSON.parse(localStorage.getItem("number1"))/JSON.parse(localStorage.getItem("number2"));
//         const addToLocalSt3=localStorage.setItem("numbers3",numInput.value)
//         })}

// })


converterBtn.addEventListener("click",function(){
    contentCalculator.style.display="none";
    content.textContent="";
    headerName.textContent="";

    const contentConverter=document.createElement("div");
    content.appendChild(contentConverter);

    const name=document.createElement("h1")
    name.textContent="Converter ";
    headerName.appendChild(name);


    const icon=document.createElement("i")
    icon.setAttribute("class","far fa-analytics")
    name.appendChild(icon);

// the first coin
    const div1=document.createElement("div")
    div1.setAttribute("class","select")
    contentConverter.appendChild(div1)

    const  coin1=document.createElement("select")
    coin1.setAttribute("class","coin1")
    div1.appendChild(coin1);

    const  option1=document.createElement("option")
    coin1.appendChild(option1);
    option1.textContent="Shekels"

    const  option2=document.createElement("option")
    coin1.appendChild(option2);
    option2.textContent=" Dollars"

    const  option3=document.createElement("option")
    coin1.appendChild(option3);
    option3.textContent=" Euros"

    const switch1=document.createElement("i")
    switch1.setAttribute("class","fas fa-random")
    div1.appendChild(switch1);

//the convert currency

    const  coin2=document.createElement("select")
    coin2.setAttribute("class","coin2")
    div1.appendChild(coin2);

    const  option4=document.createElement("option")
    coin2.appendChild(option4);
    option4.textContent="Dollars"

    const  option5=document.createElement("option")
    coin2.appendChild(option5);
    option5.textContent="Shekels"

    const  option6=document.createElement("option")
    coin2.appendChild(option6);
    option6.textContent=" Euros"

  //dives contain input convertet
    const div2=document.createElement("div")
    div2.setAttribute("class","convert")
    contentConverter.appendChild(div2)

    const input1=document.createElement("input")
    input1.setAttribute("class","convertInput")
    div2.appendChild(input1)

    const input2=document.createElement("input")
    input2.setAttribute("class","convertInput")
    div2.appendChild(input2)
    

//convert from shekels to dollars
if(option1&&option4){
    input1.onkeypress=function(e){
        if (e.key === "Enter")
     input2.value=(input1.value/3.25).toFixed (3) 

    }
   
}

//convert from dollars to shekels
else if(option2&&option2){
    input1.onkeypress=function(e){
        if (e.key === "Enter")
     input2.value=input1.value*3.25 
    }
   
}
//convert from shekels to euros
else if(option1&&option6){
    input1.onkeypress=function(e){
        if (e.key === "Enter")
     input2.value=(input1.value/3.80) .toFixed (3)   
    }
   
}
//convert from euros to shekels
else if(option1&&option6){
    input1.onkeypress=function(e){
        if (e.key === "Enter")
     input2.value=input1.value*3.80   
    }
   
}

switch1.addEventListener("click",function(){
    const switch2=coin1.value;
    coin1.value=coin2.value
    coin2.value= switch2
    // location.reload();
})



















})


