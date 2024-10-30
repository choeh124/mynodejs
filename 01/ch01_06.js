console.log(String(52))
console.log(typeof(String(52))); //string
console.log(typeof(52+"")); //string  숫자에 빈 문자열 붙이니 문자열 됨.
console.log(typeof(`${52}`)); //string 빽틱기호 쓰면 다 문자됨

console.log(typeof(Number("45"))); //number
console.log(typeof(parseInt("45"))); //number
console.log(typeof(parseFloat("45.23"))); //number

console.log(isNaN(Number("Hello"))); //true;