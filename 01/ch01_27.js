const posts = {
    data: [
        {
            title: 'Test Title',
            content: 'Test Content',
            author:{
                name: 'lee',
                id: 1,
                age: 15,
            }
        },
        {
            title: 'Test Title2',
            content: 'Test Content2',
            author:{
                name: 'hong',
            }
        },
        {
            title: 'Test Title3',
            content: 'Test Content2',
        }
    ]
}

console.log(posts['data']);
console.log(`====================`);
posts['data'].forEach((item=>{
    // if('author' in item){
    //     console.log(item['author']['name']);
    // }
    // console.log(`------------------------`);

    try{
        //file open
        //file work
        console.log(item['author']['name']);
    }catch(error){
        //error
        console.log(`error: ${error}`);
    }finally{
        //file close, db close
        console.log('finally');
    }
    console.log(`------------------`);
}));