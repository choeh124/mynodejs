const express = require('express'); //express 객체를 통으로 받는다.
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=>{ //app.get => GET
    res.send("<h1>Hello World</h1>");
});

app.get("/write", (req, res) => {
    const posts = [];
    for(let i=0; i<10; i++){
        posts.push({
            id: i,
            title: `테스트 타이틀(${i})`,
            content: `테스트 내용입니다(${i})`,
        });
    }
    fs.writeFileSync("test.json", JSON.stringify({data: posts}));
    res.send("<h1>test.json 파일 생성 성공</h1>");
});

app.get("/list", (req, res)=>{
    //test.json 에서 파일을 읽어서
    //json 형태로 브라우저에 출력
    //1. test.json 에서 파일을 읽어서
    //2. 객체를 파싱을 하고 (author 정보를 추가해서)
    //3. 다시 객체를 JSON 문자열로 반환한다.
    //4. 클라이언트에게 반환한다.
    //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    const data = fs.readFileSync('test.json', 'utf-8');

    const posts = JSON.parse(data)["data"];
    posts.forEach(x => { //posts 배열을 돌면서 객체를 추가 또는 삭제 했습니다.
        x["author"] = {
            name: "박길동",
            email: "h2@gmail.com"
        }
    });

    res.status(200).json({data: posts}); //express를 깔았기 때문에 사용할 수 있음 => res.json 을 쓰면 자동으로 객체를 JSON 문자열로 반환
});

//http://localhost:3000/view/1
//http://localhost:3000/view/2
//http://localhost:3000/view/3 -> 1,2,3 동적으로
app.get("/view/:postId", (req, res)=>{ //id는 동적으로 바뀜, 
    const postId = req.params.postId;
    const data = fs.readFileSync("test.json","utf-8");
    const jsonObj = JSON.parse(data);
    const posts = jsonObj["data"]; //array filter
    const selectedPost = posts.filter(item=>{
        return item.id == postId;
    });
    console.log(selectedPost[0]);
    res.json({data: selectedPost[0]});
})

app.listen(PORT, ()=>{
    console.log(`서버가 실행중입니다. ${PORT} 에서`);
})