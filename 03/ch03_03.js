const fs = require('fs');

//callback형태 파일읽기
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(`error : ${err}`);
    }
    console.log(`data : ${data}`);
});

try{
    //sync 형태 파일읽기
    const data = fs.readFileSync(`hello.txt`,`utf-8`); //1.파일명, 2.인코딩포맷
    console.log(`readFileSync data : ${data}`);
}catch(e){
    console.error(e);
}
