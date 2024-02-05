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
              <h2 className="text-7xl font-bold mb-10 mt-20 text-[#062438]">Trading app design by Photoshop</h2>
              <p className="text-gray-500 max-w-xl">Designed a barter application using Figma, from lo-fi to hi-fi in one step, and created mockups not only from the design part but also from a marketing perspective, including user testing and persona creation, to create a more unified application design was completed.</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20 md: mr-60">
            <img src="/TradeSquare1.png" alt="Logo" className="w-96" />
          </div>

        </div>
      </main>

      <footer className="bg-[#062438] text-center p-6">
        <p className="text-gray-400">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
