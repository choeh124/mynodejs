const http = require('http');
const url = require('url');
const fs = require('fs');
const { json } = require('stream/consumers');

http.createServer((req, res)=>{ //req : HttpRequest, res: HttpResponse
    const path = url.parse(req.url, true).pathname;

    if(path == '/json') { //http://localhost:4500/json
        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        const data = {
            name: 'lee', age: 40, address: '서울시 양천구 신정동'
        }
        const result = JSON.stringify(data); //json string
        res.end(result);
    }else if(path == '/test'){
        //http://localhost:4500/test
        //test2.json의 내용을 JSON포맷으로 클라이언트 응답을 보내주세요

        //callback형태 파일읽기
        // fs.readFile('test2.json', 'utf-8', (err, data) => {
        //     if(err) {
        //         console.log(`error : ${err}`);
        //     }
        //     res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        //     console.log('====>'+typeof(data));
        //     const result = JSON.parse(data);
        //     const posts = result['data'];

        //     res.end(JSON.stringify({
        //         data:posts
        //     }));
        // });

        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        const data = fs.readFileSync('test2.json', 'utf-8');
        const result = JSON.parse(data);
        const posts = result['data'];

        res.end(JSON.stringify({
            data:posts
        }));
    }
}).listen(4500);  //메소드 체인