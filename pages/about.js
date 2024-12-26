import Link from 'next/link'

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">This is a simple Next.js website example.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
    </div>
  )
}
