'use client'

import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import Link from 'next/link'
import AddEmployeeForm from '@/components/AddEmployeeForm'

const GET_ALL_EMPLOYEES = gql`
  query {
    getAllEmployees {
      id
      name
      position
      department
    }
  }
`

const GET_BY_DEPARTMENT = gql`
  query GetByDept($department: String!) {
    getEmployeesByDepartment(department: $department) {
      id
      name
      position
      department
    }
  }
`

export default function HomePage() {
  const [selectedDept, setSelectedDept] = useState('')
  const { data: allData, loading, error } = useQuery(GET_ALL_EMPLOYEES)
  const [getByDept, { data: filteredData }] = useLazyQuery(GET_BY_DEPARTMENT)

  const handleDepartmentChange = (dept: string) => {
    setSelectedDept(dept)
    if (dept === '') return
    getByDept({ variables: { department: dept } })
  }

  const employees = selectedDept === ''
    ? allData?.getAllEmployees
    : filteredData?.getEmployeesByDepartment

  const uniqueDepartments = [...new Set(allData?.getAllEmployees.map(emp => emp.department))]

  if (loading) return <p className="text-center mt-4">Loading...</p>
  if (error) return <p className="text-red-500">Error: {error.message}</p>

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Directory</h1>

      <div className="mb-6 text-center">
        <label className="mr-2 font-semibold">Filter by Department:</label>
        <select
          className="border p-2 rounded"
          value={selectedDept}
          onChange={(e) => handleDepartmentChange(e.target.value)}
        >
          <option value="">All</option>
          {uniqueDepartments.map((dept, idx) => (
            <option key={idx} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <table className="w-full table-auto border border-gray-300 text-black bg-white">
        <thead>
          <tr className="bg-gray-200 font-semibold">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Position</th>
            <th className="p-2 border">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((emp: any, index: number) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">
                <Link href={`/employee/${emp.id}`} className="text-blue-500 hover:underline">
                  {emp.name}
                </Link>
              </td>
              <td className="p-2 border">{emp.position}</td>
              <td className="p-2 border">{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddEmployeeForm />
    </div>
  )
}