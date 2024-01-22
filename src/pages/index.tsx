import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center py-6 px-10 bg-yellow-100">
        <img src="/Logo.png" alt="Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-4">
            <li className="text-yellow-900 hover:text-yellow-600">Home</li>
            <li className="text-yellow-900 hover:text-yellow-600">About</li>
            <li className="text-yellow-900 hover:text-yellow-600">Work</li>
          </ul>
        </nav>
      </header>

      <main className="bg-yellow-50 min-h-screen p-8">
        <section className="text-center">
          <div className="circle bg-white rounded-full h-64 w-64 block mx-auto mb-8"></div>
          <h1 className="text-5xl font-bold text-yellow-900 mb-6">Hello! This is Kai!</h1>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl text-yellow-900 font-bold mb-6">Work.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product Name</h3>
              <p className="text-yellow-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis.
                Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
              </p>
            </div>
            {/* Repeat the above div for each product/project */}
          </div>
        </section>
      </main>

      <footer className="bg-yellow-100 text-center p-6 mt-12">
        <p className="text-yellow-900">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
