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
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white bg-[url('/your-image.jpg')] bg-cover bg-center">
      

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building the Future
                <span className="block text-blue-400">With Next.js</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create modern web applications with the power of React and the simplicity of Next.js. 
                Fast, scalable, and developer-friendly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-200"
                >
                  Get Started
                </Link>
                <Link 
                  href="#learn-more" 
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Optional decorative element */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <svg 
            width="400" 
            height="400" 
            viewBox="0 0 100 100" 
            className="text-white"
          >
            <path 
              fill="currentColor" 
              d="M95,50 L50,5 L5,50 L50,95 L95,50Z"
            />
          </svg>
        </div>
      </div>

      {/* Existing posts section */}
      <div className="p-8">
        <h2 className="text-2xl mb-4">Latest Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="mb-4 p-4 border rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
