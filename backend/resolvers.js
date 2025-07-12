import { ObjectId } from 'mongodb'
import { getDb } from './db.js'

export const resolvers = {
  Query: {
    getAllEmployees: async (_, __, { db }) => {
      return await db.collection('employees').find({}).toArray()
    },
    getEmployeeDetails: async (_, { id }, { db }) => {
      try {
        const emp = await db.collection('employees').findOne({ _id: new ObjectId(id) })
        if (!emp) throw new Error('Employee not found')
        return emp
      } catch {
        throw new Error('Invalid employee ID')
      }
    },
    getEmployeesByDepartment: async (_, { department }, { db }) => {
      return await db.collection('employees').find({ department }).toArray()
    },
  },

  Mutation: {
    addEmployee: async (_, { name, position, department, salary }, { db }) => {
      const newEmp = { name, position, department, salary }
      const result = await db.collection('employees').insertOne(newEmp)
      return { id: result.insertedId, ...newEmp }
    }
  },

  Employee: {
    id: (parent) => parent._id.toString()
  }
}