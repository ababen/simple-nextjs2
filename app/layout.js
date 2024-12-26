import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex gap-x-6"> {/* Added flex and gap-x-6 */}
            <Link href="/" className="font-bold">
              My Next.js Site
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="mailto:alexbaben@aol.com" className="hover:text-gray-300">
              Email Me
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* ... existing code ... */}
      </body>
    </html>
  )
}
