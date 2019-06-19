// const API_URL = "https://us1.prisma.sh/sehoon-0e21a1/hello-world/dev/_admin"

//  export const getMovies = (limit, rating) => fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies);



// const resolvers = (context) => {
    // Query: {
        // users1: () => context.prisma.users()
       
    // }
// };

// export default resolvers;

// export const users = (parent, args, context) => {
//     return context.prisma.users();
// };

const resolvers = {
    
      users:  (root, parent, args, context) => {
        return context.prisma.users();
      },
  }
  console.log('2222')
  export default resolvers;