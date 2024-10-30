const fs = require('fs');

const dirname = "naver/daum/google";
fs.mkdirSync(dirname, {recursive: true}); //recursive : 하위로 만들어달라.

const content = '안녕하세요 네이버 구글 다음 중 하나에 입사하고 싶어용';
// naver/daum/google/out.txt <- content 내용을 넣어 주세요.

fs.writeFile(`${dirname}/out.txt`, content, (err)=>{
    console.error(err);
});