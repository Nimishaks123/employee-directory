import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'
import { connectToDb, getDb } from './db.js'
import dotenv from 'dotenv'

dotenv.config()

const startServer = async () => {
  await connectToDb()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db: getDb() })
  })

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
}

startServer()