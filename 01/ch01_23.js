console.log(`begin`);
setTimeout(()=>{
    console.log(`1초 뒤에 호출`);
}, 1000); //1000ms => 1 second
console.log(`end`);

setInterval(()=>{
    console.log(`1초 마다 호출`);
}, 1000); //1second 마다 실행