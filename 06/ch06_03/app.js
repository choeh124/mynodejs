const { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql');
const express = require('express');

// schema   !는 필수
const schema = buildSchema(`
    type Query {
        hello: String
        welcome(name: String!): String
    }
`);
// resolver
const root = {
    hello: ()=>{
        return "Hello GraphQL";
    },
    welcome: ({name}) => {
        return `Welcome ${name}`;
    }
}

const app = express();
app.use("/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true, //true : Client UI 기본 제공
    })
);

//http://localhost:4000/graphql
app.listen(4000);