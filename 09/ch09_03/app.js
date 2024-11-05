//몽고db를 사용한 게시판

const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/post"); //connect mongodb
const db = mongoose.connection; //get connect object

db.on("error", (err)=>{ //connection error 발생했을때
    console.error(`db connect fail : ${JSON.stringify(err)}`);
});

db.once("open", ()=>{ //연결이 성공했을때
    console.log(`db connect success`);
});

//define Schema
const PostSchma = new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    createdAt:{type:Date,default:Date.now},
});

const Post = mongoose.model('Post', PostSchma); //create collection, create table

const app = express();
app.use(express.json());

app.post("/posts", async (req, res)=>{
    const {title, content, author} = req.body; //get content title from body
    try{
        const post = new Post({ //create post object
            title : title,
            content: content,
            author: author,
        });
        await post.save(); //save mongodb  //3.dbo
        res.status(200).json({data:post, message:'ok'}); //return result to user
    }catch(e){
        res.status(500).json({message:e});
    }
});

//post list find
app.get("/posts", async (req, res)=>{
    try{
        const posts = await Post.find({});
        res.status(200).json({data: posts, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
});

app.get("/posts/:id", async (req, res)=>{
    const {id} = req.params;
    try{
        const post = await Post.findById(id);
        res.status(200).json({data: post, message:'ok'});
    }catch(e){
        res.status(500).json({message: e});
    }
});

/////////////////////////////////////////////
// Layered Architecture
// 1. 코드 가독성이 높아지고 유지보수성이 증가 합니다.
// 2. 재사용성이 향상
// 3. 테스트가 용이
// 4. 협업용이성
// 5. 확장도 용이

// 단점
// 1. 복잡성 증가
// 2. 러닝커브가 있고
// 3. 소규모 프로젝트에서는 안 어울림
////////////////////////////////////////////

//1. routes 특정 url 경로와 컨트롤러를 매핑한다.
app.put("/posts/:id", async (req, res)=>{  //2.controller: 요청을 받고 응답을 처리하는 역할만 수행
    const {id} = req.params;
    const {title, content} = req.body;
    try{
        const post = await Post.findByIdAndUpdate(  //3.dao(data access object): 데이터베이스에 직접 접근하는 계층, 모델을 사용하여 데이터 처리
            id,   //4.service : 복잡한 비즈니스 로직을 처리하는 계층, 컨트롤러와 dao사이에서 로직 수행.
            {
                title: title,
                content: content,
            },
            {new : true} //업데이트가 적용된 후의 문서를 반환 합니다.
        )
        res.status(200).json({data: post, message:'ok'}); 
    }catch{
        res.status(500).json({message:e});
    }
});

app.delete("/posts/:id", async (req, res)=>{
    const {id} = req.params;
    try{
        await Post.findByIdAndDelete(id);
        res.status(204).send();
    }catch(e){
        res.status(500).json({message: e});
    }
})

app.listen(3000, ()=>{
    console.log(`server is running`);
});