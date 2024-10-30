const date = new Date(); //날짜 객체를 선언해서 date에 할당.

if(date.getHours() < 12){
    console.log(`오전입니다: ${date.getHours()}`); //11
}else if(date.getHours() >= 12){
    console.log(`오후입니다: ${date.getHours()}`);
}else{
    console.log(`나머지: ${date.getHours()}`);
}