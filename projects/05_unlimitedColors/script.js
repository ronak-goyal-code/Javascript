const body = document.querySelector('body');

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=1; i<=6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const changeTheme = function(){
    body.style.backgroundColor = randomColor();
}

let start;

document.querySelector('#start').addEventListener('click',function(){
    if(!start){
        start = setInterval(changeTheme,1000);
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(start);
    start = null;
})