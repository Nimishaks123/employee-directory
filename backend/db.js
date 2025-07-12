import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const client = new MongoClient(process.env.MONGODB_URI)
let db

export async function connectToDb() {
  await client.connect()
  db = client.db() // default DB from URI
  console.log('✅ MongoDB Connected')
}

export function getDb() {
  return db
}
