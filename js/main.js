let string=""

let b1=document.querySelector(".b1")
let b2=document.querySelector(".b2")
let b3=document.querySelector(".b3")
let b4=document.querySelector(".b4")
let b5=document.querySelector(".b5")
let b6=document.querySelector(".b6")
let b7=document.querySelector(".b7")
let b8=document.querySelector(".b8")
let b9=document.querySelector(".b9")
let b0=document.querySelector(".b0")
let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
let equal=document.querySelector(".equal")
let clear=document.querySelector(".clear")
let dot=document.querySelector(".dot")
let backspace=document.querySelector(".backspace")
let divide=document.querySelector(".divide")
let multiply=document.querySelector(".multiply")
let scobe=document.querySelector(".scobe")
let percent=document.querySelector(".percent")
let lik=document.querySelector(".lik")
let title=document.querySelector(".title")
let result=document.querySelector(".result")
let dialog=document.querySelector(".dialog")
let dialog_button=document.querySelector(".dialog_button")
let close=document.querySelector(".close")
let min_res=document.querySelector(".min_res")

dialog_button.onclick=()=>{
    dialog.showModal()
}

close.onclick=()=>{
    dialog.close()
}

b1.onclick=()=>{
    string+="1"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b2.onclick=()=>{
    string+="2"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b3.onclick=()=>{
    string+="3"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b4.onclick=()=>{
    string+="4"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b5.onclick=()=>{
    string+="5"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b6.onclick=()=>{
    string+="6"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b7.onclick=()=>{
    string+="7"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b8.onclick=()=>{
    string+="8"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b9.onclick=()=>{
    string+="9"
    title.innerHTML=string
    result.innerHTML=eval(string)
}
b0.onclick=()=>{
    string+="0"
    title.innerHTML=string
    result.innerHTML=eval(string)
}

lik.onclick=()=>{
    if (string[0]=='-'){
        string=string.slice(1)
        title.innerHTML=string
    }
    else{
        string="-"+string
        title.innerHTML=string
    }
    result.innerHTML=eval(string)
}

percent.onclick=()=>{
    if (string[string.length-1]!="%" && string.length!=0)
    {
        if (string[string.length-1]=='+' || string[string.length-1]=='/' || string[string.length-1]=='*' || string[string.length-1]=="-"){
            string=string.slice(0,-1)
            string+="%"
            title.innerHTML=string
        }
        else{
            string+="%"
            title.innerHTML=string
        }
    }
    result.innerHTML=eval(string)
}

let cnt=0;
scobe.onclick=()=>{
    if (cnt%2==0){
        string+="("
        title.innerHTML=string
        cnt++;
    }
    else{
        string+=")"
        title.innerHTML=string
        cnt=0;
    }
    result.innerHTML=eval(string)
}

plus.onclick=()=>{
    if (string[string.length-1]!="+" && string.length!=0)
    {
        if (string[string.length-1]=='-' || string[string.length-1]=='/' || string[string.length-1]=='*' || string[string.length-1]=="%"){
            string=string.slice(0,-1)
            string+="+"
            title.innerHTML=string
        }
        else{
            string+="+"
            title.innerHTML=string
        }
    }
    result.innerHTML=eval(string)
}
minus.onclick=()=>{
    if (string[string.length-1]!="-" && string.length!=0)
    {
        if (string[string.length-1]=='+' || string[string.length-1]=='/' || string[string.length-1]=='*' || string[string.length-1]=="%"){
            string=string.slice(0,-1)
            string+="-"
            title.innerHTML=string
        }
        else{
            string+="-"
            title.innerHTML=string
        }
    }
    result.innerHTML=eval(string)
}


clear.onclick=()=>{
    string=""
    title.innerHTML=string
    result.innerHTML=string
}
dot.onclick=()=>{
    if (string[string.length-1]!="." && string.length!=0)
    {
        string+="."
        title.innerHTML=string
    }
    result.innerHTML=eval(string)
}
backspace.onclick=()=>{
    string=string.slice(0,-1)
    title.innerHTML=string
    result.innerHTML=eval(string)   
}
divide.onclick=()=>{
    if (string[string.length-1]!="/" && string.length!=0)
    {
        if (string[string.length-1]=='+' || string[string.length-1]=='-' || string[string.length-1]=='*' || string[string.length-1]=="%"){
            string=string.slice(0,-1)
            string+="/"
            title.innerHTML=string
        }
        else{
            string+="/"
            title.innerHTML=string
        }
    } 
    result.innerHTML=eval(string)
}
multiply.onclick=()=>{
    if (string[string.length-1]!="*" && string.length!=0){
        if (string[string.length-1]=='+' || string[string.length-1]=='-' || string[string.length-1]=='/' || string[string.length-1]=="%"){
            string=string.slice(0,-1)
            string+="*"
            title.innerHTML=string
        }
        else{
            string+="*"
            title.innerHTML=string
        }
    }
    result.innerHTML=eval(string)

}



equal.onclick=()=>{
    result.innerHTML=eval(string)
    title.innerHTML=eval(string)
    min_res.innerHTML=eval(string)
    string=""+eval(string)
}