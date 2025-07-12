import { connectToDb, getDb } from './db.js'

const seed = async () => {
  await connectToDb()
  const db = getDb()

  await db.collection('employees').deleteMany({})

  await db.collection('employees').insertMany([
    { name: 'Alice', position: 'Developer', department: 'Engineering', salary: 60000 },
    { name: 'Bob', position: 'HR Executive', department: 'HR', salary: 40000 },
    { name: 'Charlie', position: 'Sales Lead', department: 'Sales', salary: 50000 },
    { name: 'David', position: 'QA Engineer', department: 'Engineering', salary: 55000 },
    { name: 'Eve', position: 'Recruiter', department: 'HR', salary: 42000 },
  ])

  console.log('🌱 Seeded employees!')
  process.exit()
}

seed()
