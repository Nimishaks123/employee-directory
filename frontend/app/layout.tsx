// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import ClientWrapper from './ClientWrapper'

export const metadata: Metadata = {
  title: 'Employee Directory',
  description: 'GraphQL + Next.js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
