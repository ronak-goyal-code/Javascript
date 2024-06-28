setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hrotation = 30*hour + minute/2;
    let mrotation = 6*minute;
    let srotation = 6*second;
    document.querySelector("#hour").style.transform = `rotate(${hrotation}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${mrotation}deg)`;
    document.querySelector("#second").style.transform = `rotate(${srotation}deg)`;
},1000);