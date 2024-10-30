const fs = require('fs');

const content = `안녕하세요 홍길동입니다. 오늘은 날씨가 참 좋아요 열두시 사십오분에 밥먹으러 가요`;

//1. 파일명 2:내용 3:에러콜백함수
fs.writeFile('out.txt', content, (err)=>{
    console.error(err);
});

fs.writeFileSync('out2.txt', content, 'utf-8');