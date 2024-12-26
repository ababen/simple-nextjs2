import Link from 'next/link'

// First, your page component
export default function UserProfile({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl mb-2">{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

// Then, your getServerSideProps function in the same file
export async function getServerSideProps({ params }) {
  // In a real app, you would fetch this from an API or database
  const user = {
    id: params.id,
    name: 'John Doe',
    email: 'john@example.com'
  }

  return {
    props: {
      user
    }
  }
}
