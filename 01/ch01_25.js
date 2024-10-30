let personInfo = {
    name: 'lee',
    age: 55,
    address: '서울 금천구 독산동 123',
    hobby : ['독서','등산','낚시','넷플릭스']
}

for(let key in personInfo){
    console.log(`${key} => ${personInfo[key]}`);
}
console.log('---------------');
console.log(` key list : ${Object.keys(personInfo)}`);

console.log(` key list : ${typeof(Object.keys(personInfo))}`); //list

console.log(personInfo['test']);

Object.keys(personInfo).forEach(key=>{
    console.log(`${key} => ${personInfo[key]}`);
});

const keys = Object.keys(personInfo);
console.log(personInfo['test']);

//console.log(personInfo['test']['a']); //error;
if(keys.includes('test')){ //keys list, includes함수
    console.log(personInfo['test']['a']); //not error;
}