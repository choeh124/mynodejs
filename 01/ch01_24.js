let personInfo = {
    name: 'lee',
    age: 55,
    address: '서울 금천구 독산동 123',
    hobby : ['독서','등산','낚시','넷플릭스']
}

console.log(personInfo);
console.log(personInfo['name']);
console.log(personInfo['age']);
console.log(personInfo.name);
console.log('-------------------------');
personInfo['gender'] = 'M';
//기존에 없는 키를 추가가흔 경우는 insert
console.log(personInfo);
personInfo['address'] = '서울 양천구 신정동';
//기존 키에 값을 할당하면 update
console.log(personInfo);
//json(java script object notation)포맷
//console.log(JSON.stringify(personInfo));

//자바스크립트에선 객체와 배열이 막강하다.

