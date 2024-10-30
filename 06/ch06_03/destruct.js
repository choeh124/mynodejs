//구조분해할당
//객체구조분해
const person = {name:'lee', age:25, city:'seoul'}

//const name = person.name; //person['name']
//const age = person.age; 
//const city = person.city; 

const {name, age, city} = person;

//배열구조분해?
const colors = ['red','blue','orange','green'];
const [a,b,c,d] = colors;
console.log(a,b,c,d);

//const [a,b,c] = colors; //앞에서부터 순서대로
//console.log(a,b,c);