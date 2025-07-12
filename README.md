Employee Directory App

A full-stack MERN application (MongoDB, Express, React/Next.js, Node.js) built using Apollo Server and GraphQL for managing employee information.

🚀 Features

Backend (Apollo Server + MongoDB):

Node.js with GraphQL API

Apollo Server v4

MongoDB using native Node.js driver (no Mongoose)

GraphQL schema with:

getAllEmployees

getEmployeeDetails(id)

getEmployeesByDepartment(department)

addEmployee(...)

MongoDB seeding script to populate sample data

Error handling for invalid IDs

Frontend (Next.js App Router + Apollo Client):

Employee listing with table view

Department filter dropdown

Add new employee form with client-side validation

Detailed employee page (/employee/[id])

Responsive UI built using Tailwind CSS

🗂️ Tech Stack

Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS, Apollo Client

Backend: Node.js, Apollo Server v4, MongoDB Driver

Database: MongoDB

📁 Folder Structure

Backend (/server)
server/
├── index.js             # Entry point
├── db.js                # MongoDB connection
├── schema.js            # GraphQL type definitions
├── resolvers.js         # GraphQL resolvers
├── seed.js              # Data seeding script
├── .env                 # Environment variables
└── package.json

Frontend (/client or root)
app/
├── page.tsx                 # Home page (Employee list)
├── employee/[id]/page.tsx  # Dynamic employee detail page
├── components/
│   └── AddEmployeeForm.tsx # Form component
├── lib/
│   └── apolloClient.ts     # Apollo Client config
├── ClientWrapper.tsx       # Wraps ApolloProvider
└── layout.tsx              # Root layout
🛠️ Installation & Setup

Prerequisites:

Node.js >= 18

MongoDB local or cloud instance

1. Clone Repo
git clone https://github.com/Nimishaks123/employee-directory.git
cd employee-directory
2. Backend Setup
cd server
npm install
# Create .env file
MONGODB_URI=mongodb://127.0.0.1:27017/employee-directory

# Seed database (optional)
npm run seed

# Start server
npm run dev
Server runs at http://localhost:4000

3. Frontend Setup (in project root or /client)
npm install
npm run dev
🔍 Usage

Visit / to see all employees

Use the department filter dropdown

Click "Add New Employee" to submit a form

Click an employee name to view details
⚙️ Environment Variables

Backend (.env****)
MONGODB_URI=mongodb://127.0.0.1:27017/employee-directory

Feel free to reach out with questions or feedback!