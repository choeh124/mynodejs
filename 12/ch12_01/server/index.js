const express = require('express'); //was서버역할?
const http = require('http'); //웹서버역할
const socketIo = require('socket.io');

const app = express(); //not http server middleware
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {  //받은 url이 아닌 다른 url로 요청하는 옵션
        origin : "http://localhost:3000",
        credentials: true,
        method: ["GET","POST"]
    }
});
//soket.io 받은 데이터를 처리하는 로직

io.on('connection', (socket)=>{  //2번  //socket는 브라우저가 접속할때마다 할당됨
    console.log(`a user connected`, socket);

    socket.on('disconnect', ()=>{
        console.log('user disconnect');
    });

    socket.on('chat:message', (msg)=>{ //4번
        console.log(`chat:message => ${msg}`);
        io.emit('chat:message', msg); //5번
    });
});

server.listen(3030, ()=>{
    console.log(`socket.io server is running on 3030`);
});