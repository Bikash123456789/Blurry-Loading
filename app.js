let text = document.querySelector('.text');
let img = document.querySelector('.container');


let value=0;
let load = ()=>{
 
    value++;
    

    if(value>99){
        clearInterval(int)
    }
    text.innerText = `${value}%`
    text.style.opacity = (100-value)/100;
    img.style.filter = `blur(${80-value}px)`;
    
}

let int = setInterval(load,30);
