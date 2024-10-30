//콜백함수(함수의 인자로 함수가 들어감)
function tentimes(cb){
    for(let i=0; i<10; i++){
        //cb();
        cb(i);
    }
}

tentimes(function(i){
    console.log(`call this function[${i}]`);
})