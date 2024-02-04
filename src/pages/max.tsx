import Head from 'next/head'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'

export default function Max() {
  return (
    <>
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <NavBar />

      <main className="bg-white min-h-screen">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 md:ml-20">
            <div className="max-w-xl">
              <h2 className="text-7xl font-bold mb-10 mt-20 text-[#062438]">Max Verstappen Poster made by Photoshop</h2>
              <p className="text-gray-500 max-w-xl">cocoon is a completely new form of AI-powered career advisor for all busy but new career-seeking users.
                <br />
                <br />
                cocoon reads a user's resume and shows them the possibilities for the new career they desire. Even if the user wants to find a job unrelated to his or her previous job, cocoon will present the best path for the user.</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20 md: mr-60">
            <img src="/MaxF1.png" alt="Logo" className="w-96" />
          </div>

        </div>
      </main>

      <footer className="bg-[#062438] text-center p-6">
        <p className="text-gray-400">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
