let arr = [5, 23, 'hello', true, 'world', -9];

for(i in arr){  //i는 index 번호 할당
    if(typeof(arr[i]) == 'string'){
        //break;
        continue;
    }
    console.log(`${arr[i]}`); //break 5, 23  
}