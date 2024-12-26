import Link from 'next/link'

// This runs on the server
export async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return posts.slice(0, 5)  // Get first 5 posts
}

export default async function Home() {
  const posts = await getData()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js Site</h1>

      <div>
        <h2 className="text-2xl mb-4">Latest Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
