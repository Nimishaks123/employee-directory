'use client'

import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const ADD_EMPLOYEE = gql`
  mutation AddEmployee($name: String!, $position: String!, $department: String!, $salary: Int!) {
    addEmployee(name: $name, position: $position, department: $department, salary: $salary) {
      id
      name
    }
  }
`

export default function AddEmployeeForm() {
  const [formData, setFormData] = useState({ name: '', position: '', department: '', salary: '' })
  const [addEmployee, { loading, error }] = useMutation(ADD_EMPLOYEE, {
    onCompleted: () => {
      alert('Employee Added!')
      setFormData({ name: '', position: '', department: '', salary: '' })
    },
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addEmployee({ variables: { ...formData, salary: parseInt(formData.salary) } })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 p-6 border rounded bg-gray-50">
     <h2 className="text-xl font-semibold mb-4 text-black">Add New Employee</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        {['name', 'position', 'department', 'salary'].map((field) => (
          <input
            key={field}
            type={field === 'salary' ? 'number' : 'text'}
            value={formData[field as keyof typeof formData]}
            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            required
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="p-2 border rounded"
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Employee'}
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
    </form>
  )
}