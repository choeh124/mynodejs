const express = require('express');
const fs = require('fs');
const path = require('path');
//import router from routes
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const authRoute = require('./routes/authRoute');

const models = require('./models'); //models/index.js  //sequelizer에서 index.js를 만들어준다.
//models <= db
const app = express();
const PORT = 3000;

app.use(express.json());
//use router
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/auth', authRoute);

// use router

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
    models.sequelize.sync({force:false}) //모델을 테이블로 생성 force:false면 if not exists
    .then(()=>{  //모델 생성 성공 시, db객체 연결 성공시
        console.log(`db connected`);
    }).catch((err)=>{ //모델 생성 실패시, db객체 연결 실패시
        console.log(`db connected error : ${err}`);
        process.exit();
    });
});