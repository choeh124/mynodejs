const fs = require('fs');

const result = fs.readFileSync('test.json', 'utf-8');
//console.log(typeof(result));
const data = JSON.parse(result); //여기서의 핵심 내용입니다. 문자열을 json으로
//console.log(data["data"]);
const posts = data["data"]; //array
posts.forEach(item => {
    console.log(item['title'], item['content'], item['author']);
});

