import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <Link href="/" className="font-bold">
              My Next.js Site
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 p-4 text-center">
          <p>© 2024 My Next.js Site</p>
        </footer>
      </body>
    </html>
  )
}
