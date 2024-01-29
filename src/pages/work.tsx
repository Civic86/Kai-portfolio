import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import WorkCard from '@/components/WorkCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center py-6 px-10 bg-yellow-100">
        <img src="/Logo.png" alt="Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-4">
            <li className="text-yellow-900 hover:text-yellow-600">
              <Link href="/">Home</Link>
            </li>
            <li className="text-yellow-900 hover:text-yellow-600">About</li>
            <li className="text-yellow-900 hover:text-yellow-600">Work</li>
          </ul>
        </nav>
      </header>

      <main className="bg-yellow-50 min-h-screen p-8">

        <section className="mt-12">
          <h1 className="text-5xl font-bold mb-6 text-center text-green-400">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WorkCard
              title="Cocoon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
              href="/project1"
              imageUrl="/Logo.png"
            />
            <WorkCard
              title="Product Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
              href="/project1"
              imageUrl=""
            />
          </div>
        </section>

      </main>

      <footer className="bg-yellow-100 text-center p-6">
        <p className="text-yellow-900">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
