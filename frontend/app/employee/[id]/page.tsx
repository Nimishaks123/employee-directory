'use client'

import { gql, useQuery } from '@apollo/client'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    getEmployeeDetails(id: $id) {
      name
      position
      department
      salary
    }
  }
`

export default function EmployeeDetailPage() {
  const params = useParams()
  const id = params.id as string
  const { data, loading, error } = useQuery(GET_EMPLOYEE, { variables: { id } })

  if (loading) return <p className="text-center mt-4">Loading...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>

  const emp = data.getEmployeeDetails

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-black">
      <h1 className="text-2xl font-bold mb-4">{emp.name}</h1>
      <p><strong>Position:</strong> {emp.position}</p>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Salary:</strong> ₹{emp.salary}</p>
      <Link href="/" className="inline-block mt-4 text-blue-500 hover:underline">← Back to Home</Link>
    </div>
  )
}