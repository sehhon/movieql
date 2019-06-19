
import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql/resolvers/Query.js";


const { prisma } = require('./hello-world/hello-world/generated/prisma-client');

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
    context: { prisma }
});

server.start(()=> console.log("Graphql Server Running"));

console.log(1111);


// //추가
// // A `main` function so that we can use async/await
// async function main() {
//   // Create a new user called `Alice`
//   const newUser = await prisma.createUser({ name: 'tt' })
//   console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

//   // Read all users from the database and print them to the console
//   const allUsers = await prisma.users()
//   console.log(allUsers)
// }

// main().catch(e => console.error(e))
