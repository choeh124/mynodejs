let arr = [1,2,3,4,5,6,7,8,9,10];

const arr2 = arr.filter((x)=>{ 
    return x %2 == 0;
});

const arr3 = arr.filter(x=>x%2==0);

console.log(arr2);
console.log(arr3);