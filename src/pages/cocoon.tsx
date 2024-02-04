import Head from 'next/head'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar/>
      <NavBar />

      <main className="bg-white min-h-screen">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1 md:ml-20">
            <div className="max-w-xl">
              <h2 className="text-7xl font-bold mb-10 mt-20 text-[#062438]">Cocoon</h2>
              <p className="text-gray-500 max-w-xl">cocoon is a completely new form of AI-powered career advisor for all busy but new career-seeking users.
                <br/>
                <br/>
                cocoon reads a user's resume and shows them the possibilities for the new career they desire. Even if the user wants to find a job unrelated to his or her previous job, cocoon will present the best path for the user.</p>
            </div>
          </div>
          <div className="flex-1 mt-20 ml-0">
            <img src="/screen.png" alt="Logo" className="h-64" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mt-72">
          <div className="md:w-1/2 md:pr-4 mt-20">
            <h2 className="text-7xl font-bold mb-10 text-[#062438] text-center">Problem</h2>
            <p className='text-gray-100 bg-[#062438] p-10 mb-20'>In general, the main reasons that people who want to change jobs give up on them are financial and time constraints. The challenge is to find a modern approach to the current situation, recognizing that without time and money, it is difficult to change jobs, open a career, or find a job in the first place. Another challenge identified was that people in other industries who suddenly want to change industries may find it difficult to do so without the knowledge, skills, degrees, and other criteria they needed to meet before they could make the change. That is why we created this application.</p>
          </div>

          <div className="md:w-1/2">
            <img src="/cocoon-app.png" alt="screen" className="h-96" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mt-72">
          <div className="md:w-1/2 md:pr-4 mt-20">
            <h2 className="text-7xl font-bold mb-10 text-[#062438] text-center">Solution</h2>
            <p className='text-gray-100 bg-[#062438] p-10 mb-20'>To solve the financial and time issues, we came up with and implemented AI-based career suggestions. This allows you to get free and fast career suggestions at any time. In addition, by allowing users to choose in advance which career they would like to pursue, we are able to provide skill-based suggestions specific to their preferences. If there is a skill that is determined to be lacking in a career, the app will suggest Udemy or college courses that will allow the user to catch up on that skill, cost included.</p>
          </div>

          <div className="md:w-1/2">
            <img src="/carrerPath.png" alt="screen" className="h-96" />
          </div>
        </div>

      </main>

      <footer className="bg-[#062438] text-center p-6">
        <p className="text-gray-400">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
